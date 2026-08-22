# Modelo de datos — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Convenciones

- PK: `id uuid primary key default gen_random_uuid()`
- Auditoría: `created_at timestamptz not null default now()`, `updated_at timestamptz not null default now()`
- Privacidad: tablas de usuario incluyen `user_id uuid not null references auth.users(id)`
- Soft delete: no en MVP (hard delete controlado); opcional `deleted_at` post-MVP
- Enums: preferir `text` + check o tipos Postgres enum versionados en migrations
- Dinero: `numeric(12,2)` + `currency text` (default `USD`/`ARS` según registro)
- URLs: `text`
- JSON flexible: `jsonb` solo para metadata / rationale / parse payloads

Trigger sugerido: `set_updated_at` en todas las tablas.

---

## 2. Diagrama ER (conceptual)

```
auth.users
    └── profiles (1:1)
            ├── professional_experiences
            ├── education
            ├── profile_skills ──► skills
            ├── user_certifications ──► certifications
            ├── learning_plans ──► learning_goals ──► courses
            ├── portfolio_items ──► evidence
            ├── jobs ──► job_requirements
            │              └── job_matches
            ├── applications ──► recruiters
            ├── linkedin_versions
            ├── cv_versions
            ├── content_items
            ├── career_journal
            ├── metrics
            └── ai_recommendations

skills ◄── courses (skill_id)
certifications ◄── courses (optional)
```

Catálogos compartidos: `skills`, `courses` (plantillas), `certifications`.  
Instancias de usuario: `profile_*`, `user_*`, planes, jobs propios, etc.

---

## 3. Tablas

### 3.1 profiles

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid PK | = auth.users.id |
| full_name | text | |
| headline_current | text | |
| headline_target | text | |
| about_current | text | |
| about_target | text | |
| narrative | text | narrativa profesional |
| career_target | text | ej. Software / Solution Architect |
| years_experience | int | |
| location | text | nullable |
| preferences | jsonb | UI, locale |
| created_at / updated_at | timestamptz | |

### 3.2 professional_experiences

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| company | text | |
| title | text | |
| industry | text | |
| start_date | date | |
| end_date | date | nullable = actual |
| description | text | |
| achievements | jsonb | lista |
| technologies | text[] | |
| is_architecture_relevant | bool | |
| needs_validation | bool | default false |
| sort_order | int | |

### 3.3 education

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| institution | text | |
| degree | text | |
| field | text | |
| status | text | completed / in_progress / planned |
| start_date / end_date | date | nullable |
| needs_validation | bool | |

### 3.4 skills

Catálogo global.

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| name | text unique | |
| category | text | backend, frontend, cloud, ai, architecture, … |
| description | text | nullable |
| market_demand_default | int | 0–100 seed |

### 3.5 profile_skills

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| skill_id | uuid | |
| level_current | int | 0–5 |
| level_target | int | 0–5 |
| years_experience | numeric(4,1) | |
| last_used_at | date | |
| priority | int | |
| market_demand | int | override |
| notes | text | |
| needs_validation | bool | |
| unique(user_id, skill_id) | | |

`gap` es **calculado** (no persistir o persistir como generated): `greatest(level_target - level_current, 0)`.

### 3.6 courses

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | nullable si catálogo global |
| name | text | |
| provider | text | |
| url | text | |
| skill_id | uuid | nullable |
| level | int | |
| duration_hours | numeric | |
| cost | numeric | |
| currency | text | |
| status | text | Backlog/Planned/Studying/Completed/Paused/Discarded |
| progress_pct | int | 0–100 |
| target_role | text | |
| related_gap_skill_id | uuid | |
| market_demand_tag | text | |
| certification_id | uuid | nullable |
| portfolio_item_id | uuid | nullable |
| expected_evidence_type | text | |
| notes | text | |

### 3.7 certifications

Catálogo.

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| issuer | text | |
| name | text | |
| exam_code | text | |
| official_url | text | |
| level | text | foundation/associate/professional/… |
| catalog_status | text | ACTIVE/UPDATED/BETA/COMING_SOON/RETIRED |
| related_roles | text[] | |
| skill_ids | uuid[] | o tabla N:N post-MVP |
| prerequisites | jsonb | |
| cost | numeric | |
| prep_hours_est | int | |
| track | text | architecture/aws/ai/banking/azure |

### 3.8 user_certifications

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| certification_id | uuid | |
| status | text | planned/studying/scheduled/earned/expired |
| priority | int | |
| roi_score | numeric | 0–100 |
| roi_band | text | Strategic/High/Medium/Low |
| roi_rationale | jsonb | |
| target_date | date | |
| earned_at | date | |
| credential_url | text | |
| needs_validation | bool | |

### 3.9 learning_goals / learning_plans

**learning_plans**

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| name | text | |
| horizon | text | 30d/90d/180d/1y/2y |
| start_date / end_date | date | |
| status | text | |

**learning_goals**

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| plan_id | uuid | |
| user_id | uuid | |
| skill_id | uuid | |
| course_id | uuid | nullable |
| lab_notes | text | |
| project_id | uuid | portfolio_items |
| evidence_id | uuid | |
| certification_id | uuid | |
| linkedin_done | bool | |
| cv_done | bool | |
| portfolio_done | bool | |
| labor_impact_notes | text | |
| status | text | |
| sort_order | int | |

### 3.10 portfolio_items

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| title | text | |
| category | text | architecture/banking/cloud/ai/… |
| problem | text | |
| context | text | |
| architecture | text | |
| decisions | text | |
| tradeoffs | text | |
| technologies | text[] | |
| outcomes | text | |
| repo_url | text | |
| diagrams | jsonb | urls/mermaid |
| status | text | backlog/active/published |
| demonstrated_skill_ids | uuid[] | |
| sort_order | int | |

### 3.11 evidence

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| title | text | |
| type | text | github/adr/mermaid/c4/poc/doc/linkedin/presentation/demo/case_study |
| url | text | |
| description | text | |
| skill_ids | uuid[] | |
| portfolio_item_id | uuid | nullable |
| course_id | uuid | nullable |
| strength | int | 1–5 |
| verified | bool | |

### 3.12 jobs

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| title | text | |
| company | text | |
| raw_text | text | oferta completa |
| source | text | |
| location | text | |
| modality | text | remote/hybrid/onsite |
| seniority | text | |
| industry | text | |
| language_req | text | |
| salary_min/max | numeric | nullable |
| currency | text | |
| url | text | |
| posted_at | date | |

### 3.13 job_requirements

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| job_id | uuid | |
| user_id | uuid | |
| label | text | |
| category | text | skill/cert/soft/language/… |
| classification | text | MATCH/PARTIAL_MATCH/GAP/NOT_RELEVANT |
| skill_id | uuid | nullable |
| weight | numeric | |
| notes | text | |

### 3.14 job_matches

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| job_id | uuid | |
| user_id | uuid | |
| fit_score | numeric | 0–100 |
| experience_match | numeric | |
| skills_match | numeric | |
| architecture_match | numeric | |
| industry_match | numeric | |
| cloud_match | numeric | |
| ai_match | numeric | |
| certification_match | numeric | |
| language_match | numeric | |
| rationale | jsonb | |
| computed_at | timestamptz | |

### 3.15 recruiters

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| name | text | |
| company | text | |
| email | text | |
| linkedin_url | text | |
| notes | text | |

### 3.16 applications

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| job_id | uuid | nullable |
| recruiter_id | uuid | nullable |
| company | text | |
| role | text | |
| salary | numeric | |
| country | text | |
| modality | text | |
| source | text | |
| status | text | funnel enum |
| score | numeric | |
| result | text | |
| notes | text | |
| status_changed_at | timestamptz | |
| applied_at | date | |

Estados funnel:  
`Discovered`, `RecruiterContact`, `Applied`, `Screening`, `TechnicalInterview`, `ArchitectureInterview`, `FinalInterview`, `Offer`, `Rejected`, `Accepted`.

### 3.17 linkedin_versions / cv_versions

Campos comunes: `user_id`, `label`, `target_role`, `content` (jsonb o text sections), `score`, `gaps_detected` (jsonb), `is_current`, timestamps.

CV además: `format` (markdown/pdf), `file_path`.

### 3.18 content_items

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| title | text | |
| topic | text | |
| status | text | Idea/Research/Draft/Published |
| body | text | |
| channel | text | linkedin/blog/… |
| published_url | text | |
| metrics | jsonb | views/likes/comments/reposts/contacts/recruiters |
| related_skill_ids | uuid[] | |

### 3.19 career_journal

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| entry_date | date | |
| question | text | |
| research | text | |
| finding | text | |
| decision | text | |
| action | text | |
| result | text | |
| learning | text | |
| pending | text | |

### 3.20 metrics

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| captured_at | timestamptz | |
| career_score | numeric | |
| architecture_score | numeric | |
| cloud_score | numeric | |
| ai_score | numeric | |
| linkedin_score | numeric | |
| portfolio_score | numeric | |
| certification_score | numeric | |
| market_fit_score | numeric | |
| breakdown | jsonb | |

### 3.21 ai_recommendations

| Columna | Tipo | Notas |
|---|---|---|
| id | uuid | |
| user_id | uuid | |
| question | text | |
| answer | text | |
| structured | jsonb | |
| sources | jsonb | ids de entidades usadas |
| model | text | |
| created_at | timestamptz | |

---

## 4. Índices sugeridos

- `(user_id)` en todas las tablas privadas  
- `profile_skills (user_id, skill_id)` unique  
- `applications (user_id, status)`  
- `jobs (user_id, created_at desc)`  
- `user_certifications (user_id, roi_score desc)`  
- GIN opcional en `technologies` / arrays  

---

## 5. Migraciones

Orden previsto:

1. `extensions` (pgcrypto)  
2. `profiles` + trigger updated_at  
3. Catálogos `skills`, `certifications`  
4. Tablas core profile/skills  
5. Learning/certs user  
6. Portfolio/evidence  
7. Jobs/matching/funnel  
8. Presence/content/journal  
9. Metrics/ai_recommendations  
10. RLS policies por tabla  

Detalle de policies: [SECURITY.md](./SECURITY.md).

---

## 6. Seed inicial

- Profile Gabriel + narrativa  
- Education (3 registros; Ciencia de Datos `in_progress`)  
- Skills del stack con `needs_validation = true` en niveles estimados  
- Certificaciones catálogo (TOGAF, AWS, BIAN, Azure opcional)  
- Portfolio backlog (7 items)  
- Learning plan Phase 1–10 como goals de alto nivel  

Nunca marcar `earned` una certificación sin evidencia/confirmación.
