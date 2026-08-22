# Seguridad — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Objetivos

1. Un usuario solo accede a sus datos (`user_id = auth.uid()`).  
2. Ningún secreto de IA o service role en el cliente.  
3. RLS activo en todas las tablas privadas desde la primera migration útil.  
4. Storage con paths por usuario.  
5. Claims sensibles protegidos por evidencia y flags de validación (integridad de negocio).

---

## 2. Autenticación

| Aspecto | Decisión MVP |
|---|---|
| Proveedor | Supabase Auth |
| Métodos | Email + password y/o magic link |
| Sesión | Cookie SSR (Next.js) vía `@supabase/ssr` |
| Perfil | `profiles.id = auth.users.id` (trigger on signup) |

Post-MVP: OAuth Google opcional.

---

## 3. Autorización (RLS)

### 3.1 Patrón base (tablas privadas)

```sql
alter table <table> enable row level security;

create policy "<table>_select_own"
  on <table> for select
  using (auth.uid() = user_id);

create policy "<table>_insert_own"
  on <table> for insert
  with check (auth.uid() = user_id);

create policy "<table>_update_own"
  on <table> for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "<table>_delete_own"
  on <table> for delete
  using (auth.uid() = user_id);
```

Aplicar a:  
`professional_experiences`, `education`, `profile_skills`, `courses` (si user-owned), `user_certifications`, `learning_*`, `portfolio_items`, `evidence`, `jobs`, `job_requirements`, `job_matches`, `applications`, `recruiters`, `linkedin_versions`, `cv_versions`, `content_items`, `career_journal`, `metrics`, `ai_recommendations`.

### 3.2 profiles

```sql
-- id = auth.uid()
using (auth.uid() = id)
with check (auth.uid() = id)
```

### 3.3 Catálogos globales (`skills`, `certifications`)

| Operación | Policy |
|---|---|
| SELECT | `auth.role() = 'authenticated'` |
| INSERT/UPDATE/DELETE | denegado a clientes; solo service role / seed migrations |

Si un usuario crea cursos personales, van con `user_id` y policies own. Plantillas globales: `user_id is null` + select autenticado.

### 3.4 job_requirements / job_matches

Además de `user_id`, validar pertenencia al job del mismo usuario (with check subquery) para evitar cross-link.

```sql
with check (
  auth.uid() = user_id
  and exists (
    select 1 from jobs j
    where j.id = job_id and j.user_id = auth.uid()
  )
)
```

Patrón análogo para evidence ↔ portfolio, goals ↔ plans.

---

## 4. Estrategia RLS — checklist

- [ ] RLS enabled en **todas** las tablas de negocio  
- [ ] Ninguna policy `using (true)` en datos privados  
- [ ] Service role solo en server (migrations, admin scripts, seed)  
- [ ] Anon key en cliente **con** RLS (nunca bypass)  
- [ ] Tests: usuario A no lee/escribe filas de B  
- [ ] Triggers de `profiles` no escalan privilegios indebidos  

---

## 5. Storage

Buckets sugeridos:

| Bucket | Acceso |
|---|---|
| `evidence` | privado; path `{user_id}/**` |
| `cv` | privado; path `{user_id}/**` |
| `portfolio` | privado; path `{user_id}/**` |

Policies Storage: `auth.uid()::text = (storage.foldername(name))[1]`

---

## 6. Secretos y env

| Variable | Scope |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | public |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | public (RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | server only |
| `OPENAI_API_KEY` / `AWS_*` | server only |
| Nunca `NEXT_PUBLIC_*` para API keys de IA | — |

AI routes / Server Actions validan sesión antes de llamar al provider.

---

## 7. Superficie de ataque y mitigaciones

| Amenaza | Mitigación |
|---|---|
| IDOR entre usuarios | RLS + tests |
| XSS en markdown CV/contenido | sanitizar render |
| Prompt injection en JD paste | Advisor trata JD como data no-instrucción; system prompt fijo |
| Filtración service role | solo server; CI secrets |
| Uploads maliciosos | tipos MIME, size limits |
| Enumeración Auth | rate limit Supabase defaults |

---

## 8. Integridad de datos profesionales

No es solo seguridad informática: es **integridad reputacional**.

Reglas:

1. `needs_validation = true` en seeds estimados.  
2. CV/LinkedIn no auto-afirman skills sin evidencia o confirmación.  
3. AI Advisor system prompt: “Nunca inventes experiencia ni certificaciones”.  
4. Cert `earned` requiere fecha + opcional credential URL.

---

## 9. Auditoría

MVP: `created_at` / `updated_at` + journal manual.  
Post-MVP: `audit_log` de cambios críticos (scores, cert status, applications).

---

## 10. Cumplimiento

Producto personal (datos del owner). Aun así:

- Minimizar datos de terceros (recruiters: lo necesario).  
- Export/delete account post-MVP.  
- Backups vía Supabase.

---

## 11. Definition of Done seguridad (por slice)

Antes de cerrar cada slice:

1. Nuevas tablas con RLS.  
2. Smoke test aislamiento.  
3. Revisión de que presentation no usa service role.  
4. Actualizar este doc si hay policy nueva no estándar.
