# ADR-002: Supabase solo como adapter de persistencia

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

Se eligió Supabase (Postgres + Auth + Storage + RLS) por velocidad y seguridad. El riesgo es tratar el client de Supabase como modelo de dominio.

## Decisión

- Repositories como ports en Application.  
- `Supabase*Repository` en Infrastructure implementa ports.  
- Mappers convierten rows ↔ domain.  
- Zod valida boundaries.  
- El dominio no importa `@supabase/*`.

## Consecuencias

(+) Posible migrar a otro Postgres/ORM sin reescribir reglas  
(+) RLS permanece en DB sin filtrar en UI  
(−) Doble forma (row vs entity) a mantener  

## Alternativas

- Prisma + Auth propio → más trabajo Auth/RLS  
- Drizzle directo en use cases → acoplamiento medio, descartado para capa application
