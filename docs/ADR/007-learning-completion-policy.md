# ADR-007: Curso completado ≠ aprendizaje completo

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

Trackers de cursos marcan “done” al terminar videos. Eso no mejora empleabilidad ni evidencia de arquitectura.

## Decisión

La unidad de progreso completa es la cadena:

Skill → Course → Lab → Project → Evidence → Certification → LinkedIn → CV → Portfolio → Labor Impact

- `courses.status = Completed` es un paso.  
- `learning_goals` solo done cuando evidencia (y checks de presencia) cumplen política.  
- Dashboard no celebra cursos sin evidencia en skills críticas.

## Consecuencias

(+) Alineación con objetivo de entrevistas/ofertas  
(+) Evidence Engine tiene demanda clara  
(−) Más estados/campos en roadmap  
(−) Percepción de “más lento” — intencional  

## Alternativas

- Course completion = skill up → rechazado  
- Solo certificaciones cuentan → incompleto (falta portfolio/narrativa)
