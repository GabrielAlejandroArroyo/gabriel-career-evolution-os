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
    availability: "Disponible para roles de arquitectura",
    role: "Software & Solution Architect",
    tagline:
      "+20 años en sistemas enterprise y transaccionales: banca, integración, modernización legacy, cloud e IA generativa. Experiencia end-to-end, del diseño a producción.",
    primaryCta: "Contactar",
    secondaryCta: "Ver expertise",
  },

  metrics: {
    yearsLabel: "años en tecnología empresarial",
    industriesLabel: "industrias con sistemas críticos",
    scopeValue: "End-to-end",
    scopeLabel: "del diseño al soporte en producción",
  },

  differentiation: {
    eyebrow: "Propuesta de valor",
    headlineLead: "Arquitecto con base hands-on:",
    headlineEmphasis: "del código en producción a la decisión de arquitectura.",
    body: "Recorrí el ciclo completo: desarrollo, integración, soporte productivo y modernización de sistemas críticos. Esa experiencia operativa respalda decisiones de arquitectura viables, auditables y sostenibles en producción.",
    formula: ["Enterprise", "Arquitectura", "Banking", "Cloud", "IA generativa"],
    result: "Diferenciación",
  },

  capabilities: {
    eyebrow: "Especialización",
    heading: "Áreas de expertise",
    intro:
      "Cuatro frentes donde aporto valor directo. Cada uno incluye problema, enfoque y resultado.",
    expand: "Ver detalle",
    collapse: "Ocultar",
    challengeLabel: "El problema",
    approachLabel: "Mi enfoque",
    outcomeLabel: "El resultado",
    items: {
      legacyModernization: {
        title: "Modernización de sistemas legacy",
        teaser: "Migración por etapas sin interrumpir la operación.",
        challenge:
          "Aplicaciones que sostienen el negocio hace 15 años, sin documentación viva, donde cada cambio asusta y nadie quiere firmar la migración.",
        approach:
          "Reconstruyo el dominio real antes de tocar una línea. Aíslo el núcleo transaccional, defino límites explícitos y planteo una migración por etapas con convivencia entre lo viejo y lo nuevo.",
        outcome:
          "Un camino de modernización que el negocio puede aprobar porque nunca depende de un big bang ni de apagar lo que hoy factura.",
      },
      enterpriseIntegration: {
        title: "Integración enterprise",
        teaser: "Contratos explícitos, errores visibles y trazabilidad auditable.",
        challenge:
          "Core bancario, ERP, gestión documental, servicios externos y procesos batch que deben coordinarse sin perder consistencia ni trazabilidad.",
        approach:
          "Diseño contratos de integración explícitos sobre REST y SOAP, separo lo síncrono de lo que debe ser batch o asíncrono, y hago que los errores sean visibles y recuperables en lugar de silenciosos.",
        outcome:
          "Integraciones que se pueden auditar, reprocesar y explicar cuando el negocio pregunta qué pasó con una transacción puntual.",
      },
      bankingCore: {
        title: "Core bancario y sistemas transaccionales",
        teaser: "Consistencia, idempotencia y trazabilidad en entornos regulados.",
        challenge:
          "Plataformas donde una inconsistencia no es un bug: es dinero real, un cierre contable roto y una respuesta al regulador.",
        approach:
          "Trabajo desde el conocimiento concreto de COBIS, procesos batch y ciclos de cierre. Priorizo consistencia, idempotencia y trazabilidad por encima de la elegancia arquitectónica.",
        outcome:
          "Decisiones técnicas que soportan volumen y auditoría, tomadas por alguien que entiende el impacto contable y no solo el diagrama.",
      },
      genAiAdoption: {
        title: "IA generativa enterprise",
        teaser: "RAG y agentes con gobernanza de datos, listos para producción.",
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
    eyebrow: "Trayectoria",
    heading: "Experiencia profesional",
    intro:
      "Skills, stack tecnológico, trayectoria, industrias y formación.",
    expand: "Ver experiencia",
    collapse: "Ocultar experiencia",
    viaLabel: "Prestando servicios desde",
    companies: {
      accusys: {
        role: "Desarrollo, analista, diseño · Líder técnico · IA generativa",
        period: "Junio 2023 — Actual",
        summary:
          "En Accusys combino backend/frontend sobre COBIS (módulo Pasivas) para banca, liderazgo técnico de una app fullstack COCOMO (.NET 8 + Angular + Docker) y el diseño de una plataforma de conocimiento corporativo con AWS Bedrock para el área bancaria.",
      },
      "banco-ciudad": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Ante cada requerimiento: análisis, diseño y desarrollo en el core bancario COBIS (módulo Pasivas), con C#, MVC, .NET, Java, VB6, SQL/T-SQL, scripts SH y SQR según el contexto del banco.",
      },
      "banco-macro": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Implementación de cambios en Pasivas del core COBIS: análisis funcional/técnico y desarrollo backend/frontend adaptado al stack del banco (C#/.NET, Java, SQL).",
      },
      "banco-patagonia": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Análisis, diseño y desarrollo sobre COBIS Pasivas para Patagonia, alineando el entregable al stack y a los procesos del banco.",
      },
      facebank: {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Desarrollo e integración de requerimientos en el core bancario COBIS (Pasivas) para Facebank, con el mismo ciclo de análisis–diseño–desarrollo.",
      },
      ypf: {
        role: "Desarrollo Documentum · Frontend/Backend · Analista funcional",
        period: "2003 / 2008 — Mayo 2023",
        summary:
          "Cliente Inetum/IECISA. Años de trabajo en gestión documental YPF: Documentum (Content Server, WDK, Webtop, workflows), migraciones 7.0→21.2, laboratorio Docker/Postgres, apps Java/C#/React/Angular/Node y sistemas Invesdoc/Invesflow en múltiples países.",
      },
      inetum: {
        role: "Desarrollo, análisis, diseño, instalación · Consultoría Bizagi",
        period: "Enero 2021 — Mayo 2023 (ex IECISA)",
        summary:
          "En Inetum (ex Informática El Corte Inglés) lideré entregas Documentum/BPM para clientes enterprise, demos comerciales Bizagi e integración de soluciones documentales y de procesos en la región.",
      },
      techint: {
        role: "Desarrollo evolutivo Documentum / Webtop",
        period: "Enero 2018 — Enero 2021",
        summary:
          "Cliente IECISA. Desarrollo evolutivo Documentum 6.7/Webtop: nuevas funcionalidades y corrección de incidencias en Java y C#.",
      },
      "la-anonima": {
        role: "Desarrollo, análisis y diseño — portal de transportes",
        period: "Septiembre 2020 — Mayo 2023",
        summary:
          "Cliente Inetum. Portal de transportes La Anónima: Angular 10 + Java Spring / Oracle, con Spring Tool Suite, JPA Hibernate y Java 8.",
      },
      claro: {
        role: "Analista funcional / programador — portabilidad numérica",
        period: "Marzo 2011 — Diciembre 2011",
        summary:
          "Cliente IECISA. Análisis, diseño y desarrollo (Java / PL-SQL) sobre PORTANODE Integrator/Gateway para portabilidad numérica en Argentina y Paraguay.",
      },
      mapfre: {
        role: "Diseño y programación de capa de servicios — SGA MAPFRE",
        period: "Agosto 2016 — Agosto 2017",
        summary:
          "Cliente IECISA (Colombia). Capa REST/SOAP del proyecto SGA-MAPFRE con Documentum y servicios xCP 2.2, en Java y C#.",
      },
      coto: {
        role: "Soporte, implementación y retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "Cliente IECISA. Coordinación de soporte técnico e implementación retail: Coto (~1500 usuarios) junto a Tía, Eki y otros, con migración de sistemas y planes de prueba.",
      },
      banbif: {
        role: "Consultoría Documentum · desarrollo REST / Webtop",
        period: "Febrero 2018 — Agosto 2018",
        summary:
          "Cliente IECISA (Perú). Consultoría de mejoras en BanBif, instalación xCP 2.3, servicios REST en C# y Webtop en Java sobre Microsoft SQL Server.",
      },
      nike: {
        role: "Analista funcional / programador — RETAIL WARE",
        period: "Enero 2004 — Octubre 2008",
        summary:
          "Cliente IECISA. Análisis, diseño y desarrollo del sistema retail RETAIL WARE (VB6, C#, Clarion, SQL) para Nike Argentina, México y Chile, además de Puma, Dabra y Torca.",
      },
    },
  },

  skills: {
    eyebrow: "Competencias",
    heading: "Competencias técnicas",
    intro:
      "Nivel real por dominio, sin inflar: lo consolidado y lo que está en desarrollo.",
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
    eyebrow: "Tecnologías",
    heading: "Stack tecnológico",
    intro:
      "Tecnologías aplicadas en proyectos enterprise durante más de 20 años.",
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
    heading: "Trayectoria de roles",
    intro:
      "Progresión de developer a arquitecto: la base técnica respalda las decisiones de arquitectura.",
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
    eyebrow: "Industrias",
    heading: "Experiencia por industria",
    intro:
      "Entornos regulados y de misión crítica, con foco en banca e integración enterprise.",
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
    heading: "Formación y certificaciones",
    intro:
      "Estado explícito de cada credencial: obtenida, en curso o planificada.",
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
    eyebrow: "Portfolio",
    heading: "Proyectos destacados",
    intro:
      "Repositorios públicos de arquitectura, integración y producto, con demos integradas en esta página.",
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
    eyebrow: "Perfil profesional",
    heading: "Perfil LinkedIn",
    intro:
      "Resumen del perfil público: about, credenciales y recomendaciones.",
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
    eyebrow: "Contacto",
    heading: "Disponible para roles de arquitectura",
    body: "Respondo con contexto concreto sobre tu stack y tu desafío técnico. Contame qué necesitás resolver.",
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
    clientsLabel: "Empresas y clientes con los que trabajé",
    tagline: "Software & Solution Architect",
    builtWith: "Next.js y TypeScript. Desplegado en GitHub Pages.",
  },
};
