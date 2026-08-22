# Plan Maestro de Implementación — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  
**Estado:** Fuente oficial del proyecto  
**Fase:** Planificación (sin implementación de producto aún)

---

## 1. Análisis del requerimiento

### 1.1 Qué es el producto

Gabriel Career Evolution OS es un **sistema operativo de carrera profesional**: un producto SaaS personal que orquesta perfil, skills, aprendizaje, certificaciones, portfolio, evidencia, mercado laboral, LinkedIn/CV y un advisor de IA para maximizar empleabilidad hacia roles de arquitectura.

### 1.2 Qué no es

| No es | Sí es |
|---|---|
| CRUD de cursos | Motor de decisión basado en roles, gaps y mercado |
| Tracker genérico de hábitos | Pipeline experiencia → evidencia → visibilidad → oferta |
| Reconversión desde cero | Reposicionamiento de +20 años enterprise |
| Generador de CV con IA inventando | Optimizador anclado a evidencia verificable |

### 1.3 Problema central

Gabriel tiene experiencia profunda (banking, COBIS, Documentum, integración, modernización) pero el mercado de arquitectos exige **señales visibles**: arquitectura formal, cloud, IA, portfolio, narrativa LinkedIn/CV y match explícito con ofertas. El gap no es “falta de experiencia”: es **falta de sistema para convertir experiencia en posicionamiento competitivo**.

### 1.4 Hipótesis de valor

Si se gestiona de forma continua:

```
Experiencia → Análisis → Gap → Formación → Certificación → Proyecto → Evidencia
→ LinkedIn/CV/Portfolio → Visibilidad → Recruiter → Entrevista → Oferta
```

…entonces aumentan entrevistas y match con roles target sin descartar el background hands-on.

### 1.5 Usuarios

| Actor | Rol |
|---|---|
| Gabriel (owner) | Único usuario productivo en MVP (single-tenant personal) |
| Sistema / AI Advisor | Agente interno de recomendación |
| Futuro (post-MVP) | Multi-usuario opcional; el modelo ya usa `user_id` + RLS |

### 1.6 Restricciones no negociables

1. Nunca inventar experiencia, títulos ni certificaciones.
2. Toda claim importante → evidencia asociable.
3. UI/UX de producto SaaS, no panel CRUD.
4. Hexagonal: Presentation no habla con Supabase.
5. Claves de IA solo en servidor.
6. RLS obligatorio en datos privados.
7. Aprendizaje incompleto sin evidencia/impacto.

---

## 2. Visión y objetivos

### 2.1 Visión

Ser la fuente única de verdad de la evolución profesional de Gabriel hacia Software / Solution / Enterprise / AI Architect, con scoring, roadmap dinámico y feedback de mercado.

### 2.2 Objetivos de producto (OKR-style)

| Objetivo | Resultado medible |
|---|---|
| Posicionamiento | Career Score y scores por dimensión visibles y trazables |
| Diferenciación | Narrativa Architect hands-on en LinkedIn/CV |
| Empleabilidad | Job Fit Score + funnel de aplicaciones |
| Evidencia | % de skills críticas con evidencia ≥ umbral |
| Aprendizaje | Roadmap 30/90/180/365/730 alineado a gaps × mercado |
| Certificaciones | ROI score y secuencia TOGAF → AWS → BIAN → AI |

### 2.3 Fórmula de diferenciación (inmutable)

```
ENTERPRISE × ARCHITECTURE × BANKING × CLOUD × AI/GENAI = DIFERENCIACIÓN
```

---

## 3. Arquitectura propuesta (resumen)

Ver detalle en [ARCHITECTURE.md](./ARCHITECTURE.md).

```
┌─────────────────────────────────────────────────────────┐
│ Presentation (Next.js App Router · UI · Server Actions) │
└───────────────────────────┬─────────────────────────────┘
                            │ ports / use cases
┌───────────────────────────▼─────────────────────────────┐
│ Application (use cases, scoring, matching, advisors)    │
└───────────────────────────┬─────────────────────────────┘
                            │ repository / AI ports
┌───────────────────────────▼─────────────────────────────┐
│ Domain (entities, value objects, invariants, scores)    │
└───────────────────────────┬─────────────────────────────┘
                            │ adapters
┌───────────────────────────▼─────────────────────────────┐
│ Infrastructure (Supabase, Storage, AI adapters, Zod)    │
└─────────────────────────────────────────────────────────┘
```

**Stack:** Next.js 16 · React 19 · TypeScript · Zod · Supabase (Auth, Postgres, Storage) · RLS.

**Puertos de persistencia:**  
`ProfessionalProfileRepository`, `SkillRepository`, `CourseRepository`, `CertificationRepository`, `PortfolioRepository`, `JobRepository`, `EvidenceRepository`, `ApplicationRepository` (+ Content, Journal, LinkedIn, CV).

**IA:** `AIProvider` + adapters (`OpenAIAdapter`, `AWSBedrockAdapter`) solo server-side.

---

## 4. Modelo de dominio

Ver [CAREER_MODEL.md](./CAREER_MODEL.md).

### 4.1 Bounded contexts

| Contexto | Responsabilidad |
|---|---|
| **Identity** | Auth, `profiles`, sesión |
| **Professional Core** | Experiencia, educación, industrias, roles, logros |
| **Skills** | Matriz, niveles 0–5, gaps, demanda |
| **Learning** | Cursos, goals, plans, roadmap temporal |
| **Certifications** | Catálogo, ROI, user certs, prioridad |
| **Evidence & Portfolio** | Evidencia, proyectos, artefactos |
| **Market** | Jobs, requirements, matches, recruiters |
| **Funnel** | Applications y estados de proceso |
| **Presence** | LinkedIn versions, CV versions, Content |
| **Journal** | Bitácora de decisiones |
| **Intelligence** | Scoring, Priority Engine, AI Advisor |
| **Analytics** | Métricas agregadas |

### 4.2 Agregados principales

- `ProfessionalProfile` (raíz) → experiences, education, industries  
- `Skill` / `ProfileSkill`  
- `LearningPlan` → goals → courses  
- `Certification` / `UserCertification`  
- `PortfolioItem` → evidence links  
- `Job` → requirements → `JobMatch`  
- `Application` → recruiter, funnel state  
- `LinkedInVersion` / `CvVersion`  
- `ContentItem`  
- `CareerJournalEntry`  
- `AiRecommendation`

### 4.3 Invariantes de dominio

1. Nivel skill ∈ {0,1,2,3,4,5}; gap = max(0, target − current).
2. Curso sin vínculo a (rol objetivo ∨ gap ∨ demanda) no entra a “Recommended”.
3. Certificación ROI ∈ [0,100] con banda Strategic/High/Medium/Low.
4. Job Fit Score = composición ponderada de sub-scores; siempre explicable.
5. Claim en CV/LinkedIn requiere `evidence_id` o flag `needs_validation`.
6. Estados de funnel son máquina de estados (transiciones válidas).

---

## 5. Modelo de datos (resumen)

Ver [DATABASE.md](./DATABASE.md).

Tablas iniciales:

`profiles`, `professional_experiences`, `education`, `skills`, `profile_skills`, `courses`, `certifications`, `user_certifications`, `learning_goals`, `learning_plans`, `portfolio_items`, `evidence`, `jobs`, `job_requirements`, `job_matches`, `applications`, `recruiters`, `linkedin_versions`, `cv_versions`, `content_items`, `career_journal`, `metrics`, `ai_recommendations`.

Todas con `created_at`, `updated_at`. Entidades privadas con `user_id` + RLS.

---

## 6. Seguridad y RLS

Ver [SECURITY.md](./SECURITY.md).

- Auth: Supabase Auth (email/password o magic link en MVP).
- RLS: `auth.uid() = user_id` en tablas privadas.
- Catálogos compartidos (`skills`, `certifications`, `courses` base) lectura pública autenticada; escritura admin/seed.
- Storage: buckets privados por usuario.
- Secrets IA: solo env server (`OPENAI_API_KEY`, `AWS_*`), nunca `NEXT_PUBLIC_*`.

---

## 7. Motor de scoring

Ver [CAREER_MODEL.md](./CAREER_MODEL.md) § Scoring.

### 7.1 Scores de dashboard

| Score | Intención |
|---|---|
| Career Score | Posicionamiento global vs target |
| Architecture Score | Arquitectura / ADRs / C4 / roles |
| Cloud Score | AWS/Azure + práctica + certs |
| AI Score | GenAI / Bedrock / Agents / evidencia |
| LinkedIn Score | Completitud + keywords + narrativa |
| Portfolio Score | Proyectos × evidencia × categorías target |
| Certification Score | Progreso × ROI × vigencia |
| Market Fit Score | Promedio ponderado de matches recientes |

### 7.2 Priority Score

```
PriorityScore =
  MarketDemand      * 0.25 +
  RoleRelevance     * 0.25 +
  GapSeverity       * 0.15 +
  EvidencePotential * 0.15 +
  ExperienceLeverage* 0.10 +
  Differentiation   * 0.10
```

Toda acción priorizada debe exponer **rationale** (factores + pesos).

### 7.3 Certification ROI (0–100)

Factores: role relevance, market demand, gap, evidence generated, differentiation, costo (inverso), tiempo (inverso), preparación existente.  
Bandas: 90–100 Strategic · 75–89 High · 60–74 Medium · &lt;60 Low.

### 7.4 Job Fit Score

Sub-scores: Experience · Skills · Architecture · Industry · Cloud · AI · Certification · Language → agregado explicable + clasificación MATCH / PARTIAL / GAP / NOT_RELEVANT por requisito.

---

## 8. Estructura de carpetas propuesta

```
prj_hoja_vida_ga/
├── README.md
├── docs/
│   ├── PLAN_MAESTRO.md
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── SECURITY.md
│   ├── CAREER_MODEL.md
│   ├── AI.md
│   ├── CERTIFICATION_ROADMAP.md
│   ├── BACKLOG.md
│   ├── ROADMAP.md
│   └── ADR/
├── apps/web/                    # Next.js 16 app (cuando inicie Slice 1)
│   ├── app/                     # Presentation (App Router)
│   ├── components/
│   ├── styles/
│   └── ...
├── packages/                    # monorepo opcional; MVP puede ser app única
│   └── ...
├── src/                         # si app única (preferencia MVP)
│   ├── domain/
│   │   ├── career/
│   │   ├── skills/
│   │   ├── learning/
│   │   ├── certifications/
│   │   ├── portfolio/
│   │   ├── jobs/
│   │   ├── presence/
│   │   └── shared/
│   ├── application/
│   │   ├── use-cases/
│   │   ├── scoring/
│   │   ├── matching/
│   │   └── ports/
│   ├── infrastructure/
│   │   ├── supabase/
│   │   ├── ai/
│   │   └── mappers/
│   └── presentation/            # o colocalizado en app/
├── supabase/
│   ├── migrations/
│   ├── policies/
│   └── seed/
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

**Decisión MVP:** app única Next.js con carpetas `domain/`, `application/`, `infrastructure/` dentro del proyecto; monorepo solo si crece complejidad.

---

## 9. ADRs iniciales

| ADR | Decisión |
|---|---|
| [ADR-001](./ADR/001-hexagonal-architecture.md) | Arquitectura hexagonal / ports & adapters |
| [ADR-002](./ADR/002-supabase-as-adapter.md) | Supabase solo como adapter de persistencia |
| [ADR-003](./ADR/003-scoring-explainability.md) | Scores siempre explicables |
| [ADR-004](./ADR/004-evidence-first-claims.md) | Claims anclados a evidencia |
| [ADR-005](./ADR/005-ai-provider-port.md) | IA desacoplada vía AIProvider |
| [ADR-006](./ADR/006-rls-single-user.md) | RLS + user_id desde día 1 |
| [ADR-007](./ADR/007-learning-completion-policy.md) | Curso ≠ aprendizaje completo |

---

## 10. Roadmap de producto y fases

Ver [ROADMAP.md](./ROADMAP.md).

| Fase | Nombre | Entrega |
|---|---|---|
| **0** | Foundation | Docs, ADRs, scaffold, migrations base, Auth |
| **1** | Core Career | Profile, Skills, Dashboard scores |
| **2** | Learning Loop | Courses, Certs, Roadmap 30–730 |
| **3** | Evidence Loop | Portfolio, Evidence Engine |
| **4** | Market Loop | Jobs, Matching, Funnel |
| **5** | Presence Loop | LinkedIn, CV, Content |
| **6** | Intelligence | AI Career Advisor + Analytics |
| **7** | Hardening | Perf, a11y, export, backups |

Alineado a slices 1–6 del requerimiento.

---

## 11. Definición de MVP

### MVP = Slice 1 (+ mínimo de foundation)

**Incluye:**

1. Auth (Supabase) + RLS baseline  
2. Professional Profile maestro (CRUD estructurado, no genérico)  
3. Skills Matrix (niveles, gaps, evidencia mínima)  
4. Dashboard con scores calculados (reglas deterministas; IA opcional)  
5. Seed del perfil baseline de Gabriel (marcando `needs_validation` donde aplique)  
6. Dark/light mode + sidebar navegable (stubs de módulos futuros)

**Excluye del MVP:**

- AI Advisor productivo  
- Job matching  
- Generación LinkedIn/CV  
- Portfolio completo  
- Integraciones OAuth LinkedIn  
- Scraping de ofertas  

**Criterio de éxito MVP:**  
Gabriel puede abrir el dashboard, ver dónde está, ver top gaps/acciones y editar skills/perfil sin romper invariantes ni RLS.

---

## 12. Backlog (vista ejecutiva)

Ver [BACKLOG.md](./BACKLOG.md) para épicas → features → historias → AC.

| Épica | Slice |
|---|---|
| E0 Foundation & Auth | 0–1 |
| E1 Professional Profile | 1 |
| E2 Skills Matrix | 1 |
| E3 Dashboard & Scoring | 1 |
| E4 Learning Engine | 2 |
| E5 Certification Engine | 2 |
| E6 Learning Roadmap | 2 |
| E7 Evidence Engine | 3 |
| E8 Portfolio | 3 |
| E9 Job Market Engine | 4 |
| E10 Career Funnel | 4 |
| E11 LinkedIn Optimizer | 5 |
| E12 CV Optimizer | 5 |
| E13 Content Engine | 5 |
| E14 Career Journal | 5–6 |
| E15 AI Career Advisor | 6 |
| E16 Analytics | 6–7 |

---

## 13. Estrategia de testing

| Capa | Qué | Herramienta sugerida |
|---|---|---|
| Unit | Scoring, ROI, Priority, Gap, state machines | Vitest |
| Integration | Repositories + Supabase (test DB / local) | Vitest + supabase |
| Contract | Ports/adapters mappers | Vitest |
| E2E | Auth → Profile → Skills → Dashboard | Playwright |
| Security | RLS policies (usuario A no ve B) | SQL tests / pgTAP o scripts |
| AI | Prompts con fixtures; no flaky network en CI | mocks del AIProvider |

**Regla:** ningún score sin test de ejemplo + rationale esperado.

---

## 14. Estrategia de IA

Ver [AI.md](./AI.md).

- IA **asesora**; no es fuente de verdad.
- Contexto inyectado: perfil, skills, gaps, mercado, evidencia, objetivos.
- Prohibido inventar experiencia.
- Output estructurado (Zod) + explicación.
- Feature flag: Advisor off en MVP; on en Slice 6.

---

## 15. Integración LinkedIn / CV / Jobs

| Canal | MVP | Evolución |
|---|---|---|
| LinkedIn | Versiones manuales + checklist + keywords | Export copy; futuro OAuth si API disponible |
| CV | CV maestro + versiones por rol (Markdown/PDF) | Templates; nunca auto-inventar |
| Jobs | Pegar oferta completa → parse asistido → match | Futuro: import URL / ATS export |

Principio: **Professional Profile es la fuente**; LinkedIn/CV/Jobs son proyecciones.

---

## 16. Plan de implementación por etapas

### Etapa 0 — Ahora (completa con este plan)

- [x] Análisis y docs oficiales  
- [x] ADRs  
- [x] Init git + estructura docs (este entregable)  
- [ ] (Opcional) scaffold Next.js mínimo solo para validar stack — **diferido a inicio Slice 1**

### Etapa 1 — Slice 1

1. Scaffold Next.js 16 + TS + Tailwind + theme  
2. Supabase project + migrations + RLS  
3. Auth flows  
4. Domain + ports profile/skills  
5. Supabase adapters  
6. UI Profile / Skills / Dashboard  
7. Seed baseline + flags `needs_validation`  
8. Tests scoring + e2e smoke  
9. Actualizar backlog/docs

### Etapas 2–6

Según [ROADMAP.md](./ROADMAP.md) y slices del PRD.

**Cierre de cada fase:** compile · tests · fix · seguridad · docs · backlog · ADR si hubo decisión.

---

## 17. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Scope creep (todo el OS de una vez) | Alto | Slices estrictos; MVP = Slice 1 |
| Scores opacos / no confiables | Alto | Explainability + tests + pesos versionados |
| Inventar datos en seeds/IA | Crítico | `needs_validation`, evidence-first, prompts hard rules |
| Acoplar UI a Supabase | Alto | Hexagonal + review de imports |
| ROI de certs desactualizado | Medio | Recalcular con ofertas reales (Slice 4) |
| LinkedIn API limitada | Medio | Flujo manual-first |
| Sobrecarga de UI CRUD | Medio | Diseño producto: dashboard-first, acciones |
| Secretos en cliente | Crítico | Solo server; checklist SECURITY |
| Migraciones RLS incompletas | Alto | Tests de aislamiento por user |
| Priorizar Azure vs AWS por moda | Medio | Prioridad dinámica por Job Market Engine |

---

## 18. Decisiones técnicas (baseline)

| Tema | Decisión | Alternativa descartada |
|---|---|---|
| Framework | Next.js 16 App Router | Remix / pure SPA |
| Lenguaje | TypeScript strict | JS |
| DB/Auth | Supabase Postgres + Auth | Firebase / custom |
| Validación | Zod | Yup |
| Arquitectura | Hexagonal ligera en monolito Next | Clean Architecture full / DDD pesado |
| Monorepo | No en MVP (app única) | Turborepo inmediato |
| UI | Tailwind + design tokens dark/light | shadcn opcional post-MVP |
| IA | Port + adapters server-only | Llamadas desde browser |
| Multi-tenant | Modelo ready (`user_id`) · uso single-user | Multi-org prematuro |
| i18n | Español UI MVP | i18n completo |
| Deploy | Vercel + Supabase (previsto) | Decidir en Slice 1 |

---

## 19. Baseline de datos de negocio (seed plan)

Cargar en seeds **marcando validación** donde falte confirmación humana:

- Perfil Gabriel + narrativa target  
- Industrias y sectores (banca, energía, etc.)  
- Stack skills con niveles tentativos `needs_validation`  
- Roles objetivo  
- Certificaciones catálogo (TOGAF, AWS SAA/SAP, AI Practitioner, GenAI Pro, BIAN, Azure opcional)  
- Portfolio backlog (7 proyectos sugeridos)  
- Roadmap fases 1–10  
- Cursos placeholder solo si hay URL/provider reales; si no, backlog vacío

---

## 20. Criterios de aceptación del Plan Maestro

Este plan se considera aceptado cuando:

1. Existe documentación en `docs/` listada en README.  
2. MVP y slices están definidos sin ambigüedad.  
3. Modelo de datos y seguridad permiten iniciar migrations.  
4. Backlog tiene épicas/features/historias con AC.  
5. Riesgos y decisiones técnicas están registrados.  
6. No se ha implementado producto completo prematuramente.

---

## 21. Próxima acción autorizada

Al aprobar implícitamente este plan (siguiente mensaje de implementación):

1. Inicializar proyecto Next.js + Supabase scaffold  
2. Migrations + RLS mínimas  
3. Slice 1  

**Hasta entonces:** la fuente oficial es este documento y el resto de `docs/`.
