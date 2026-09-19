import type { Dictionary } from "./types";

export const es: Dictionary = {
  locale: "es",
  htmlLang: "es",
  localeName: "Español",

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

  config: {
    openLabel: "Configuración del proyecto",
    title: "Configuración",
    subtitle: "Idioma, tema y tipografía de esta página.",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    fontLabel: "Tipografía",
    fontSearch: "Buscar fuente…",
    fontEmpty: "No hay fuentes con ese nombre.",
  },

  hero: {
    availability: "Disponible para roles de arquitectura",
    role: "Software & Solution Architect",
    tagline:
      "Resuelvo sistemas críticos con el ciclo completo: analizo el dominio, diseño el cambio, lo llevo a producción y lo modernizo sin apagar el negocio. Banca (COBIS), ECM (Documentum), integración enterprise e IA generativa con gobernanza.",
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
    headlineLead: "Cómo lo resuelvo:",
    headlineEmphasis: "entender el dominio, acotar el riesgo y entregar en producción.",
    body: "No parto del diagrama: parto del sistema que ya factura. En banca, energía, seguros y retail reconstruí el dominio, aislé el núcleo y diseñé convivencia entre legacy y lo nuevo. Esa misma lógica hoy la aplico a cloud e IA generativa con límites de datos explícitos.",
    formula: ["Enterprise", "Arquitectura", "Banking", "Cloud", "IA generativa"],
    result: "Diferenciación",
  },

  capabilities: {
    eyebrow: "Especialización",
    heading: "Áreas de expertise",
    intro:
      "Cuatro frentes con el mismo método: problema real de cliente, decisión técnica y resultado operable. Cada uno anclado a trayectoria concreta.",
    expand: "Ver detalle",
    collapse: "Ocultar",
    challengeLabel: "El problema",
    approachLabel: "Cómo lo resolví",
    outcomeLabel: "El resultado",
    items: {
      legacyModernization: {
        title: "Modernización de sistemas legacy",
        teaser: "Migración por etapas sin interrumpir la operación.",
        challenge:
          "En YPF sostuve Documentum durante años (Content Server, WDK, Webtop, workflows) y migraciones 7.0→21.2: un ECM crítico sin documentación viva donde un big bang no era opción. En retail (Nike, Coto) el legacy ya facturaba con miles de usuarios.",
        approach:
          "Reconstruyo el dominio real antes de tocar código. Aíslo el núcleo, defino límites explícitos y planteo convivencia entre lo viejo y lo nuevo — laboratorio Docker/Postgres incluido cuando hace falta validar el salto de versión.",
        outcome:
          "Un camino de modernización que el negocio puede aprobar: el sistema sigue operando mientras se evoluciona, sin depender de apagar lo que hoy sostiene la operación.",
      },
      enterpriseIntegration: {
        title: "Integración enterprise",
        teaser: "Contratos explícitos, errores visibles y trazabilidad auditable.",
        challenge:
          "En MAPFRE (SGA) y BanBif había que conectar Documentum/xCP con capas REST/SOAP. En Claro, PORTANODE debía coordinar portabilidad entre países. En La Anónima, portal Angular + Spring/Oracle con flujos operativos diarios.",
        approach:
          "Diseño contratos explícitos REST/SOAP, separo lo síncrono de batch/asíncrono y hago los errores visibles y recuperables. En Inetum sumé BPM (Bizagi) cuando el proceso de negocio era el contrato real.",
        outcome:
          "Integraciones que se pueden auditar, reprocesar y explicar cuando el negocio pregunta qué pasó con una transacción o un expediente puntual.",
      },
      bankingCore: {
        title: "Core bancario y sistemas transaccionales",
        teaser: "Consistencia, idempotencia y trazabilidad en entornos regulados.",
        challenge:
          "En Accusys y bancos (Ciudad, Macro, Patagonia, Facebank) cada requerimiento toca COBIS Pasivas: inconsistencia no es un bug, es dinero, cierre y regulación.",
        approach:
          "Ciclo análisis → diseño → desarrollo adaptado al stack de cada banco (C#/.NET, Java, VB6, SQL/T-SQL, SH, SQR). Priorizo consistencia, idempotencia y trazabilidad por encima de la elegancia del diagrama.",
        outcome:
          "Cambios entregables en el core que el banco puede operar y auditar, hechos por alguien que entiende el impacto contable y no solo el servicio HTTP.",
      },
      genAiAdoption: {
        title: "IA generativa enterprise",
        teaser: "RAG y agentes con gobernanza de datos, listos para producción.",
        challenge:
          "En Accusys el área bancaria necesita conocimiento corporativo asistido por IA sin exponer datos sensibles ni quedarse en una demo que nunca llega a producción.",
        approach:
          "Diseño plataforma de conocimiento con AWS Bedrock, límites de datos claros, evaluación de cuándo un agente aporta valor real, y proveedor desacoplado detrás de un puerto — misma disciplina que en integración enterprise.",
        outcome:
          "Capacidad de GenAI integrable al stack existente con control de acceso y costo, en lugar de sumar otro silo experimental.",
      },
    },
  },

  experience: {
    eyebrow: "Trayectoria",
    heading: "Experiencia profesional",
    intro:
      "Cómo resolví problemas en cada contexto: situación, decisión técnica y resultado operable.",
    expand: "Ver experiencia",
    collapse: "Ocultar experiencia",
    viaLabel: "Prestando servicios desde",
    companies: {
      accusys: {
        role: "Desarrollo, analista, diseño · Líder técnico · IA generativa",
        period: "Junio 2023 — Actual",
        summary:
          "En Accusys combino tres frentes: entrega en core bancario COBIS Pasivas, liderazgo técnico de una app fullstack y diseño de conocimiento corporativo con GenAI.",
        solved: [
          "Había que sostener banca y a la vez modernizar el stack: lideré COCOMO (.NET 8 + Angular + Docker) con criterios de arquitectura aplicables al día a día.",
          "El área bancaria necesitaba conocimiento asistido sin filtrar datos sensibles: diseñé la plataforma sobre AWS Bedrock con límites de acceso explícitos.",
          "Los bancos clientes exigían ciclo completo por requerimiento: unifiqué análisis, diseño y desarrollo para no entregar “código suelto” al core.",
        ],
      },
      "banco-ciudad": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Entrega end-to-end sobre COBIS Pasivas en el stack heterogéneo del banco.",
        solved: [
          "Cada pedido llegaba sin un diseño único: armé el ciclo análisis → diseño → desarrollo antes de tocar Pasivas.",
          "El stack mezcla C#, MVC, .NET, Java, VB6, SQL/T-SQL, SH y SQR: adapto la solución al contexto real del banco, no a un stack ideal.",
          "El riesgo era romper consistencia en el core: priorizo trazabilidad y cambios acotados sobre reescrituras amplias.",
        ],
      },
      "banco-macro": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Cambios funcionales y técnicos en Pasivas alineados al stack de Macro.",
        solved: [
          "Había que traducir pedido de negocio a cambio seguro en el core: separo análisis funcional del diseño técnico antes de codear.",
          "Backend y frontend conviven en C#/.NET, Java y SQL: entrego cortes verticales que el banco puede probar en su entorno.",
          "Evito “parches locales”: dejo el cambio auditable para operaciones y cierre.",
        ],
      },
      "banco-patagonia": {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Entregas en COBIS Pasivas alineadas a procesos y stack de Patagonia.",
        solved: [
          "Los procesos del banco no admiten un entregable genérico: adapto diseño y desarrollo a su forma de operar Pasivas.",
          "Alineo el cambio con el ciclo de análisis–diseño–desarrollo para reducir ida y vuelta con el negocio.",
          "Mantengo el foco en Pasivas sin arrastrar deuda innecesaria a módulos vecinos.",
        ],
      },
      facebank: {
        role: "Desarrollo, análisis y diseño — COBIS Pasivas",
        period: "Junio 2023 — Actual",
        summary:
          "Cliente Accusys. Integración de requerimientos en el core COBIS (Pasivas) para Facebank.",
        solved: [
          "Los requerimientos debían entrar al core sin romper integraciones existentes: diseño primero el encaje en Pasivas.",
          "Aplico el mismo ciclo análisis–diseño–desarrollo para que Facebank reciba cambios listos para su operatoria.",
          "Priorizo integración limpia al módulo Pasivas frente a soluciones laterales difíciles de operar.",
        ],
      },
      ypf: {
        role: "Desarrollo Documentum · Frontend/Backend · Analista funcional",
        period: "2003 / 2008 — Mayo 2023",
        summary:
          "Cliente Inetum/IECISA. Gestión documental YPF a escala: Documentum, migraciones mayores y apps alrededor del ECM.",
        solved: [
          "Migrar 7.0→21.2 sin apagar el ECM: validé el salto en laboratorio Docker/Postgres y planifiqué convivencia por etapas.",
          "Content Server, WDK, Webtop y workflows sin documentación viva: reconstruí el dominio y sostuve evolución + incidentes.",
          "El negocio necesitaba apps encima del ECM: entregué Java/C#/React/Angular/Node e Invesdoc/Invesflow en varios países.",
        ],
      },
      inetum: {
        role: "Desarrollo, análisis, diseño, instalación · Consultoría Bizagi",
        period: "Enero 2021 — Mayo 2023 (ex IECISA)",
        summary:
          "En Inetum (ex IECISA) lideré entregas Documentum/BPM y demos Bizagi para clientes enterprise en la región.",
        solved: [
          "Había que vender y entregar proceso + documento: uní consultoría Bizagi con implementación Documentum real.",
          "Coordiné instalación, análisis y desarrollo para que la demo comercial no se desconectara de la solución productiva.",
          "Estandaricé entregas regionales sin perder el contexto de cada cliente.",
        ],
      },
      techint: {
        role: "Desarrollo evolutivo Documentum / Webtop",
        period: "Enero 2018 — Enero 2021",
        summary:
          "Cliente IECISA. Evolutivo e incidentes sobre Documentum 6.7 / Webtop en Java y C#.",
        solved: [
          "El ECM debía evolucionar sin proyectos greenfield: entregué features e incidentes sobre Documentum 6.7/Webtop.",
          "Separé correcciones urgentes de mejoras evolutivas para no mezclar riesgo en el mismo release.",
          "Trabajé en Java y C# según la capa afectada, manteniendo estabilidad operativa.",
        ],
      },
      "la-anonima": {
        role: "Desarrollo, análisis y diseño — portal de transportes",
        period: "Septiembre 2020 — Mayo 2023",
        summary:
          "Cliente Inetum. Portal de transportes Angular 10 + Java Spring / Oracle.",
        solved: [
          "La operación logística necesitaba un portal usable día a día: diseñé el flujo end-to-end Angular + Spring/Oracle.",
          "Modelé persistencia con JPA/Hibernate sobre Oracle alineada al dominio de transporte.",
          "Cerré el ciclo análisis–diseño–desarrollo para que el portal no quedara como UI desconectada del backend.",
        ],
      },
      claro: {
        role: "Analista funcional / programador — portabilidad numérica",
        period: "Marzo 2011 — Diciembre 2011",
        summary:
          "Cliente IECISA. Portabilidad numérica Argentina/Paraguay sobre PORTANODE Integrator/Gateway.",
        solved: [
          "Había que coordinar portabilidad entre países: analicé, diseñé y desarrollé sobre Integrator/Gateway (Java / PL-SQL).",
          "Traté la integración como contrato explícito entre nodos, no como scripts sueltos.",
          "Entregué cambios listos para el flujo regulado de portabilidad numérica.",
        ],
      },
      mapfre: {
        role: "Diseño y programación de capa de servicios — SGA MAPFRE",
        period: "Agosto 2016 — Agosto 2017",
        summary:
          "Cliente IECISA (Colombia). Capa REST/SOAP SGA-MAPFRE con Documentum y xCP 2.2.",
        solved: [
          "El SGA necesitaba exponer Documentum/xCP sin acoplar clientes al ECM: diseñé la capa REST/SOAP en Java y C#.",
          "Separé contratos de servicio de la implementación Documentum para poder evolucionar cada lado.",
          "Dejé la integración auditable para un entorno de seguros regulado.",
        ],
      },
      coto: {
        role: "Soporte, implementación y retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "Cliente IECISA. Soporte e implementación retail a escala (~1500 usuarios en Coto) más otras cadenas.",
        solved: [
          "Había que sostener operación retail masiva: coordiné soporte e implementación STORE FLOW / RETAIL WARE.",
          "Las migraciones exigían disciplina: armé planes de prueba y cortes controlados con Tía, Eki y otros.",
          "Aprendí temprano que el legacy que factura se moderniza por etapas, no por big bang.",
        ],
      },
      banbif: {
        role: "Consultoría Documentum · desarrollo REST / Webtop",
        period: "Febrero 2018 — Agosto 2018",
        summary:
          "Cliente IECISA (Perú). Mejoras BanBif: xCP 2.3, REST en C# y Webtop en Java sobre SQL Server.",
        solved: [
          "El banco necesitaba mejoras ECM concretas: instalé xCP 2.3 y cerré el gap con servicios REST + Webtop.",
          "Expuse capacidades Documentum vía REST en C# sin forzar a los consumidores a conocer el modelo interno.",
          "Sostuve Webtop Java sobre SQL Server alineado a la operatoria de BanBif.",
        ],
      },
      nike: {
        role: "Analista funcional / programador — RETAIL WARE",
        period: "Enero 2004 — Octubre 2008",
        summary:
          "Cliente IECISA. RETAIL WARE multi-país (Nike AR/MX/CL y otras marcas) en VB6, C#, Clarion y SQL.",
        solved: [
          "El retail multi-país no admitía una sola variante: analicé, diseñé y desarrollé RETAIL WARE para Nike AR/MX/CL.",
          "Extendí el mismo método a Puma, Dabra y Torca sin perder el dominio compartido.",
          "Convencí al negocio con entregas evolutivas sobre stack legacy (VB6/C#/Clarion/SQL), no con reescritura total.",
        ],
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
      "Labs públicos que muestran cómo resuelvo arquitectura e integración. No son casos confidenciales de cliente: son evidencia de método reproducible.",
    openPreview: "Ver en la página",
    closePreview: "Cerrar preview",
    viewDemo: "Demo en vivo",
    languagesLabel: "Stack",
    repoHint: "Código en GitHub (opcional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Problema: un CV estático no muestra cómo pensás. Solución: landing tipada, multilingüe y orientada a recruiters de arquitectura.",
        detail:
          "Decidí export estático (Next.js 16 + TypeScript + GitHub Pages), i18n tipado y preferencias de tema/fuente en el cliente. El resultado es un artefacto que demuestra diseño de producto + arquitectura front sin depender de un backend.",
      },
      catalogs: {
        title: "Creador de Catálogos",
        summary:
          "Problema: armar catálogos de códigos desde maestros es manual y frágil. Solución: Angular + FastAPI con flujo versionado.",
        detail:
          "Separé UI publicada (GitHub Pages + CI/CD) del backend local FastAPI. El lab demuestra contratos claros entre front y API, versionado por specs y releases automáticos — el mismo criterio que uso en integraciones enterprise.",
      },
      hexagonal: {
        title: "Arquitectura Hexagonal en Java",
        summary:
          "Problema: “Clean Architecture” solo en slides. Solución: referencia Spring Boot con límites dominio/aplicación/infra.",
        detail:
          "Organicé puertos y adaptadores con inversión de dependencias. Sirve como evidencia concreta de cómo aíslo el núcleo — el mismo reflejo que aplico al modernizar legacy o al desacoplar un proveedor de IA.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Problema: orquestar servicios y MFEs sin contratos. Solución: middleware que lee OpenAPI/Swagger y impone convenciones.",
        detail:
          "Monorepo con reglas para services, middleware y microfrontends Angular. El lab muestra cómo diseño integración a partir del contrato, no a partir de acoplamientos implícitos.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary:
          "Problema: componer servicios sin patrón de configuración e integración. Solución: base Spring alineada a escenarios enterprise.",
        detail:
          "Exploré configuración, composición y patrones de integración en Spring. Es un sandbox para practicar lo que en banca y ECM se paga caro si se improvisa en producción.",
      },
      transportAgenda: {
        title: "Agenda de Transporte",
        summary:
          "Problema: agenda logística sin dominio claro entre UI y backend. Solución: Java + TypeScript end-to-end orientado a operación.",
        detail:
          "Complementa el portal de transportes real (La Anónima) con un lab que separa dominio operacional del front. Evidencia de cómo modelo un flujo logístico completo sin mezclar capas.",
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
      "Arquitecto de software y soluciones que resuelve sistemas críticos con ciclo completo: análisis, diseño, producción y modernización. .NET, Java, COBIS, OpenText Documentum, Bizagi, integración enterprise e IA generativa con gobernanza. Del retail y la energía a la banca regulada.",
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
