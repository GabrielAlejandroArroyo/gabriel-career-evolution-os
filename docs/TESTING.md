# Testing Strategy — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Pirámide

| Capa | % esfuerzo | Alcance |
|---|---|---|
| Unit | Alto | Scoring, ROI, Priority, state machines, gap calc |
| Integration | Medio | Repositories + RLS + migrations |
| E2E | Bajo | Flujos críticos Auth→Profile→Skills→Dashboard |
| Manual | Puntual | UX narrativa Architect, copy LinkedIn/CV |

---

## 2. Herramientas previstas

- **Vitest** — unit / integration  
- **Playwright** — e2e  
- **Supabase local** o proyecto de test — RLS  
- Mocks de `AIProvider` en CI  

---

## 3. Casos obligatorios por dominio

### Scoring
- Fixture perfil banking + skills architecture → Career Score en rango esperado  
- PriorityScore: gap alto + demanda alta + leverage enterprise > curso moda sin demanda  
- ROI Azure &lt; AWS ceteris paribus  

### Learning
- Transiciones de estado inválidas rechazadas  
- Course Completed no sube `level_current` solo  

### Jobs
- JD architecture banking → Industry/Architecture match altos  
- Requisito irrelevante → NOT_RELEVANT  
- Gap repetido en 3 jobs aparece en agregación  

### Security
- Usuario B no SELECT/UPDATE filas de A  
- Storage path cross-user denegado  

### AI
- ContextPack sin certs → advisor no inventa TOGAF earned  
- Schema Zod inválido → error controlado  

---

## 4. Definition of Done testing (slice)

1. Nuevas funciones de score con ≥1 test de fixture.  
2. Nuevas tablas con smoke RLS.  
3. E2E smoke del slice si toca UI crítica.  
4. CI (cuando exista) corre unit en PR.

---

## 5. Datos de test

- Fixtures en `tests/fixtures/` con datos **sintéticos** (no inventar logros reales de Gabriel en asserts de “éxito profesional”).  
- Seed de desarrollo separado de seed de test.
