# ADR-004: Evidence-first claims

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

El riesgo reputacional de inventar o exagerar experiencia/certs es crítico. Seeds e IA tienden a completar huecos.

## Decisión

1. Flag `needs_validation` en datos estimados.  
2. Claims fuertes en CV/LinkedIn deben poder asociarse a `evidence` o quedar marcados.  
3. Completar curso no valida skill sola.  
4. AI hard-rule: nunca inventar.  
5. Cert `earned` requiere confirmación explícita.

## Consecuencias

(+) Integridad profesional  
(+) Gap “conocimiento no mostrado” medible  
(−) Más fricción al “terminar” items  
(−) Seeds inicialmente incompletos a propósito  

## Alternativas

- Auto-completar con IA generativa → rechazado  
- Confiar en honor system sin flags → insuficiente
