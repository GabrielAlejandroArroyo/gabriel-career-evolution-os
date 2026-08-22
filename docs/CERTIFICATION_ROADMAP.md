# Certification Roadmap — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Principios

1. Certificación sirve a **rol objetivo × gap × demanda**, no a colección de badges.  
2. ROI score decide prioridad; el roadmap baseline es punto de partida.  
3. AWS &gt; Azure por defecto; Azure sube solo con señal de mercado.  
4. Estados de catálogo: ACTIVE · UPDATED · BETA · COMING_SOON · RETIRED.  
5. Nunca marcar earned sin validación.

---

## 2. Tracks

### 2.1 Architecture (TOGAF)

```
TOGAF Enterprise Architecture Foundation
  → TOGAF Enterprise Architecture Practitioner
```

**Por qué:** lenguaje y credencial de arquitectura enterprise; refuerza reposicionamiento Architect.

### 2.2 AWS Architecture

```
AWS Solutions Architect Associate
  → AWS Solutions Architect Professional
```

**Por qué:** señal cloud dominante en ofertas architecture; apalanca labs/portfolio.

### 2.3 AWS AI

```
AWS AI Practitioner
  → AWS Generative AI Developer Professional
```

**Por qué:** puente a AI Solutions Architect; alinear con portfolio Bedrock/RAG/Agents.

> Si el examen GenAI Pro está COMING_SOON o cambia de nombre, registrar `catalog_status` real; no inventar.

### 2.4 Banking (BIAN)

```
BIAN Foundation
  → BIAN Architecture Practitioner
```

**Por qué:** diferencia banking architecture sobre genéricos cloud-only.

### 2.5 Azure (opcional, baja prioridad inicial)

```
Azure Administrator Associate
  → Azure Solutions Architect Expert (AZ-305)
```

**Activación:** Job Market Engine detecta demanda repetida → subir ROI/prioridad.

---

## 3. Secuencia profesional baseline (alineada a fases de carrera)

| Orden | Certificación | Fase carrera |
|---|---|---|
| 1 | (Reposicionamiento LinkedIn/CV/Skills/Portfolio — no cert) | Fase 1 |
| 2 | TOGAF Foundation | Fase 2 |
| 3 | AWS SAA | Fase 3 |
| 4 | BIAN Foundation | Fase 4 |
| 5 | TOGAF Practitioner | Fase 5 |
| 6 | BIAN Architecture Practitioner | Fase 6 |
| 7 | AWS AI Practitioner | Fase 7 |
| 8 | (Portfolio Bedrock/RAG/Agents — evidencia) | Fase 8 |
| 9 | AWS GenAI Developer Professional | Fase 9 |
| 10 | AWS SAP | Fase 10 |

La secuencia puede reordenarse si:

- ROI de una cert supera umbral Strategic y hay ventana de mercado.  
- Una cert prerequisito bloquea otra.  
- Catalog status = RETIRED/COMING_SOON.

---

## 4. Certificaciones existentes a registrar

| Ítem | Acción |
|---|---|
| Bizagi BPMN | Registrar con `needs_validation` hasta confirmar issuer/fecha |
| EMC / Documentum | Idem |
| Cursos cloud/IA técnicos | Como courses; cert solo si hay credencial real |

---

## 5. Campos mínimos por certificación (catálogo)

- issuer, name, exam_code, official_url  
- level, related_roles[], skill links  
- prerequisites, cost, prep_hours_est  
- catalog_status, track  

Usuario: status, priority, roi_score, roi_band, roi_rationale, target_date, earned_at, credential_url.

---

## 6. ROI — uso operativo

Dashboard muestra:

- Next Certification = mayor ROI entre planned/studying alineada a fase activa **o** override manual.  
- Comparativa de bandas Strategic/High/…  

Recalcular ROI cuando:

- cambia profile_skills  
- se agregan job_matches  
- cambia market_demand de skills  
- se completa evidencia relacionada  

---

## 7. Evidencia esperada por track

| Track | Evidencia típica |
|---|---|
| TOGAF | ADR, C4, case study architecture |
| AWS SAA/SAP | Diagramas, IaC lab, deploy demo |
| AWS AI | RAG PoC, Agent+MCP demo, artículo |
| BIAN | Banking architecture portfolio item |
| Azure | Solo si track activado por mercado |

---

## 8. Definition of Done de una certificación en el OS

No basta pasar el examen:

1. Status `earned` + fecha (+ URL si existe)  
2. Skills relacionadas actualizadas (con validación)  
3. LinkedIn actualizado  
4. CV versión relevante actualizada  
5. Preferible: evidencia/portfolio linkeada  
6. Journal entry con aprendizaje  

---

## 9. Riesgos

| Riesgo | Mitigación |
|---|---|
| Examen renombrado/retirado | catalog_status + URL oficial |
| Estudiar Azure por default | peso ROI inicial bajo |
| Acumular badges sin portfolio | cadena Evidence obligatoria en roadmap |
| Fechas irreales | target_date + prep_hours en planning |
