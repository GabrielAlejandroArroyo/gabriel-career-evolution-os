# Roadmap de producto — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Principio de entrega

Implementación por **slices verticales** que dejan el producto usable.  
Cada slice cierra con: compile · tests · seguridad · docs · backlog · ADR si aplica.

---

## 2. Timeline lógico (no calendarizado rígido)

| Fase | Slice | Nombre | Resultado para Gabriel |
|---|---|---|---|
| 0 | — | Documentation & Plan | Fuente oficial en `docs/` |
| 1 | 1 | Core Career OS | Sé dónde estoy; veo gaps y acciones |
| 2 | 2 | Learning Loop | Sé qué estudiar y qué cert priorizar |
| 3 | 3 | Evidence Loop | Puedo demostrar skills con portfolio |
| 4 | 4 | Market Loop | Sé qué ofertas encajan y gestiono funnel |
| 5 | 5 | Presence Loop | LinkedIn/CV/Content alineados a Architect |
| 6 | 6 | Intelligence | Advisor responde con mis datos |
| 7 | — | Hardening | Analytics, export, perf, a11y |

---

## 3. MVP (Definition)

**MVP = Fase 0 completa + Slice 1.**

### Incluye
- Auth + RLS  
- Professional Profile  
- Skills Matrix  
- Dashboard + scores deterministas v1  
- Seed baseline con `needs_validation`  
- Shell SaaS (stubs)  
- Dark/light mode  

### No incluye
- AI Advisor LLM  
- Jobs/Matching  
- Portfolio completo  
- LinkedIn/CV generators  
- Content/Journal completos  

### Éxito MVP
Gabriel autentica, edita perfil/skills, ve Career Score + Top Gaps/Actions, y entiende su posicionamiento vs Software/Solution Architect.

---

## 4. Detalle por slice

### Slice 1 — Auth · Profile · Skills · Dashboard
**Épicas:** E0–E3  
**Salida:** Core usable  
**Riesgo clave:** scores no confiables → tests + explainability  

### Slice 2 — Courses · Certifications · Roadmap
**Épicas:** E4–E6  
**Salida:** Learning loop con ROI  
**Riesgo clave:** cursos huérfanos de rol/gap → validación de dominio  

### Slice 3 — Portfolio · Evidence
**Épicas:** E7–E8  
**Salida:** Cadena evidencia  
**Riesgo clave:** portfolio eterno en backlog → WIP limit + PriorityScore  

### Slice 4 — Jobs · Matching · Funnel
**Épicas:** E9–E10  
**Salida:** Market feedback loop  
**Riesgo clave:** parse JD imperfecto → manual override siempre disponible  

### Slice 5 — LinkedIn · CV · Content
**Épicas:** E11–E13 (+ Journal parcial)  
**Salida:** Presencia profesional  
**Riesgo clave:** invención en drafts → evidence links obligatorios en claims fuertes  

### Slice 6 — AI Career Advisor
**Épicas:** E15–E16  
**Salida:** Asistente interno  
**Riesgo clave:** alucinaciones → ContextPack + hard rules + tests  

---

## 5. Hitos de carrera (producto × persona)

| Hito personal | Soporte del producto |
|---|---|
| Reposicionamiento LinkedIn/CV | Slice 1 + 5 |
| TOGAF Foundation | Slice 2 |
| AWS SAA | Slice 2 + 3 (labs) |
| BIAN Foundation | Slice 2 + 3 (banking portfolio) |
| Portfolio RAG/Agents | Slice 3 + 5 (content) |
| Más entrevistas architecture | Slice 4 + 5 + 6 |

---

## 6. Dependencias técnicas

```
Docs (Fase 0)
  → Scaffold + Auth
    → Profile + Skills
      → Scoring + Dashboard  === MVP
        → Learning + Certs + Roadmap
          → Evidence + Portfolio
            → Jobs + Funnel
              → LinkedIn/CV/Content
                → AI Advisor
```

---

## 7. Criterios de avance de fase

No iniciar Slice N+1 si Slice N tiene:

- RLS incompleto en tablas nuevas  
- Scores sin tests  
- Documentación desfasada respecto al comportamiento  
- Deuda bloqueante de arquitectura (UI→Supabase directo)  

Excepción: stubs de UI de módulos futuros están permitidos.

---

## 8. Post-v1 (fuera de alcance inmediato)

- Multi-usuario / coaching  
- Integración OAuth LinkedIn oficial  
- Import automático de jobs desde boards  
- App mobile  
- Marketplace de playbooks  
- Modo equipo (empresa)  

---

## 9. Estado actual

| Ítem | Estado |
|---|---|
| Plan Maestro | ✅ |
| Docs oficiales | ✅ |
| ADRs iniciales | ✅ |
| Scaffold Next.js | ⏳ pendiente Slice 1 |
| MVP funcional | ⏳ pendiente Slice 1 |

**Próximo hito:** iniciar Slice 1 (Foundation técnica + Profile + Skills + Dashboard).
