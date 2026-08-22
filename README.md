# Gabriel Career Evolution OS

Plataforma personal de evolución profesional continua. No es un CRUD de cursos: es un sistema operativo de carrera que transforma experiencia real, gaps, mercado laboral y evidencia en posicionamiento, entrevistas y oportunidades.

## Preguntas que responde

| Pregunta | Motor |
|---|---|
| ¿Dónde estoy profesionalmente? | Career Score + Skills Matrix |
| ¿A qué roles puedo apuntar hoy? | Job Market Fit + Role Matching |
| ¿Qué me falta para roles superiores? | Gap Analysis |
| ¿Qué debería estudiar? | Learning Engine + Priority Score |
| ¿Qué certificaciones tienen mayor valor? | Certification ROI |
| ¿Qué conocimiento no estoy mostrando? | Evidence Engine + LinkedIn/CV Optimizer |
| ¿Qué convertir en portfolio? | Portfolio backlog + Evidence |
| ¿Cómo mejorar LinkedIn y CV? | LinkedIn / CV Optimizer |
| ¿Qué buscan los recruiters? | Job Market Engine |
| ¿Por qué una oferta hace o no match? | Job Fit Score |
| ¿Qué priorizar para más entrevistas? | Priority Engine + Career Funnel |

## Fórmula de diferenciación

```
EXPERIENCIA ENTERPRISE × ARQUITECTURA × BANKING × CLOUD × AI/GENAI
= DIFERENCIACIÓN PROFESIONAL
```

## Stack

- **Frontend:** Next.js 16 · React 19 · TypeScript · Zod
- **Backend/data:** Supabase · PostgreSQL · Auth · Storage · RLS
- **Arquitectura:** Hexagonal / modular (Domain → Application → Infrastructure → Presentation)
- **IA:** `AIProvider` desacoplado (adapters futuros: OpenAI, AWS Bedrock)

## Documentación oficial

| Documento | Contenido |
|---|---|
| [docs/PLAN_MAESTRO.md](docs/PLAN_MAESTRO.md) | Plan maestro de implementación |
| [docs/PRD.md](docs/PRD.md) | Product Requirements Document |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Arquitectura técnica |
| [docs/DATABASE.md](docs/DATABASE.md) | Modelo de datos |
| [docs/SECURITY.md](docs/SECURITY.md) | Seguridad y RLS |
| [docs/CAREER_MODEL.md](docs/CAREER_MODEL.md) | Modelo de carrera y scoring |
| [docs/AI.md](docs/AI.md) | Estrategia de IA |
| [docs/CERTIFICATION_ROADMAP.md](docs/CERTIFICATION_ROADMAP.md) | Roadmap de certificaciones |
| [docs/BACKLOG.md](docs/BACKLOG.md) | Épicas, features e historias |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Roadmap de producto y MVP |
| [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md) | LinkedIn / CV / Jobs |
| [docs/TESTING.md](docs/TESTING.md) | Estrategia de testing |
| [docs/ADR/](docs/ADR/) | Architecture Decision Records |

## App web

La presentación profesional (landing de perfil) vive en [`web/`](web/) y se publica en
[gabrielalejandroarroyo.github.io/gabriel-career-evolution-os](https://gabrielalejandroarroyo.github.io/gabriel-career-evolution-os).

```bash
cd web
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para la versión en español y `/en` para la de inglés.

| Dónde | Qué se edita |
|---|---|
| `web/src/data/profile.ts` | Contacto, niveles de skill, stack, credenciales |
| `web/src/i18n/es.ts` · `en.ts` | Todos los textos, tipados contra `i18n/types.ts` |
| `web/src/app/globals.css` | Tokens de color, escala tipográfica, motion |

El despliegue es automático: cada push a `main` que toque `web/` dispara
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), que hace lint, typecheck,
export estático y publica en GitHub Pages.

## Estado del proyecto

**Fase actual:** Documentación oficial + página de presentación de perfil.  
**Próximo paso:** Slice 1 — Auth · Professional Profile · Skills Matrix · Dashboard.

## Slices de implementación

1. Authentication · Profile · Skills · Dashboard  
2. Courses · Certifications · Learning Roadmap  
3. Portfolio · Evidence Engine  
4. Jobs · Matching · Career Funnel  
5. LinkedIn · CV · Content  
6. AI Career Advisor  

## Reglas de verdad

- Nunca inventar títulos, certificaciones ni experiencia.
- Toda afirmación importante debe poder asociarse a evidencia.
- El aprendizaje no termina en un curso: termina en evidencia + impacto laboral.
- Priorizar gaps con demanda repetida en el mercado, no moda tecnológica.

## Perfil baseline

**Gabriel Alejandro Arroyo** — +20 años en tecnología y sistemas empresariales.  
**Trayectoria objetivo:** Technical Lead → Software Architect → Solution Architect → Enterprise Application Architect → AI Solutions Architect.  
**Narrativa:** Arquitecto con experiencia hands-on en sistemas enterprise y transaccionales (no “developer con muchas tecnologías”).

---

Fuente oficial del proyecto: carpeta `docs/`.
