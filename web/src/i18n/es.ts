import type { Dictionary } from "./types";

export const es: Dictionary = {
  locale: "es",
  htmlLang: "es",
  localeName: "Español",
  switchTo: { href: "/en", label: "EN", hreflang: "en" },

  meta: {
    title: "Gabriel Arroyo — Software & Solution Architect",
    description:
      "Arquitecto de software y soluciones con más de 20 años en sistemas empresariales y transaccionales. Banca, integración enterprise, modernización legacy, cloud y GenAI.",
    ogTitle: "Gabriel Arroyo — Software & Solution Architect",
    ogDescription:
      "Arquitecto hands-on en sistemas enterprise y transaccionales. Banking, arquitectura, cloud e IA generativa.",
    jobTitle: "Software & Solution Architect",
  },

  nav: {
    skipToContent: "Ir al contenido",
    expertise: "Expertise",
    portfolio: "Proyectos",
    presence: "LinkedIn",
    contact: "Contacto",
    toggleTheme: "Cambiar tema",
  },

  hero: {
    availability: "Abierto a roles de arquitectura",
    role: "Software & Solution Architect",
    tagline:
      "Más de 20 años diseñando, construyendo e integrando los sistemas que las empresas no pueden permitirse que fallen. Hoy llevo esa base hacia arquitectura moderna, cloud e IA generativa.",
    primaryCta: "Hablemos del rol",
    secondaryCta: "Ver mi expertise",
  },

  metrics: {
    yearsLabel: "años en tecnología empresarial",
    industriesLabel: "industrias con sistemas críticos",
    scopeValue: "End-to-end",
    scopeLabel: "del diseño al soporte en producción",
  },

  differentiation: {
    eyebrow: "Propuesta de valor",
    headlineLead: "No soy un developer que acumuló tecnologías.",
    headlineEmphasis: "Soy un arquitecto que las puso en producción.",
    body: "La mayoría de los arquitectos llega desde el diseño y nunca sostuvo lo que diseñó. Yo recorrí el camino completo: escribí el código, integré los sistemas, resolví las caídas de madrugada y modernicé lo que otros preferían no tocar. Esa cicatriz operativa es lo que hace que mis decisiones de arquitectura resistan el contacto con la realidad.",
    formula: ["Enterprise", "Arquitectura", "Banking", "Cloud", "IA generativa"],
    result: "Diferenciación",
  },

  capabilities: {
    eyebrow: "Qué resuelvo",
    heading: "Los problemas que me traen a la mesa",
    intro:
      "Resumen de lo que resuelvo. Expandí cualquiera para ver problema, enfoque y resultado.",
    expand: "Ver detalle",
    collapse: "Ocultar",
    challengeLabel: "El problema",
    approachLabel: "Mi enfoque",
    outcomeLabel: "El resultado",
    items: {
      legacyModernization: {
        title: "Modernización de sistemas legacy",
        teaser: "Migración por etapas sin apagar lo que hoy factura.",
        challenge:
          "Aplicaciones que sostienen el negocio hace 15 años, sin documentación viva, donde cada cambio asusta y nadie quiere firmar la migración.",
        approach:
          "Reconstruyo el dominio real antes de tocar una línea. Aíslo el núcleo transaccional, defino límites explícitos y planteo una migración por etapas con convivencia entre lo viejo y lo nuevo.",
        outcome:
          "Un camino de modernización que el negocio puede aprobar porque nunca depende de un big bang ni de apagar lo que hoy factura.",
      },
      enterpriseIntegration: {
        title: "Integración entre sistemas que no fueron pensados para hablarse",
        teaser: "Contratos explícitos, errores visibles y trazabilidad auditable.",
        challenge:
          "Core bancario, ERP, gestión documental, servicios externos y procesos batch que deben coordinarse sin perder consistencia ni trazabilidad.",
        approach:
          "Diseño contratos de integración explícitos sobre REST y SOAP, separo lo síncrono de lo que debe ser batch o asíncrono, y hago que los errores sean visibles y recuperables en lugar de silenciosos.",
        outcome:
          "Integraciones que se pueden auditar, reprocesar y explicar cuando el negocio pregunta qué pasó con una transacción puntual.",
      },
      bankingCore: {
        title: "Arquitectura sobre sistemas bancarios y transaccionales",
        teaser: "Consistencia e idempotencia donde el error es dinero real.",
        challenge:
          "Plataformas donde una inconsistencia no es un bug: es dinero real, un cierre contable roto y una respuesta al regulador.",
        approach:
          "Trabajo desde el conocimiento concreto de COBIS, procesos batch y ciclos de cierre. Priorizo consistencia, idempotencia y trazabilidad por encima de la elegancia arquitectónica.",
        outcome:
          "Decisiones técnicas que soportan volumen y auditoría, tomadas por alguien que entiende el impacto contable y no solo el diagrama.",
      },
      genAiAdoption: {
        title: "Adopción de IA generativa en contextos enterprise",
        teaser: "RAG y agentes con límites de datos, no demos sueltas.",
        challenge:
          "Organizaciones que quieren aprovechar GenAI pero no pueden exponer datos sensibles ni sostener una demo que nunca llega a producción.",
        approach:
          "Diseño arquitecturas RAG con límites de datos claros, evalúo cuándo un agente aporta valor real y cuándo es sobreingeniería, y mantengo el proveedor de IA desacoplado detrás de un puerto.",
        outcome:
          "Capacidades de IA que se integran al stack existente con control de acceso y costo, en lugar de sumar otro silo.",
      },
    },
  },

  experience: {
    eyebrow: "Profundidad",
    heading: "Experiencia técnica bajo demanda",
    intro:
      "Skills, stack, trayectoria, industrias y formación. Cerrado por defecto para no alargar el scroll.",
    expand: "Ver experiencia",
    collapse: "Ocultar experiencia",
  },

  skills: {
    eyebrow: "Profundidad técnica",
    heading: "Dónde estoy y qué tan profundo llego",
    intro:
      "Una lectura honesta de mi nivel por dominio. Lo que domino en profundidad y lo que estoy construyendo, sin inflar ninguna de las dos cosas.",
    levelLabel: "Nivel",
    legend: [
      "1 Básico",
      "2 Intermedio",
      "3 Avanzado",
      "4 Experto",
      "5 Referente",
    ],
    domains: {
      architecture: "Arquitectura",
      backend: "Backend e integración",
      data: "Datos",
      enterprise: "Enterprise y banking",
      cloud: "Cloud y DevOps",
      ai: "IA generativa",
    },
    names: {
      appArchitecture: "Arquitectura de aplicaciones",
      solutionDesign: "Diseño de soluciones",
      enterpriseIntegration: "Integración enterprise",
      legacyModernization: "Modernización legacy",
      microservices: "Microservicios",
      hexagonalDdd: "Arquitectura hexagonal y DDD",
      dotnet: "C# / .NET",
      java: "Java / Spring Boot",
      restSoap: "APIs REST y SOAP",
      batchProcessing: "Procesos batch",
      nodejs: "Node.js",
      sqlServer: "SQL Server",
      sybase: "Sybase ASE",
      oracle: "Oracle",
      postgresql: "PostgreSQL",
      dataModeling: "Modelado de datos",
      cobis: "COBIS",
      transactionalSystems: "Sistemas transaccionales",
      documentum: "OpenText Documentum",
      bpmn: "BPMN / Bizagi",
      bian: "BIAN",
      git: "Git y control de versiones",
      cicd: "CI/CD",
      aws: "AWS",
      docker: "Docker",
      iac: "Infraestructura como código",
      promptEngineering: "Prompt engineering",
      bedrock: "AWS Bedrock",
      rag: "RAG y Knowledge Bases",
      aiAgents: "AI Agents y MCP",
      vectorDb: "Bases de datos vectoriales",
    },
  },

  stack: {
    eyebrow: "Herramientas",
    heading: "El stack que uso",
    intro:
      "Amplitud acumulada en veinte años. Las tecnologías son el medio; la arquitectura y el dominio son el argumento.",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bases de datos",
      integration: "Integración",
      cloud: "Cloud y DevOps",
      enterprise: "Enterprise",
      ai: "IA generativa",
    },
  },

  trajectory: {
    eyebrow: "Evolución",
    heading: "De escribir el código a decidir la arquitectura",
    intro:
      "No borro mi etapa de desarrollador: es exactamente lo que respalda mis decisiones de arquitectura hoy.",
    targetLabel: "Foco actual",
    steps: {
      developer: "Developer",
      seniorDeveloper: "Senior Developer",
      analyst: "Analista funcional y técnico",
      technicalReference: "Referente técnico",
      solutionDesign: "Diseño de soluciones",
      technicalLead: "Technical Lead",
      softwareArchitect: "Software / Solution Architect",
      enterpriseAiArchitect: "Enterprise & AI Solutions Architect",
    },
  },

  industries: {
    eyebrow: "Contexto",
    heading: "Industrias donde el sistema no puede fallar",
    intro:
      "Contextos regulados, transaccionales y de alta exigencia operativa, con foco particular en banca e integración enterprise.",
    items: {
      banking: "Banca y sistemas transaccionales",
      financialServices: "Servicios financieros",
      energy: "Energía y petróleo",
      insurance: "Seguros",
      retailTelco: "Retail y telecomunicaciones",
      logistics: "Logística y gestión documental",
    },
  },

  credentials: {
    eyebrow: "Formación",
    heading: "Títulos, certificaciones y hacia dónde voy",
    intro:
      "Separo de forma explícita lo que ya obtuve de lo que está en curso o planificado. Si dice planificado, es porque todavía no lo rendí.",
    status: {
      earned: "Obtenido",
      inProgress: "En curso",
      planned: "Planificado",
    },
    items: {
      digitalTech: {
        name: "Licenciatura en Tecnologías Digitales",
        issuer: "Formación universitaria",
      },
      dataScience: {
        name: "Licenciatura en Ciencia de Datos",
        issuer: "Formación universitaria — etapa final",
      },
      bizagi: { name: "Bizagi BPMN", issuer: "Bizagi" },
      documentum: { name: "Documentum", issuer: "EMC / OpenText" },
      togafFoundation: {
        name: "TOGAF Enterprise Architecture Foundation",
        issuer: "The Open Group",
      },
      awsSaa: {
        name: "Solutions Architect Associate",
        issuer: "Amazon Web Services",
      },
      bianFoundation: { name: "BIAN Foundation", issuer: "BIAN" },
      togafPractitioner: {
        name: "TOGAF Enterprise Architecture Practitioner",
        issuer: "The Open Group",
      },
      awsAiPractitioner: {
        name: "AI Practitioner",
        issuer: "Amazon Web Services",
      },
    },
  },

  projects: {
    eyebrow: "Portfolio en GitHub",
    heading: "Proyectos que podés explorar sin salir de acá",
    intro:
      "Seleccioné repositorios públicos que muestran arquitectura, integración y producto. Abrí cualquiera: el detalle y la demo viven en esta misma página.",
    openPreview: "Ver en la página",
    closePreview: "Cerrar preview",
    viewDemo: "Demo en vivo",
    languagesLabel: "Stack",
    repoHint: "Código en GitHub (opcional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Plataforma personal de evolución profesional y esta landing bilingüe.",
        detail:
          "Next.js 16, TypeScript y export estático a GitHub Pages. Incluye sistema de diseño, i18n tipado y secciones pensadas para conversión de recruiters hacia roles de arquitectura.",
      },
      catalogs: {
        title: "Creador de Catálogos",
        summary:
          "App Angular + FastAPI para armar catálogos de códigos a partir de maestros.",
        detail:
          "Frontend publicado en GitHub Pages con CI/CD. El backend FastAPI corre en local; la UI demuestra el flujo de catálogos, versionado por specs y releases automáticos.",
      },
      hexagonal: {
        title: "Arquitectura Hexagonal en Java",
        summary:
          "Referencia de Clean Architecture / hexagonal con Spring Boot.",
        detail:
          "Organiza dominio, aplicación e infraestructura con inversión de dependencias. Sirve como evidencia concreta de cómo aplico límites explícitos fuera de un diagrama.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Diseño de middleware que lee OpenAPI/Swagger de servicios y orquesta MFEs.",
        detail:
          "Monorepo con convenciones para services, middleware y microfrontends Angular. Enfocado en contratos de integración y reglas de arquitectura aplicadas en el día a día.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary: "Base de microservicios Spring para composición de servicios.",
        detail:
          "Exploración práctica de configuración, servicios y patrones de integración en el ecosistema Spring, alineada a escenarios enterprise reales.",
      },
      transportAgenda: {
        title: "Agenda de Transporte",
        summary: "Sistema de agenda de transporte con backend Java y front TypeScript.",
        detail:
          "Solución end-to-end para gestión de agenda logística. Complementa el front en TypeScript con un backend Java orientado a dominio operacional.",
      },
    },
  },

  presence: {
    eyebrow: "Presencia profesional",
    heading: "Mi LinkedIn, integrado acá",
    intro:
      "Resumen del perfil público. Expandí para about, credenciales y recomendaciones.",
    expand: "Ver perfil completo",
    collapse: "Ocultar detalle",
    locationLabel: "Ubicación",
    companyLabel: "Empresa actual",
    educationLabel: "Formación",
    followersLabel: "Seguidores",
    connectionsLabel: "Contactos",
    aboutLabel: "Acerca de",
    about:
      "Arquitecto de software y soluciones con experiencia hands-on en sistemas enterprise y transaccionales. .NET, Java, OpenText Documentum, Bizagi BPM, integración y modernización legacy. Hoy llevo esa base a arquitectura moderna, cloud e IA generativa.",
    highlightsLabel: "Credenciales visibles en LinkedIn",
    recommendationsLabel: "Recomendaciones",
    recommendations: {
      bruno:
        "Cuando se trata de Documentum, Gabriel es un verdadero experto. Se sabe todos los detalles técnicos y está siempre actualizado. Si hay un problema, lo resuelve con creatividad y efectividad. Responsable, apto para el cargo y siempre listo para enfrentar nuevos desafíos.",
      karina:
        "Excelente profesional, responsable, proactivo y siempre con iniciativas en las últimas tecnologías. Comprometido con los objetivos y con gran capacidad de trabajo en equipo.",
    },
    openExternally: "Abrir perfil completo en LinkedIn",
  },

  contact: {
    eyebrow: "Siguiente paso",
    heading:
      "Si buscás un arquitecto que ya vivió la complejidad enterprise, hablemos.",
    body: "Respondo con contexto concreto sobre tu stack y tu problema, no con un pitch genérico. Contame qué estás tratando de resolver.",
    rolesLabel: "Roles que me interesan",
    roles: [
      "Software Architect",
      "Solution Architect",
      "Enterprise Application Architect",
      "Technical Lead",
      "Banking Solutions Architect",
      "AWS Solutions Architect",
      "AI Solutions Architect",
    ],
    emailCta: "Escribime",
    presenceCta: "Ver presencia LinkedIn",
    portfolioCta: "Ver proyectos",
  },

  footer: {
    tagline: "Software & Solution Architect",
    builtWith: "Next.js y TypeScript. Desplegado en GitHub Pages.",
  },
};
