# PRD — Gabriel Career Evolution OS

**Producto:** Gabriel Career Evolution OS  
**Versión:** 1.0  
**Fecha:** 2026-08-22  
**Owner:** Gabriel Alejandro Arroyo  

---

## 1. Resumen ejecutivo

Producto web personal tipo SaaS para gestionar la evolución profesional hacia roles de arquitectura (Software / Solution / Enterprise / AI), partiendo de +20 años de experiencia enterprise hands-on, sin reconversión desde cero.

El sistema convierte experiencia y datos de mercado en scores, gaps priorizados, roadmap de aprendizaje, certificaciones con ROI, portfolio con evidencia, optimización LinkedIn/CV y match de ofertas laborales.

---

## 2. Problema

- Experiencia real abundante, pero señales de mercado (arquitectura, cloud, IA, portfolio) incompletas o poco visibles.
- Aprendizaje desconectado de roles objetivo y demanda.
- LinkedIn/CV tienden a leerse como “developer polivalente” en lugar de “architect hands-on”.
- Ofertas se evalúan de forma intuitiva, sin Job Fit Score ni gap analysis sistemático.
- No hay bitácora ni funnel que cierre el loop hacia entrevistas.

---

## 3. Solución

Plataforma modular con:

1. **Professional Profile** como fuente de verdad.  
2. **Skills Matrix** con niveles 0–5 y gaps.  
3. **Learning + Certification Engines** anclados a rol × gap × mercado.  
4. **Evidence + Portfolio** como prueba de competencia.  
5. **Job Market + Funnel** para match y pipeline.  
6. **LinkedIn / CV / Content** como proyecciones del perfil.  
7. **AI Career Advisor** que razona sobre datos propios (no moda).  
8. **Dashboard** con scores y acciones priorizadas.

---

## 4. Objetivos y no-objetivos

### Objetivos

- Responder de forma permanente las 11 preguntas del README.
- Maximizar diferenciación: Enterprise × Architecture × Banking × Cloud × AI.
- Mantener evidencia-first y validación humana.
- UX de producto, no mantenimiento genérico.

### No-objetivos (MVP / v1)

- Marketplace multi-usuario público.
- Scraping agresivo de LinkedIn/jobs.
- Inventar o “embellecer” experiencia con IA.
- Sustituir mentor humano o coach externo.
- Priorizar Azure sobre AWS sin evidencia de ofertas.

---

## 5. Personas y escenarios

### Persona

Gabriel — profesional senior tech, objetivo Architecture track, background banking/enterprise/legacy modernization, stack .NET/Java/Node + Angular/React + DBs enterprise + Documentum/BPM + AI emergente.

### Escenarios clave

1. **Lunes:** abre Dashboard → ve Top Gaps y Next Certification.  
2. **Oferta nueva:** pega JD → Job Fit Score + gaps prioritarios.  
3. **Fin de curso:** sistema exige evidencia (PoC/ADR/artículo) antes de marcar skill validada.  
4. **Pre-entrevista:** genera versión CV “Banking Architect” desde perfil + evidencia.  
5. **Advisor:** “¿Qué estudiar ahora?” → Priority Score + rationale.

---

## 6. Requisitos funcionales por módulo

### 6.1 Dashboard

Mostrar: posicionamiento actual/objetivo, Career/Architecture/Cloud/AI/LinkedIn/Portfolio/Certification/Market Fit scores, top gaps, top actions, learning actual, próxima certificación, entrevistas, recruiters, ofertas, funnel.

### 6.2 Professional Profile

Experiencia, educación, tecnologías, skills, certificaciones, proyectos, industrias, roles, logros, evidencia. Flag `needs_validation`. Fuente para LinkedIn/CV/Portfolio/Matching.

### 6.3 Skills Matrix

Campos: nombre, categoría, nivel actual/objetivo, años, última utilización, evidencia, proyectos, certificaciones, demanda, prioridad, gap. Niveles 0–5.

### 6.4 Learning Engine

Cursos ligados a rol/gap/demanda. Estados: Backlog, Planned, Studying, Completed, Paused, Discarded. Campos: provider, URL, skill, nivel, duración, costo, progreso, cert, proyecto, evidencia esperada.

### 6.5 Certification Engine

Issuer, nombre, exam code, URL, nivel, skills, rol, prereqs, costo, prep time, estado catálogo (ACTIVE/UPDATED/BETA/COMING_SOON/RETIRED), prioridad, ROI, fecha objetivo.

### 6.6 Learning Roadmap

Horizontes 30/90/180/365/730 días. Cadena: Skill → Curso → Lab → Proyecto → Evidencia → Cert → LinkedIn → CV → Portfolio → Impacto laboral.

### 6.7 Evidence Engine

Tipos: GitHub, arquitectura, ADR, Mermaid, C4, PoC, docs, LinkedIn article, presentación, demo, case study. Link a skills y claims.

### 6.8 Portfolio

Categorías: arquitectura, banking, cloud, IA, BPMN, integración, data, legacy modernization. Campos de decisión/arquitectura/trade-offs.

### 6.9 LinkedIn Optimizer

Actual vs objetivo (headline, about, experience, skills, certs, education, featured, content). Detección de keywords faltantes y narrativa incorrecta.

### 6.10 CV Optimizer

CV maestro + versiones por rol target. Sin invención.

### 6.11 Job Market Engine

Ingesta de oferta → análisis → Job Fit Score + sub-scores + clasificación requisitos.

### 6.12 Gap Analysis

MATCH / PARTIAL MATCH / GAP / NOT RELEVANT. Priorizar por frecuencia en ofertas.

### 6.13 Career Funnel

Estados: Discovered → … → Offer/Rejected/Accepted. Campos empresa, recruiter, rol, salario, país, modalidad, fuente, fechas, score, resultado.

### 6.14 Career Journal

Fecha, pregunta, investigación, hallazgo, decisión, acción, resultado, aprendizaje, pendiente.

### 6.15 Content Engine

Idea → Research → Draft → Published + métricas de engagement.

### 6.16 AI Career Advisor

Responde las preguntas de carrera usando solo datos del sistema + reglas anti-alucinación.

---

## 7. Requisitos no funcionales

| ID | Requisito |
|---|---|
| NFR-1 | Arquitectura hexagonal; sin Supabase en componentes React |
| NFR-2 | TypeScript strict + Zod en boundaries |
| NFR-3 | RLS en todas las entidades privadas |
| NFR-4 | Responsive; dark/light mode |
| NFR-5 | Secrets IA solo server-side |
| NFR-6 | Scores explicables (rationale) |
| NFR-7 | Tests unitarios de scoring/matching |
| NFR-8 | Accesibilidad razonable (navegación teclado, contraste) |
| NFR-9 | Documentación viva en `docs/` |
| NFR-10 | Implementación incremental por slices |

---

## 8. Perfil baseline (datos de negocio)

Ver seed en PLAN_MAESTRO y CAREER_MODEL. Resumen:

- +20 años tech/enterprise  
- Ciclo: Developer → Senior → Analista funcional/técnico → Referente → Diseño soluciones → Integración → Soporte crítico → Modernización  
- Target: TL → Software Architect → Solution Architect → Enterprise Application Architect → AI Solutions Architect  
- Sectores: banca, finanzas, energía, petróleo, seguros, retail, telco, logística, gestión documental, enterprise  
- Stack: C#/.NET/Java/Spring/Node, Angular/React/TS, Sybase/SQL Server/Oracle/Postgres/MySQL/MariaDB, REST/SOAP/microservices/batch, AWS/Docker/Git/ADO, Documentum/BPM/Bizagi/COBIS, Bedrock/RAG/Agents/MCP  

Educación:

- Lic. Tecnologías Digitales — finalizada  
- Formación previa sistemas  
- Lic. Ciencia de Datos — etapa final  

Certs existentes a registrar con validación: Bizagi BPMN, EMC/Documentum, cursos técnicos/cloud/IA.

---

## 9. Métricas de éxito del producto

| Métrica | Definición |
|---|---|
| Career Score Δ | Mejora trimestral |
| Evidence coverage | % skills críticas con evidencia |
| Funnel conversion | Discovered → Interview rate |
| Market Fit avg | Media de Job Fit en ofertas target |
| Certification progress | % roadmap estratégico completado |
| Content → recruiter | Contactos atribuidos a contenido |

---

## 10. Roadmap de releases (alto nivel)

- **MVP:** Slice 1  
- **v0.2:** Slice 2  
- **v0.3:** Slice 3  
- **v0.4:** Slice 4  
- **v0.5:** Slice 5  
- **v1.0:** Slice 6 + hardening  

Detalle: [ROADMAP.md](./ROADMAP.md).

---

## 11. Dependencias y supuestos

- Gabriel provee y valida datos reales.
- Supabase disponible.
- No depender de APIs LinkedIn oficiales en v1.
- Certificaciones “COMING_SOON” se marcan sin inventar disponibilidad.

---

## 12. Open questions (decididas por defecto)

| Pregunta | Default |
|---|---|
| Multi-usuario? | Modelo ready; uso single-user |
| Idioma UI? | Español |
| PDF CV? | Markdown primero; PDF en Slice 5 |
| Monorepo? | No en MVP |
| Azure prioridad? | Baja hasta evidencia de mercado |
