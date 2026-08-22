# Integraciones — LinkedIn · CV · Jobs

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Principio

**Professional Profile** es la fuente de verdad.  
LinkedIn, CV y Job Matching son **proyecciones** y **análisis**, no silos de datos.

```
Profile + Skills + Evidence + Certs + Portfolio
        ↓
   LinkedIn versions
   CV versions (por rol)
   Job Fit / Gaps
```

---

## 2. LinkedIn

### MVP / v0.5
- Captura manual de headline/about/experiencia featured.  
- Versiones `current` vs `target`.  
- Detector de gaps (keywords, arquitectura, liderazgo, cloud, AI, narrativa).  
- Checklist de reposicionamiento Architect hands-on.  
- Borradores sugeridos (rule-based; LLM en Slice 6) **anclados a evidencias**.

### No en v1
- Publicación automática.  
- Dependencia dura de LinkedIn Official API (acceso limitado).

### Evolución
- Export de texto listo para pegar.  
- OAuth solo si hay API estable y valor claro.  
- Métricas de contenido vía registro manual → Content Engine.

---

## 3. CV

### Modelo
- **CV maestro** derivado del perfil.  
- **Versiones orientadas a rol:**  
  Software Architect · Solution Architect · Technical Lead · Banking Architect · AWS Architect · AI Solutions Architect.

### Reglas
- Nunca inventar bullets.  
- Claims fuertes → `evidence_id` o `needs_validation`.  
- Export Markdown primero; PDF en iteración siguiente (Playwright/Puppeteer o servicio).

### Flujo
1. Seleccionar target role.  
2. Filtrar experiencias/skills/certs/portfolio relevantes.  
3. Generar estructura.  
4. Revisión humana obligatoria antes de “publicado”.

---

## 4. Jobs

### Ingesta
1. Usuario pega oferta completa (`raw_text`).  
2. Extracción de campos (formulario + asistente opcional).  
3. Persist `jobs` + `job_requirements`.  
4. Compute `job_matches`.

### Matching
- Sub-scores + Fit total explicable.  
- Clasificación por requisito.  
- Agregación de frecuencia de gaps → prioridad de aprendizaje.

### Fuera de alcance inicial
- Scraping de portales.  
- Auto-apply.  
- Lectura de email ATS sin diseño de privacidad.

### Evolución
- Import desde URL (fetch server-side con allowlist).  
- Plantillas de JD por rol.  
- Alertas cuando Fit ≥ umbral.

---

## 5. Recruiters & Funnel

- Recruiters como entidad vinculable a applications.  
- Fuente (`LinkedIn`, `referral`, `company site`, …) para analytics.  
- Job opcional en application (contacto sin JD formal permitido).

---

## 6. Content ↔ Presence

Investigaciones (RLS, BIAN, Bedrock, MCP, …) fluyen:

```
Journal/Research → Content draft → Published → métricas → recruiter contacts
                                      ↓
                              LinkedIn featured / CV link
```

---

## 7. Contratos de datos (aplicación)

| Operación | Use case |
|---|---|
| Actualizar presencia LinkedIn | `UpdateLinkedInVersion` |
| Generar CV por rol | `GenerateCvVersion` |
| Analizar oferta | `AnalyzeJobPosting` |
| Recalcular fit | `ComputeJobMatch` |
| Detectar gaps LinkedIn | `AnalyzeLinkedInGaps` |

Todos leen repositorios de Profile/Skills/Evidence; no duplican verdad.

---

## 8. Criterios de aceptación transversales

- [ ] Editar Profile refleja candidatos a CV/LinkedIn en próxima generación  
- [ ] Job match usa mismos niveles de Skills Matrix  
- [ ] Advisor cita jobs/profile reales del ContextPack  
- [ ] Sin credenciales LinkedIn en env salvo feature futura documentada
