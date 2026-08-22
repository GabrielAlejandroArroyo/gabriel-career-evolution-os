# ADR-001: Arquitectura hexagonal (ports & adapters)

**Estado:** Aceptado  
**Fecha:** 2026-08-22  

## Contexto

El producto combina UI Next.js, Supabase y futuros providers de IA. Si la presentación habla directo con Supabase, el dominio (scoring, matching, invariantes) se acopla y se vuelve imposible cambiar persistencia o testear sin DB.

## Decisión

Adoptar arquitectura hexagonal ligera en monolito Next.js:

- **Domain:** entidades, VOs, reglas, scoring puro  
- **Application:** use cases + ports  
- **Infrastructure:** Supabase, AI adapters, mappers  
- **Presentation:** App Router, components, Server Actions que invocan use cases  

Prohibido acceso a Supabase desde componentes React de UI.

## Consecuencias

(+) Testeabilidad, replaceability, claridad de límites  
(+) Alineado a requerimiento explícito  
(−) Más boilerplate inicial  
(−) Disciplina de imports requerida (lint)

## Alternativas

- Active Record en Server Components → descartado por acoplamiento  
- Clean/DDD pesado con muchos assemblies → overkill para MVP personal
