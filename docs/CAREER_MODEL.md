# Career Model & Scoring — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Narrativa profesional (target)

> Profesional con amplia experiencia diseñando, desarrollando, integrando y manteniendo sistemas empresariales y transaccionales, que incorpora arquitectura moderna, cloud e inteligencia artificial generativa sobre una sólida experiencia técnica.

**Anti-narrativa:** “Developer que conoce muchas tecnologías”.

**Reposicionamiento:** Software / Solution Architect con experiencia hands-on en sistemas enterprise y transaccionales (banca, integración, legacy modernization).

---

## 2. Trayectoria de roles

```
Technical Lead
  → Software Architect
  → Solution Architect
  → Enterprise Application Architect
  → AI Solutions Architect
```

Roles objetivo en catálogo (matching):

- Software Architect  
- Solution Architect  
- Application Architect  
- Enterprise Application Architect  
- Technical Lead  
- Principal Engineer  
- Enterprise Integration Architect  
- Banking Solutions Architect  
- AWS Solutions Architect  
- AI Solutions Architect  
- GenAI Architect  

---

## 3. Fórmula de diferenciación

```
ENTERPRISE × ARCHITECTURE × BANKING × CLOUD × AI/GENAI
= DIFERENCIACIÓN PROFESIONAL
```

El sistema **no** optimiza skills aisladas de moda. Cada acción se evalúa por cuánto refuerza el producto de estos factores, apalancando experiencia existente.

---

## 4. Niveles de skill (0–5)

| Nivel | Significado |
|---|---|
| 0 | Desconocido |
| 1 | Básico |
| 2 | Intermedio |
| 3 | Avanzado |
| 4 | Experto |
| 5 | Arquitectura / referente |

```
gap = max(0, level_target - level_current)
```

Skill “validada” requiere evidencia vinculada con `strength >= 3` o certificación earned relacionada (configurable).

---

## 5. Categorías de skills (baseline)

- Backend · Frontend · Databases · Integration · Cloud/DevOps · Enterprise (Documentum/BPM/COBIS) · Architecture · AI/GenAI · Soft/Leadership · Banking domain  

Seed inicial: stack del PRD con `needs_validation = true` en niveles estimados.

---

## 6. Scores de dashboard (0–100)

Todos los scores deben devolver:

```ts
{
  score: number
  band?: string
  factors: { name: string; value: number; weight: number; contribution: number }[]
  rationale: string
  version: string // semver del algoritmo
}
```

### 6.1 Career Score

Posicionamiento global vs target Architect.

Factores sugeridos (pesos v1):

| Factor | Peso |
|---|---|
| Architecture Score | 0.20 |
| Experience leverage (años + relevancia) | 0.15 |
| Cloud Score | 0.15 |
| AI Score | 0.10 |
| Portfolio Score | 0.15 |
| Certification Score | 0.10 |
| LinkedIn Score | 0.10 |
| Market Fit (reciente) | 0.05 |

### 6.2 Architecture Score

- Skills architecture level  
- Roles/experiencias marcadas architecture-relevant  
- Evidencia ADR/C4/diagrams  
- Portfolio categoría architecture  
- Certs TOGAF/BIAN en progreso o earned  

### 6.3 Cloud Score

- Skills AWS/Azure/Docker/CI-CD  
- Certs AWS (prioridad) / Azure (dinámica)  
- Evidencia IaC/deploy  
- Demanda cloud en jobs analizados  

### 6.4 AI Score

- Skills Bedrock/RAG/Agents/MCP/LLM  
- Portfolio RAG/Agents  
- Certs AI track  
- Evidencia PoC + contenido  

### 6.5 LinkedIn Score

Checklist: headline target keywords, about narrative, featured, skills endorsed list vs matrix, certs visibles, contenido reciente, señales architecture/leadership/cloud/AI.

### 6.6 Portfolio Score

- # proyectos published por categoría target  
- Completitud de campos (problem→outcomes)  
- Evidencia asociada  
- Cobertura banking/cloud/AI/architecture  

### 6.7 Certification Score

- ROI-weighted progress del roadmap estratégico  
- Earned vs planned  
- Vigencia / catalog_status  

### 6.8 Market Fit Score

Media ponderada de `job_matches.fit_score` de ofertas target recientes (ventana 90 días), con boost a roles architecture.

---

## 7. Priority Score

```
PriorityScore =
  MarketDemand       * 0.25 +
  RoleRelevance      * 0.25 +
  GapSeverity        * 0.15 +
  EvidencePotential  * 0.15 +
  ExperienceLeverage * 0.10 +
  Differentiation    * 0.10
```

Cada factor normalizado 0–100 antes de ponderar.

**ExperienceLeverage:** ¿cuánto reutiliza banking/enterprise/hands-on existente?  
**Differentiation:** contribución a la fórmula Enterprise×Arch×Banking×Cloud×AI.

La UI debe mostrar **por qué** una acción tiene su score (factores + pesos).

---

## 8. Certification ROI (0–100)

```
ROI =
  RoleRelevance        * 0.20 +
  MarketDemand         * 0.20 +
  GapClosure           * 0.15 +
  EvidenceGenerated    * 0.10 +
  Differentiation      * 0.15 +
  CostEfficiency       * 0.10 +  // inverso del costo normalizado
  TimeEfficiency       * 0.05 +  // inverso prep hours
  ExistingPreparation  * 0.05
```

Bandas:

| Score | Band |
|---|---|
| 90–100 | Strategic |
| 75–89 | High |
| 60–74 | Medium |
| &lt;60 | Low |

Azure ROI baja por defecto; sube si Job Market Engine detecta demanda repetida.

---

## 9. Job Fit Score

```
Fit =
  ExperienceMatch   * w1 +
  SkillsMatch       * w2 +
  ArchitectureMatch * w3 +
  IndustryMatch     * w4 +
  CloudMatch        * w5 +
  AIMatch           * w6 +
  CertificationMatch* w7 +
  LanguageMatch     * w8
```

Pesos v1 sugeridos: Skills 0.25, Experience 0.15, Architecture 0.15, Industry 0.10, Cloud 0.10, AI 0.10, Certification 0.10, Language 0.05.  
Ajustables por `target_role` (ej. AI Architect sube w6).

### Clasificación de requisitos

| Clase | Significado |
|---|---|
| MATCH | Cubierto con nivel/evidencia suficiente |
| PARTIAL_MATCH | Parcial / transferible |
| GAP | Requerido y no cubierto |
| NOT_RELEVANT | No aporta al target o ruido del JD |

**No** estudiar todos los gaps: agregar frecuencia cross-job; priorizar gaps con demanda repetida + PriorityScore alto.

---

## 10. Cadena de aprendizaje completa

```
Skill → Course → Lab → Project → Evidence → Certification
  → LinkedIn → CV → Portfolio → Labor Impact
```

Un goal de roadmap no está `done` solo con curso Completed.

---

## 11. Roadmap profesional baseline (fases)

| Fase | Foco |
|---|---|
| 1 | Reposicionamiento: LinkedIn, CV, Skills, Portfolio baseline |
| 2 | TOGAF Foundation |
| 3 | AWS Solutions Architect Associate |
| 4 | BIAN Foundation |
| 5 | TOGAF Practitioner |
| 6 | BIAN Architecture Practitioner |
| 7 | AWS AI Practitioner |
| 8 | Portfolio Bedrock / RAG / AI Agents |
| 9 | AWS Generative AI Developer Professional (cuando preparación suficiente) |
| 10 | AWS Solutions Architect Professional |

Dinámico: Job Market Engine + ROI pueden reordenar (ej. adelantar AI si demanda y evidencia lo justifican; Azure solo con señal de mercado).

---

## 12. Portfolio backlog inicial

1. Multi-tenant SaaS — Next.js + Supabase + PostgreSQL + RLS  
2. BPMN Workflow Platform — Supabase + motor BPMN  
3. Banking Architecture — BIAN + APIs + microservices  
4. Enterprise RAG Platform — AWS Bedrock + Knowledge Bases  
5. AI Agent Platform — Bedrock + Agents + MCP  
6. Legacy Modernization — Legacy → arquitectura moderna  
7. Arquitectura Hexagonal — .NET / Java / Next.js  

---

## 13. Versionado de algoritmos

- Cada motor de score tiene `algorithm_version` (ej. `career-score@1.0.0`).  
- Cambios de pesos → ADR corto + bump versión + tests actualizados.  
- Snapshots en `metrics.breakdown` conservan versión usada.
