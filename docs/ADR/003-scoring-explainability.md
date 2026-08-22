# ADR-003: Scores siempre explicables

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

Career/Job/ROI/Priority scores guían decisiones de estudio y carrera. Un número opaco genera desconfianza y malas prioridades.

## Decisión

Todo score retorna `score`, `factors[]` (valor, peso, contribución), `rationale`, `algorithm_version`.  
UI muestra explicación en Dashboard y detalle de acciones.  
Cambios de pesos versionados + tests + ADR corto.

## Consecuencias

(+) Confianza y depuración  
(+) Base para AI Advisor (explica sobre factores)  
(−) Payloads más grandes  
(−) Contratos estables a mantener  

## Alternativas

- Score único sin breakdown → descartado  
- Solo LLM genera score → descartado (no determinista, no testeable en CI)
