import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  localeName: "English",

  meta: {
    title: "Gabriel Arroyo — Software & Solution Architect",
    description:
      "Software and solution architect with 20+ years in enterprise and transactional systems. Banking, enterprise integration, legacy modernization, cloud and GenAI.",
    ogTitle: "Gabriel Arroyo — Software & Solution Architect",
    ogDescription:
      "Hands-on architect in enterprise and transactional systems. Banking, architecture, cloud and generative AI.",
    jobTitle: "Software & Solution Architect",
  },

  nav: {
    skipToContent: "Skip to content",
    expertise: "Expertise",
    portfolio: "Projects",
    presence: "LinkedIn",
    contact: "Contact",
    toggleTheme: "Toggle theme",
  },

  config: {
    openLabel: "Project settings",
    title: "Settings",
    subtitle: "Language, theme and typography for this page.",
    languageLabel: "Language",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    fontLabel: "Typography",
    fontSearch: "Search fonts…",
    fontEmpty: "No fonts match that name.",
  },

  hero: {
    availability: "Available for architecture roles",
    role: "Software & Solution Architect",
    tagline:
      "I solve mission-critical systems end to end: map the domain, design the change, ship to production and modernize without shutting the business down. Banking (COBIS), ECM (Documentum), enterprise integration and governed generative AI.",
    primaryCta: "Contact me",
    secondaryCta: "View expertise",
  },

  metrics: {
    yearsLabel: "years in enterprise technology",
    industriesLabel: "industries with mission-critical systems",
    scopeValue: "End-to-end",
    scopeLabel: "from design to production support",
  },

  differentiation: {
    eyebrow: "Value proposition",
    headlineLead: "How I solve it:",
    headlineEmphasis: "understand the domain, bound the risk, deliver in production.",
    body: "I do not start from the diagram: I start from the system that already generates revenue. In banking, energy, insurance and retail I rebuilt the domain, isolated the core and designed coexistence between legacy and new. I apply the same logic to cloud and generative AI with explicit data boundaries.",
    formula: ["Enterprise", "Architecture", "Banking", "Cloud", "Generative AI"],
    result: "Differentiation",
  },

  capabilities: {
    eyebrow: "Specialization",
    heading: "Areas of expertise",
    intro:
      "Four fronts with the same method: real client problem, technical decision and operable outcome — each anchored to concrete experience.",
    expand: "Show detail",
    collapse: "Hide",
    challengeLabel: "The problem",
    approachLabel: "How I solved it",
    outcomeLabel: "The outcome",
    items: {
      legacyModernization: {
        title: "Legacy system modernization",
        teaser: "Staged migration without disrupting operations.",
        challenge:
          "At YPF I sustained Documentum for years (Content Server, WDK, Webtop, workflows) and 7.0→21.2 migrations: a critical ECM with no living documentation where a big bang was not an option. In retail (Nike, Coto) legacy already billed with thousands of users.",
        approach:
          "I rebuild the real domain before touching code. I isolate the core, define explicit boundaries and plan coexistence between old and new — including Docker/Postgres labs when a version jump must be validated.",
        outcome:
          "A modernization path the business can approve: the system keeps running while it evolves, without depending on switching off what sustains operations today.",
      },
      enterpriseIntegration: {
        title: "Enterprise integration",
        teaser: "Explicit contracts, visible failures and auditable traceability.",
        challenge:
          "At MAPFRE (SGA) and BanBif, Documentum/xCP had to connect through REST/SOAP layers. At Claro, PORTANODE had to coordinate number portability across countries. At La Anónima, an Angular + Spring/Oracle portal carried daily operational flows.",
        approach:
          "I design explicit REST/SOAP contracts, separate sync from batch/async and make failures visible and recoverable. At Inetum I added BPM (Bizagi) when the business process was the real contract.",
        outcome:
          "Integrations you can audit, reprocess and explain when the business asks what happened to one transaction or dossier.",
      },
      bankingCore: {
        title: "Core banking and transactional systems",
        teaser: "Consistency, idempotency and traceability in regulated environments.",
        challenge:
          "At Accusys and banks (Ciudad, Macro, Patagonia, Facebank) every requirement touches COBIS Pasivas: inconsistency is not a bug — it is money, closing and regulation.",
        approach:
          "Analysis → design → build adapted to each bank’s stack (C#/.NET, Java, VB6, SQL/T-SQL, SH, SQR). I prioritize consistency, idempotency and traceability over diagram elegance.",
        outcome:
          "Core changes the bank can operate and audit, made by someone who understands accounting impact — not only the HTTP service.",
      },
      genAiAdoption: {
        title: "Enterprise generative AI",
        teaser: "RAG and agents with data governance, production-ready.",
        challenge:
          "At Accusys the banking area needs AI-assisted corporate knowledge without exposing sensitive data or staying stuck in a demo that never reaches production.",
        approach:
          "I design a knowledge platform on AWS Bedrock with clear data boundaries, assess when an agent adds real value, and keep the provider decoupled behind a port — the same discipline as enterprise integration.",
        outcome:
          "GenAI capability that fits the existing stack with access and cost control, instead of adding another experimental silo.",
      },
    },
  },

  experience: {
    eyebrow: "Experience",
    heading: "Professional experience",
    intro:
      "How I solved problems in each context: situation, technical decision and operable outcome.",
    expand: "Show experience",
    collapse: "Hide experience",
    viaLabel: "Delivered through",
    companies: {
      accusys: {
        role: "Development, analysis, design · Tech lead · Generative AI",
        period: "June 2023 — Present",
        summary:
          "At Accusys I combine three fronts: COBIS Pasivas banking delivery, tech lead on a fullstack app, and corporate knowledge design with GenAI.",
        solved: [
          "Banking had to keep running while the stack modernized: I led COCOMO (.NET 8 + Angular + Docker) with day-to-day architecture rules.",
          "Banking teams needed assisted knowledge without leaking sensitive data: I designed the platform on AWS Bedrock with explicit access boundaries.",
          "Client banks required a full cycle per requirement: I unified analysis, design and build so the core never received “loose code”.",
        ],
      },
      "banco-ciudad": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. End-to-end delivery on COBIS Pasivas across the bank’s heterogeneous stack.",
        solved: [
          "Requests arrived without a single design: I ran analysis → design → build before touching Pasivas.",
          "The stack mixes C#, MVC, .NET, Java, VB6, SQL/T-SQL, SH and SQR: I adapt to the bank’s real context, not an ideal stack.",
          "The risk was breaking core consistency: I prioritize traceability and bounded changes over broad rewrites.",
        ],
      },
      "banco-macro": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. Functional and technical Pasivas changes aligned to Macro’s stack.",
        solved: [
          "Business asks had to become safe core changes: I separate functional analysis from technical design before coding.",
          "Backend and frontend span C#/.NET, Java and SQL: I deliver vertical slices the bank can test in its environment.",
          "I avoid local patches: every change stays auditable for operations and closing.",
        ],
      },
      "banco-patagonia": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. COBIS Pasivas delivery aligned to Patagonia’s processes and stack.",
        solved: [
          "Bank processes reject generic deliverables: I adapt design and build to how they operate Pasivas.",
          "I keep analysis–design–build tight to reduce back-and-forth with the business.",
          "I stay focused on Pasivas without dragging unnecessary debt into neighboring modules.",
        ],
      },
      facebank: {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. Requirements integration into the COBIS core (Pasivas) for Facebank.",
        solved: [
          "Requirements had to enter the core without breaking existing integrations: I design the Pasivas fit first.",
          "I apply the same analysis–design–build cycle so Facebank receives changes ready for operations.",
          "I prioritize clean Pasivas integration over side solutions that are hard to operate.",
        ],
      },
      ypf: {
        role: "Documentum development · Frontend/Backend · Functional analyst",
        period: "2003 / 2008 — May 2023",
        summary:
          "Inetum/IECISA client. Large-scale YPF document management: Documentum, major migrations and apps around the ECM.",
        solved: [
          "Migrating 7.0→21.2 without shutting the ECM: I validated the jump in a Docker/Postgres lab and planned staged coexistence.",
          "Content Server, WDK, Webtop and workflows with no living docs: I rebuilt the domain and sustained evolution plus incidents.",
          "The business needed apps on top of the ECM: I delivered Java/C#/React/Angular/Node and Invesdoc/Invesflow across countries.",
        ],
      },
      inetum: {
        role: "Development, analysis, design, install · Bizagi consulting",
        period: "January 2021 — May 2023 (ex IECISA)",
        summary:
          "At Inetum (ex IECISA) I led Documentum/BPM deliveries and Bizagi demos for enterprise clients in the region.",
        solved: [
          "Process + document had to be sold and delivered together: I combined Bizagi consulting with real Documentum implementation.",
          "I coordinated install, analysis and build so commercial demos stayed connected to the production solution.",
          "I standardized regional deliveries without losing each client’s context.",
        ],
      },
      techint: {
        role: "Evolutionary Documentum / Webtop development",
        period: "January 2018 — January 2021",
        summary:
          "IECISA client. Evolutionary work and incidents on Documentum 6.7 / Webtop in Java and C#.",
        solved: [
          "The ECM had to evolve without greenfield projects: I delivered features and incidents on Documentum 6.7/Webtop.",
          "I separated urgent fixes from evolutionary improvements to avoid mixing risk in the same release.",
          "I worked in Java or C# depending on the affected layer, keeping operational stability.",
        ],
      },
      "la-anonima": {
        role: "Development, analysis & design — transport portal",
        period: "September 2020 — May 2023",
        summary:
          "Inetum client. Transport portal: Angular 10 + Java Spring / Oracle.",
        solved: [
          "Logistics needed a portal usable every day: I designed the end-to-end Angular + Spring/Oracle flow.",
          "I modeled persistence with JPA/Hibernate on Oracle aligned to the transport domain.",
          "I closed analysis–design–build so the portal was not a UI disconnected from the backend.",
        ],
      },
      claro: {
        role: "Functional analyst / developer — number portability",
        period: "March 2011 — December 2011",
        summary:
          "IECISA client. Number portability AR/PY on PORTANODE Integrator/Gateway.",
        solved: [
          "Portability had to coordinate across countries: I analyzed, designed and built on Integrator/Gateway (Java / PL-SQL).",
          "I treated integration as an explicit contract between nodes, not as loose scripts.",
          "I delivered changes ready for the regulated number-portability flow.",
        ],
      },
      mapfre: {
        role: "Service-layer design & coding — SGA MAPFRE",
        period: "August 2016 — August 2017",
        summary:
          "IECISA client (Colombia). REST/SOAP layer for SGA-MAPFRE with Documentum and xCP 2.2.",
        solved: [
          "SGA needed to expose Documentum/xCP without coupling clients to the ECM: I designed the REST/SOAP layer in Java and C#.",
          "I separated service contracts from Documentum implementation so each side could evolve.",
          "I left the integration auditable for a regulated insurance environment.",
        ],
      },
      coto: {
        role: "Support, rollout & retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "IECISA client. Retail support and rollout at scale (~1500 users at Coto) plus other chains.",
        solved: [
          "Massive retail operations had to stay up: I coordinated STORE FLOW / RETAIL WARE support and rollout.",
          "Migrations demanded discipline: I built test plans and controlled cutovers with Tía, Eki and others.",
          "I learned early that revenue-generating legacy is modernized in stages, not with a big bang.",
        ],
      },
      banbif: {
        role: "Documentum consulting · REST / Webtop development",
        period: "February 2018 — August 2018",
        summary:
          "IECISA client (Peru). BanBif improvements: xCP 2.3, REST in C# and Webtop in Java on SQL Server.",
        solved: [
          "The bank needed concrete ECM improvements: I installed xCP 2.3 and closed the gap with REST services + Webtop.",
          "I exposed Documentum capabilities via REST in C# without forcing consumers to know the internal model.",
          "I sustained Java Webtop on SQL Server aligned to BanBif operations.",
        ],
      },
      nike: {
        role: "Functional analyst / developer — RETAIL WARE",
        period: "January 2004 — October 2008",
        summary:
          "IECISA client. Multi-country RETAIL WARE (Nike AR/MX/CL and other brands) in VB6, C#, Clarion and SQL.",
        solved: [
          "Multi-country retail rejected a single variant: I analyzed, designed and built RETAIL WARE for Nike AR/MX/CL.",
          "I extended the same method to Puma, Dabra and Torca without losing the shared domain.",
          "I convinced the business with evolutionary deliveries on legacy stacks — not with a full rewrite.",
        ],
      },
    },
  },

  skills: {
    eyebrow: "Competencies",
    heading: "Technical skills",
    intro:
      "Real level per domain, without inflation: consolidated skills and areas in development.",
    levelLabel: "Level",
    legend: [
      "1 Basic",
      "2 Intermediate",
      "3 Advanced",
      "4 Expert",
      "5 Reference",
    ],
    domains: {
      architecture: "Architecture",
      backend: "Backend & integration",
      data: "Data",
      enterprise: "Enterprise & banking",
      cloud: "Cloud & DevOps",
      ai: "Generative AI",
    },
    names: {
      appArchitecture: "Application architecture",
      solutionDesign: "Solution design",
      enterpriseIntegration: "Enterprise integration",
      legacyModernization: "Legacy modernization",
      microservices: "Microservices",
      hexagonalDdd: "Hexagonal architecture & DDD",
      dotnet: "C# / .NET",
      java: "Java / Spring Boot",
      restSoap: "REST & SOAP APIs",
      batchProcessing: "Batch processing",
      nodejs: "Node.js",
      sqlServer: "SQL Server",
      sybase: "Sybase ASE",
      oracle: "Oracle",
      postgresql: "PostgreSQL",
      dataModeling: "Data modeling",
      cobis: "COBIS",
      transactionalSystems: "Transactional systems",
      documentum: "OpenText Documentum",
      bpmn: "BPMN / Bizagi",
      bian: "BIAN",
      git: "Git & version control",
      cicd: "CI/CD",
      aws: "AWS",
      docker: "Docker",
      iac: "Infrastructure as code",
      promptEngineering: "Prompt engineering",
      bedrock: "AWS Bedrock",
      rag: "RAG & Knowledge Bases",
      aiAgents: "AI Agents & MCP",
      vectorDb: "Vector databases",
    },
  },

  stack: {
    eyebrow: "Technologies",
    heading: "Technology stack",
    intro:
      "Technologies applied in enterprise projects over 20+ years.",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      integration: "Integration",
      cloud: "Cloud & DevOps",
      enterprise: "Enterprise",
      ai: "Generative AI",
    },
  },

  trajectory: {
    eyebrow: "Evolution",
    heading: "Career path",
    intro:
      "Progression from developer to architect: the technical foundation backs the architecture decisions.",
    targetLabel: "Current focus",
    steps: {
      developer: "Developer",
      seniorDeveloper: "Senior Developer",
      analyst: "Functional & technical analyst",
      technicalReference: "Technical reference",
      solutionDesign: "Solution design",
      technicalLead: "Technical Lead",
      softwareArchitect: "Software / Solution Architect",
      enterpriseAiArchitect: "Enterprise & AI Solutions Architect",
    },
  },

  industries: {
    eyebrow: "Industries",
    heading: "Industry experience",
    intro:
      "Regulated, mission-critical environments, with focus on banking and enterprise integration.",
    items: {
      banking: "Banking & transactional systems",
      financialServices: "Financial services",
      energy: "Energy & oil",
      insurance: "Insurance",
      retailTelco: "Retail & telecommunications",
      logistics: "Logistics & document management",
    },
  },

  credentials: {
    eyebrow: "Education",
    heading: "Education and certifications",
    intro:
      "Explicit status for each credential: earned, in progress or planned.",
    status: {
      earned: "Earned",
      inProgress: "In progress",
      planned: "Planned",
    },
    items: {
      digitalTech: {
        name: "BSc in Digital Technologies",
        issuer: "University degree",
      },
      dataScience: {
        name: "BSc in Data Science",
        issuer: "University degree — final stage",
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
    heading: "Featured projects",
    intro:
      "Public labs that show how I solve architecture and integration. They are not confidential client cases — they are evidence of a reproducible method.",
    openPreview: "View on this page",
    closePreview: "Close preview",
    viewDemo: "Live demo",
    languagesLabel: "Stack",
    repoHint: "Code on GitHub (optional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Problem: a static CV does not show how you think. Solution: a typed, multilingual landing built for architecture recruiters.",
        detail:
          "I chose static export (Next.js 16 + TypeScript + GitHub Pages), typed i18n and client-side theme/font preferences. The result is a product+front-architecture artifact that does not depend on a backend.",
      },
      catalogs: {
        title: "Catalog Builder",
        summary:
          "Problem: building code catalogs from masters is manual and fragile. Solution: Angular + FastAPI with a versioned flow.",
        detail:
          "I separated the published UI (GitHub Pages + CI/CD) from the local FastAPI backend. The lab shows clear front/API contracts, specs-based versioning and automated releases — the same criterion I use in enterprise integrations.",
      },
      hexagonal: {
        title: "Hexagonal Architecture in Java",
        summary:
          "Problem: “Clean Architecture” only on slides. Solution: a Spring Boot reference with domain/application/infra boundaries.",
        detail:
          "I organized ports and adapters with dependency inversion. Concrete evidence of how I isolate the core — the same reflex I use when modernizing legacy or decoupling an AI provider.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Problem: orchestrating services and MFEs without contracts. Solution: middleware that reads OpenAPI/Swagger and enforces conventions.",
        detail:
          "Monorepo rules for services, middleware and Angular microfrontends. The lab shows how I design integration from the contract, not from implicit coupling.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary:
          "Problem: composing services without configuration and integration patterns. Solution: a Spring base aligned to enterprise scenarios.",
        detail:
          "I explored configuration, composition and integration patterns in Spring. A sandbox to practice what banking and ECM punish when improvised in production.",
      },
      transportAgenda: {
        title: "Transport Agenda",
        summary:
          "Problem: logistics scheduling without a clear domain between UI and backend. Solution: end-to-end Java + TypeScript oriented to operations.",
        detail:
          "Complements the real transport portal (La Anónima) with a lab that separates operational domain from the front. Evidence of modeling a full logistics flow without mixing layers.",
      },
    },
  },

  presence: {
    eyebrow: "Professional profile",
    heading: "LinkedIn profile",
    intro:
      "Public profile summary: about, credentials and recommendations.",
    expand: "Show full profile",
    collapse: "Hide detail",
    locationLabel: "Location",
    companyLabel: "Current company",
    educationLabel: "Education",
    followersLabel: "Followers",
    connectionsLabel: "Connections",
    aboutLabel: "About",
    about:
      "Software and solution architect who solves mission-critical systems end to end: analysis, design, production and modernization. .NET, Java, COBIS, OpenText Documentum, Bizagi, enterprise integration and governed generative AI. From retail and energy to regulated banking.",
    highlightsLabel: "Credentials visible on LinkedIn",
    recommendationsLabel: "Recommendations",
    recommendations: {
      bruno:
        "When it comes to Documentum, Gabriel is a true expert. He knows every technical detail and stays current. If there is a problem, he solves it with creativity and effectiveness. Reliable, fit for the role and always ready for new challenges.",
      karina:
        "An excellent professional: responsible, proactive and always bringing initiatives around the latest technologies. Committed to goals and strong at teamwork.",
    },
    openExternally: "Open full profile on LinkedIn",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Available for architecture roles",
    body: "I reply with concrete context about your stack and your technical challenge. Tell me what you need to solve.",
    rolesLabel: "Roles I am interested in",
    roles: [
      "Software Architect",
      "Solution Architect",
      "Enterprise Application Architect",
      "Technical Lead",
      "Banking Solutions Architect",
      "AWS Solutions Architect",
      "AI Solutions Architect",
    ],
    emailCta: "Email me",
    presenceCta: "See LinkedIn presence",
    portfolioCta: "See projects",
  },

  footer: {
    clientsLabel: "Companies and clients I've worked with",
    tagline: "Software & Solution Architect",
    builtWith: "Next.js and TypeScript. Deployed on GitHub Pages.",
  },
};
