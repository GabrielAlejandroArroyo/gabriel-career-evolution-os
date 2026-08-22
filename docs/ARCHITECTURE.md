# Arquitectura — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Principios

1. **Hexagonal / ports & adapters** — el dominio no conoce Supabase ni frameworks UI.  
2. **Presentation → Application → Domain**; Infrastructure implementa ports.  
3. **Evidence-first** — claims y recomendaciones ancladas a datos.  
4. **Explainable scores** — todo score expone rationale.  
5. **Replaceable persistence** — Supabase es adapter, no modelo.  
6. **Server-only secrets** — IA y service keys fuera del browser.  
7. **Incremental slices** — cada slice entrega valor usable.

---

## 2. Vista lógica

```
┌──────────────────────────────────────────────────────────────┐
│ PRESENTATION                                                 │
│  Next.js App Router · React 19 · Server Components/Actions   │
│  UI product (sidebar, dashboard, forms) · Theme dark/light   │
└────────────────────────────┬─────────────────────────────────┘
                             │ DTOs / commands / queries
┌────────────────────────────▼─────────────────────────────────┐
│ APPLICATION                                                  │
│  Use cases · Scoring engines · Matching · Priority · Advisor │
│  Ports: Repositories · AIProvider · Clock · IdGenerator      │
└────────────────────────────┬─────────────────────────────────┘
                             │ domain types / invariants
┌────────────────────────────▼─────────────────────────────────┐
│ DOMAIN                                                       │
│  Entities · Value Objects · Enums · Domain services puros    │
│  State machines (funnel, learning, content)                  │
└────────────────────────────┬─────────────────────────────────┘
                             │ implemented by
┌────────────────────────────▼─────────────────────────────────┐
│ INFRASTRUCTURE                                               │
│  Supabase*Repository · Mappers · Zod schemas · AI adapters   │
│  Storage · Env config                                        │
└──────────────────────────────────────────────────────────────┘
```

**Prohibido:** importar `@supabase/supabase-js` desde `components/` o código de presentación cliente que persista datos. Los Server Actions / route handlers llaman use cases; los use cases llaman ports.

---

## 3. Bounded contexts

| Contexto | Módulos app | Tablas clave |
|---|---|---|
| Identity | auth | profiles |
| Professional Core | career/profile | professional_experiences, education |
| Skills | skills | skills, profile_skills |
| Learning | learning | courses, learning_goals, learning_plans |
| Certifications | certifications | certifications, user_certifications |
| Evidence & Portfolio | portfolio, evidence | portfolio_items, evidence |
| Market | jobs | jobs, job_requirements, job_matches, recruiters |
| Funnel | applications | applications |
| Presence | linkedin, cv, content | linkedin_versions, cv_versions, content_items |
| Journal | journal | career_journal |
| Intelligence | scoring, ai | metrics, ai_recommendations |

---

## 4. Puertos (ports)

### Persistencia

```ts
ProfessionalProfileRepository
SkillRepository
CourseRepository
CertificationRepository
PortfolioRepository
JobRepository
EvidenceRepository
ApplicationRepository
// adicionales
ContentRepository
JournalRepository
LinkedInRepository
CvRepository
MetricsRepository
AiRecommendationRepository
```

### IA

```ts
interface AIProvider {
  completeStructured<T>(input: {
    system: string
    user: string
    schema: ZodType<T>
  }): Promise<T>
}
```

Adapters: `OpenAIAdapter`, `AWSBedrockAdapter` (futuros). MVP puede usar adapter stub o reglas deterministas sin LLM.

### Otros

- `Clock`, `IdGenerator`, `FileStorage` (Supabase Storage adapter)

---

## 5. Flujos principales

### 5.1 Recalcular Dashboard

1. Load profile, skills, certs, portfolio, jobs recientes, linkedin/cv completeness.  
2. Compute dimension scores (domain/application pure functions).  
3. Compute PriorityScore de acciones candidatas.  
4. Persist snapshot opcional en `metrics`.  
5. Render Dashboard.

### 5.2 Match de oferta

1. Parse JD (manual + asistido).  
2. Extraer requirements.  
3. Clasificar MATCH/PARTIAL/GAP/NOT_RELEVANT.  
4. Calcular sub-scores → Job Fit Score + rationale.  
5. Actualizar frecuencias de gaps.

### 5.3 Completar aprendizaje

1. Curso → Completed no valida skill sola.  
2. Requiere Evidence vinculada o deja skill en `partial`.  
3. Ofrece checklist: Lab → Proyecto → LinkedIn → CV → Portfolio.

### 5.4 AI Advisor

1. Armar context pack (perfil, gaps, mercado, evidencia).  
2. Prompt con reglas anti-invención.  
3. Respuesta estructurada Zod → persist `ai_recommendations`.  
4. UI muestra recomendación + fuentes usadas.

---

## 6. Estructura de código (MVP app única)

```
src/
  domain/
    shared/          # Result, Brand types, enums
    profile/
    skills/
    learning/
    certifications/
    portfolio/
    jobs/
    funnel/
    presence/
    scoring/         # pure scoring functions
  application/
    ports/
    use-cases/
    dto/
  infrastructure/
    supabase/
      client.ts
      repositories/
      mappers/
    ai/
    storage/
  # presentation vive en app/ y components/
app/
  (auth)/
  (app)/
    dashboard/
    career/
    skills/
    ...
components/
  ui/
  layout/
lib/                 # wiring / DI composition root
supabase/migrations/
```

Composition root: `lib/container.ts` (o similar) instanciando adapters y pasando a use cases.

---

## 7. Capas de datos

| Capa | Tecnología |
|---|---|
| OLTP | PostgreSQL (Supabase) |
| Auth | Supabase Auth |
| Files | Supabase Storage |
| Cache | No en MVP (opcional React cache / unstable_cache) |
| Search | SQL + ILIKE; full-text post-MVP |

---

## 8. API surface

MVP prioriza **Server Actions** y Server Components sobre REST pública.

Rutas API solo cuando:

- webhooks futuros  
- callbacks AI streaming  
- health checks  

---

## 9. Observabilidad

- Logging estructurado server-side (errores use case).  
- Tabla `metrics` para scores históricos.  
- Sin telemetría de terceros obligatoria en MVP.

---

## 10. Despliegue previsto

| Componente | Destino |
|---|---|
| Web | Vercel (o similar) |
| DB/Auth/Storage | Supabase |
| Secrets | Env del host + Supabase vault |

Ambientes: `local` · `preview` · `prod` (cuando existan).

---

## 11. Decisiones abiertas menores (defaults)

- Tailwind CSS + CSS variables para theme.  
- Component library: empezar custom + primitives; evaluar shadcn en Slice 1 si acelera.  
- Fechas: `timestamptz` UTC.  
- IDs: `uuid` generados en DB.

---

## 12. Validación técnica de arquitectura (pre-código producto)

Antes/durante Slice 1 validar:

1. Import boundaries (ESLint restriction: presentation ↛ supabase).  
2. Una migration con RLS smoke test.  
3. Un use case + repository fake + test de scoring.  

No se requiere implementar módulos de negocio completos para validar el plan.
