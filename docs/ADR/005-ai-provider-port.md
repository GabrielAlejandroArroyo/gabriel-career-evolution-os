# ADR-005: IA desacoplada vía AIProvider

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

Se requieren recomendaciones inteligentes y parse de JD, con posibles providers OpenAI y AWS Bedrock, sin exponer claves ni acoplar el dominio a un vendor.

## Decisión

Puerto `AIProvider` con `completeStructured` + Zod.  
Adapters: RuleBased (MVP/CI), OpenAI, Bedrock.  
Solo server-side. Feature flag para Advisor.  
Scoring/ROI siguen siendo deterministas.

## Consecuencias

(+) Swap de vendor  
(+) Tests con stub  
(+) Alineación con stack AWS personal a futuro  
(−) Diseño de prompts/schemas por caso de uso  

## Alternativas

- Llamadas fetch desde browser → inseguro  
- LangChain embebido en UI → acoplamiento excesivo para MVP
