# Estrategia de IA — Gabriel Career Evolution OS

**Versión:** 1.0  
**Fecha:** 2026-08-22  

---

## 1. Rol de la IA en el producto

La IA es un **Career Advisor asistido**, no la fuente de verdad.

| La IA puede | La IA no puede |
|---|---|
| Priorizar acciones con contexto | Inventar experiencia o títulos |
| Explicar un Job Fit | Marcar certificaciones como earned |
| Sugerir evidencia faltante | Publicar en LinkedIn sin revisión |
| Redactar borradores (About, CV bullets) anclados a datos | Ignorar gaps de mercado reales |
| Resumir journal / research | Recomendar tech solo por hype |

Los motores de scoring **deterministas** son la base. La IA interpreta y narra sobre ellos.

---

## 2. Arquitectura de IA

```
Use case (Advisor)
  → build ContextPack (from repositories)
  → AIProvider.completeStructured(schema)
  → validate Zod
  → persist ai_recommendations
  → return to UI
```

### Puerto

```ts
interface AIProvider {
  completeStructured<T>(input: {
    system: string
    user: string
    schema: ZodType<T>
    temperature?: number
  }): Promise<T>
}
```

### Adapters

| Adapter | Cuándo |
|---|---|
| `RuleBasedAdvisorAdapter` | MVP / CI / offline — respuestas basadas en PriorityScore |
| `OpenAIAdapter` | Slice 6 default opcional |
| `AWSBedrockAdapter` | Alineado a estrategia cloud/AI personal |

Claves solo server-side. Feature flag `AI_ADVISOR_ENABLED`.

---

## 3. Context Pack

Antes de cada pregunta, el application layer arma:

```ts
type ContextPack = {
  profile: {...}
  careerTarget: string
  topSkills: {...}[]
  topGaps: {...}[]
  activeLearning: {...}[]
  certifications: {...}[]
  portfolio: {...}[]
  evidenceCoverage: {...}
  recentJobMatches: {...}[]
  funnelSummary: {...}
  linkedinGaps: {...}[]
  differentiationFormula: string
  hardRules: string[]
}
```

El LLM **solo** ve este pack + la pregunta. No navega DB libremente.

---

## 4. Hard rules (system prompt)

1. Nunca inventes experiencia, empresas, títulos, fechas ni certificaciones.  
2. Si falta dato, dilo y sugiere qué validar (`needs_validation`).  
3. Prioriza Experience leverage + diferenciación Enterprise×Arch×Banking×Cloud×AI.  
4. No recomiendes estudiar un gap por una sola oferta.  
5. Curso sin evidencia no cierra un skill gap.  
6. Azure solo si hay demanda repetida en jobs del usuario.  
7. Toda recomendación debe citar entidades del Context Pack (ids/nombres).  
8. Responde en español, concreto, accionable.

---

## 5. Preguntas canónicas del Advisor

1. ¿Qué debería estudiar ahora?  
2. ¿Qué certificación tiene mayor ROI?  
3. ¿Qué skill me falta?  
4. ¿Qué proyecto debería desarrollar?  
5. ¿Qué debería publicar?  
6. ¿Cómo mejorar LinkedIn?  
7. ¿Qué cambiar en el CV?  
8. ¿Qué ofertas tienen mejor match?  
9. ¿Por qué no obtengo entrevistas?  
10. ¿Qué conocimiento tengo que no estoy mostrando?  

Cada una tiene schema Zod propio (recomendación + rationale + actions[] + sources[]).

---

## 6. Uso de IA fuera del Advisor

| Feature | Uso IA | Fallback |
|---|---|---|
| Parse de JD | Extracción estructurada de requirements | Formulario manual |
| LinkedIn/CV draft | Reescritura anclada a evidencias | Templates |
| Content Engine | Outline / draft | Manual |
| Scoring | No (determinista) | — |
| ROI | No (determinista); IA explica | — |

---

## 7. Seguridad y abuso

- Auth requerida.  
- Rate limit por usuario.  
- JD paste tratado como **datos**, no instrucciones (prompt injection).  
- No enviar PII de terceros innecesaria.  
- Logs: metadata, no prompts completos en prod si contienen datos sensibles (configurable).

---

## 8. Evaluación de calidad

| Test | Método |
|---|---|
| No-invention | Fixture perfil mínimo → no debe inventar certs |
| Priority alignment | Advisor top action ≈ PriorityScore top-N |
| Schema validity | Zod fail = error controlado |
| Regression | Golden answers para 10 preguntas con ContextPack fijo |

CI usa `RuleBasedAdvisorAdapter` + tests de contrato del port.

---

## 9. Roadmap IA

| Slice | Capacidad |
|---|---|
| 1 | Sin LLM; scores + mensajes rule-based en Dashboard |
| 2–5 | Parse JD opcional feature-flagged |
| 6 | Advisor completo + persistencia recomendaciones |
| 7+ | Bedrock adapter, RAG sobre journal/evidence propio |

---

## 10. Costo y control

- Modelo barato para parse; más capaz para Advisor.  
- Cache de recomendaciones por hash(ContextPack + question) TTL corto.  
- Usuario puede “regenerar” explícitamente.
