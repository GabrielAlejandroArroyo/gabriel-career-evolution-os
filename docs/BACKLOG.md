# Backlog — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  
**Formato:** Épica → Feature → Historia → Criterios de aceptación  

Prioridad: `P0` MVP · `P1` v0.2–0.3 · `P2` v0.4–0.5 · `P3` v1.0  

---

## E0 — Foundation & Auth

### F0.1 Scaffold del proyecto
**Historia:** Como desarrollador, quiero un proyecto Next.js 16 + TS + estructura hexagonal para implementar slices sin acoplar UI a Supabase.  
**AC:**
- [ ] App Next.js 16 + React 19 + TypeScript strict compila  
- [ ] Carpetas `domain/`, `application/`, `infrastructure/` existen  
- [ ] ESLint (o equivalente) impide import de supabase desde `components/`  
- [ ] Dark/light mode baseline  
- [ ] README apunta a docs  

### F0.2 Supabase + migrations base
**Historia:** Como owner, quiero Auth y tablas base con RLS para que mis datos sean privados desde el día 1.  
**AC:**
- [ ] Migration `profiles` + trigger signup  
- [ ] RLS profiles activo  
- [ ] Login/logout/signup funcional  
- [ ] Test: usuario A no lee perfil B  

### F0.3 Shell de navegación SaaS
**Historia:** Como usuario, quiero un sidebar con todos los módulos (activos o stub) para navegar como producto.  
**AC:**
- [ ] Sidebar: Dashboard, Career, Skills, Roadmap, Learning, Certifications, Portfolio, Jobs, Applications, LinkedIn, CV, Content, Journal, Analytics, AI Advisor  
- [ ] Rutas stub con “Próximamente” en módulos no Slice actual  
- [ ] Responsive  

**Prioridad:** P0  

---

## E1 — Professional Profile

### F1.1 Perfil maestro
**Historia:** Como Gabriel, quiero mantener mi perfil profesional (experiencia, educación, industrias, narrativa) como fuente de verdad.  
**AC:**
- [ ] CRUD experiencias y educación  
- [ ] Campos narrativa, headline current/target, about current/target, career_target  
- [ ] Flag `needs_validation` visible y editable  
- [ ] No se permiten guardar certificaciones earned inventadas desde este módulo  
- [ ] Persistencia vía `ProfessionalProfileRepository` (no supabase en UI)  

### F1.2 Seed baseline
**Historia:** Como Gabriel, quiero un seed inicial de mi perfil real marcado para validación.  
**AC:**
- [ ] Seed con datos del PRD  
- [ ] Niveles/certs dudosos con `needs_validation = true`  
- [ ] Documentado qué falta validar  

**Prioridad:** P0  

---

## E2 — Skills Matrix

### F2.1 Matriz de skills
**Historia:** Como Gabriel, quiero registrar skills con nivel actual/objetivo, años, última uso y gap.  
**AC:**
- [ ] Niveles 0–5 validados  
- [ ] Gap calculado automáticamente  
- [ ] Categorías del career model  
- [ ] Filtro por categoría / gap / prioridad  
- [ ] Link opcional a evidencia (mínimo en MVP: nota/URL)  

### F2.2 Demanda y prioridad
**Historia:** Quiero ver prioridad sugerida por skill aunque el market engine completo llegue después.  
**AC:**
- [ ] Campo market_demand editable  
- [ ] PriorityScore parcial (RoleRelevance + GapSeverity + Differentiation) en MVP  
- [ ] Rationale visible  

**Prioridad:** P0  

---

## E3 — Dashboard & Scoring

### F3.1 Dashboard inicial
**Historia:** Como Gabriel, quiero ver de un vistazo dónde estoy y qué hacer después.  
**AC:**
- [ ] CAREER TARGET visible  
- [ ] Current vs Target Career Score  
- [ ] Scores: Architecture, Cloud, AI, LinkedIn, Portfolio, Certification, Market Fit (Market Fit puede ser N/A hasta Slice 4)  
- [ ] Top Gaps (≤5)  
- [ ] Top Actions (≤5) con PriorityScore + rationale  
- [ ] Current Learning / Next Certification (placeholders si vacíos)  
- [ ] Portfolio Progress  
- [ ] Recruiter Funnel stub  

### F3.2 Motor de scores v1
**Historia:** Como sistema, quiero calcular scores deterministas versionados y testeados.  
**AC:**
- [ ] Funciones puras en `domain/scoring` o `application/scoring`  
- [ ] `algorithm_version` en resultado  
- [ ] Tests unitarios con fixtures  
- [ ] Snapshot opcional en `metrics`  

**Prioridad:** P0  

---

## E4 — Learning Engine

### F4.1 Cursos
**Historia:** Quiero gestionar cursos ligados a rol, gap y demanda.  
**AC:**
- [ ] Campos del PRD  
- [ ] Estados Backlog→…→Discarded con transiciones válidas  
- [ ] Rechazo de “Recommended” si no hay vínculo rol/gap/demanda  
- [ ] Progreso %  

### F4.2 Regla de completitud
**Historia:** Al completar un curso, el sistema debe pedirme evidencia esperada.  
**AC:**
- [ ] Completed no auto-sube skill a target  
- [ ] Checklist Lab/Project/Evidence mostrado  
- [ ] Journal prompt opcional  

**Prioridad:** P1  

---

## E5 — Certification Engine

### F5.1 Catálogo + user certs
**Historia:** Quiero ver certificaciones estratégicas y mi progreso.  
**AC:**
- [ ] Catálogo TOGAF/AWS/BIAN/Azure opcional seed  
- [ ] catalog_status correcto  
- [ ] user_certifications con ROI  

### F5.2 ROI engine
**Historia:** Quiero un ROI 0–100 con banda y explicación.  
**AC:**
- [ ] Fórmula documentada en CAREER_MODEL  
- [ ] Recálculo al cambiar inputs  
- [ ] Tests de bandas Strategic/High/Medium/Low  
- [ ] Azure ROI inicial &lt; AWS equivalente ceteris paribus  

**Prioridad:** P1  

---

## E6 — Learning Roadmap

### F6.1 Horizontes temporales
**Historia:** Quiero planes 30/90/180/365/730 con goals en cadena completa.  
**AC:**
- [ ] learning_plans + learning_goals  
- [ ] Campos de cadena Skill→…→Impacto  
- [ ] Goal no done sin evidencia si skill crítica  
- [ ] Vista timeline  

### F6.2 Fases 1–10
**Historia:** Quiero el roadmap profesional baseline cargado y editable.  
**AC:**
- [ ] Seed fases  
- [ ] Reordenamiento manual  
- [ ] Nota de “dinámico según mercado” visible  

**Prioridad:** P1  

---

## E7 — Evidence Engine

### F7.1 Registro de evidencia
**Historia:** Quiero adjuntar evidencia a skills, cursos y portfolio.  
**AC:**
- [ ] Tipos del PRD  
- [ ] strength 1–5  
- [ ] Link a skill_ids  
- [ ] Storage path seguro  

### F7.2 Cobertura
**Historia:** Quiero ver qué conocimiento tengo pero no muestro.  
**AC:**
- [ ] Lista skills nivel ≥3 sin evidencia  
- [ ] Acción sugerida “crear evidencia”  

**Prioridad:** P1  

---

## E8 — Portfolio

### F8.1 Proyectos
**Historia:** Quiero gestionar proyectos de portfolio con arquitectura y trade-offs.  
**AC:**
- [ ] Campos problem→outcomes  
- [ ] Categorías  
- [ ] Status backlog/active/published  
- [ ] Seed 7 proyectos iniciales  

### F8.2 Progreso en dashboard
**AC:**
- [ ] % published / categoría coverage  

**Prioridad:** P1  

---

## E9 — Job Market Engine

### F9.1 Alta de oferta
**Historia:** Quiero pegar una oferta completa y analizarla.  
**AC:**
- [ ] Guardar raw_text  
- [ ] Extraer rol, seniority, skills, cloud, AI, industria, certs, idioma (manual + asistido)  
- [ ] job_requirements creados  

### F9.2 Job Fit Score
**Historia:** Quiero un fit 0–100 con sub-scores y rationale.  
**AC:**
- [ ] Sub-scores del PRD  
- [ ] Clasificación MATCH/PARTIAL/GAP/NOT_RELEVANT  
- [ ] Tests con JD fixture architecture banking  

### F9.3 Frecuencia de gaps
**Historia:** Solo priorizar gaps repetidos.  
**AC:**
- [ ] Agregación de gaps cross-jobs  
- [ ] Dashboard/Advisor consume frecuencia  

**Prioridad:** P2  

---

## E10 — Career Funnel

### F10.1 Applications
**Historia:** Quiero registrar procesos laborales y su estado.  
**AC:**
- [ ] Estados del funnel con máquina de estados  
- [ ] Campos empresa, recruiter, rol, salario, país, modalidad, fuente, score  
- [ ] Vista kanban o lista por estado  

### F10.2 Recruiters
**AC:**
- [ ] CRUD recruiters  
- [ ] Link a applications  

**Prioridad:** P2  

---

## E11 — LinkedIn Optimizer

### F11.1 Versiones y gaps
**Historia:** Quiero comparar LinkedIn actual vs objetivo y detectar gaps de narrativa.  
**AC:**
- [ ] headline/about current vs target  
- [ ] Detección: keywords faltantes, poca arquitectura/liderazgo/cloud/AI, exceso tech sin narrativa  
- [ ] LinkedIn Score alimenta dashboard  
- [ ] Checklist de reposicionamiento Architect  

**Prioridad:** P2  

---

## E12 — CV Optimizer

### F12.1 CV maestro y versiones
**Historia:** Quiero un CV maestro y versiones por rol sin inventar experiencia.  
**AC:**
- [ ] Versiones: Software Architect, Solution Architect, TL, Banking, AWS, AI  
- [ ] Cada bullet importante linkeable a evidence_id o needs_validation  
- [ ] Export Markdown (PDF opcional)  

**Prioridad:** P2  

---

## E13 — Content Engine

### F13.1 Pipeline de contenido
**Historia:** Quiero convertir research en contenido con métricas.  
**AC:**
- [ ] Estados Idea→Published  
- [ ] Topics sugeridos (RLS, Bedrock, BIAN, etc.)  
- [ ] Métricas views/likes/comments/reposts/contacts/recruiters  

**Prioridad:** P2  

---

## E14 — Career Journal

### F14.1 Bitácora
**Historia:** Quiero registrar pregunta→decisión→resultado para conservar evolución.  
**AC:**
- [ ] Campos del PRD  
- [ ] Búsqueda por texto/fecha  
- [ ] Link opcional a recommendation/job  

**Prioridad:** P2–P3  

---

## E15 — AI Career Advisor

### F15.1 Advisor
**Historia:** Quiero preguntar al advisor y recibir acciones ancladas a mis datos.  
**AC:**
- [ ] 10 preguntas canónicas  
- [ ] ContextPack + hard rules  
- [ ] Zod structured output  
- [ ] Persist ai_recommendations  
- [ ] Feature flag  
- [ ] Test no-invention  

**Prioridad:** P3  

---

## E16 — Analytics

### F16.1 Métricas históricas
**Historia:** Quiero ver evolución de scores y funnel en el tiempo.  
**AC:**
- [ ] Serie temporal desde `metrics`  
- [ ] Funnel conversion básica  
- [ ] Evidence coverage trend  

**Prioridad:** P3  

---

## Matriz Slice ↔ Épicas

| Slice | Épicas |
|---|---|
| 1 | E0, E1, E2, E3 |
| 2 | E4, E5, E6 |
| 3 | E7, E8 |
| 4 | E9, E10 |
| 5 | E11, E12, E13, E14 (parcial) |
| 6 | E15, E14 (resto), E16 |

---

## Orden de implementación recomendado (Sprint-like)

1. F0.1 → F0.2 → F0.3  
2. F1.1 → F1.2 → F2.1 → F2.2 → F3.2 → F3.1  
3. F4.x → F5.x → F6.x  
4. F7.x → F8.x  
5. F9.x → F10.x  
6. F11–F14  
7. F15 → F16  

---

## Definition of Done transversal (cada feature)

1. Compila  
2. Tests relevantes verdes  
3. RLS si hay tabla nueva  
4. Docs actualizadas si cambia comportamiento  
5. Backlog marcado  
6. ADR si decisión arquitectónica nueva  
7. Sin invención de datos en seeds  
