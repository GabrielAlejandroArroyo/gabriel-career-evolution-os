# ADR-006: RLS y user_id desde el día 1

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

Aunque el MVP es single-user, modelar sin `user_id`/RLS obliga a reescrituras peligrosas después y facilita fugas si se usa service role mal.

## Decisión

- Todas las entidades privadas tienen `user_id` (profiles usa `id = auth.uid()`).  
- RLS enabled con policies own-row.  
- Catálogos globales read-only autenticados.  
- Tests de aislamiento en cada slice con tablas nuevas.  
- Service role solo server/migrations.

## Consecuencias

(+) Seguridad by default  
(+) Multi-usuario futuro barato  
(−) Verbosity en schemas/policies  

## Alternativas

- App-level filtering only → insuficiente  
- Multi-tenant orgs ahora → prematuro
