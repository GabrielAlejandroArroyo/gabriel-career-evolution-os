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

  hero: {
    availability: "Available for architecture roles",
    role: "Software & Solution Architect",
    tagline:
      "20+ years in enterprise and transactional systems: banking, integration, legacy modernization, cloud and generative AI. End-to-end experience, from design to production.",
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
    headlineLead: "A hands-on architect:",
    headlineEmphasis: "from production code to architecture decisions.",
    body: "I covered the full cycle: development, integration, production support and modernization of mission-critical systems. That operational background produces architecture decisions that are viable, auditable and sustainable in production.",
    formula: ["Enterprise", "Architecture", "Banking", "Cloud", "Generative AI"],
    result: "Differentiation",
  },

  capabilities: {
    eyebrow: "Specialization",
    heading: "Areas of expertise",
    intro:
      "Four areas where I deliver direct value. Each includes problem, approach and outcome.",
    expand: "Show detail",
    collapse: "Hide",
    challengeLabel: "The problem",
    approachLabel: "My approach",
    outcomeLabel: "The outcome",
    items: {
      legacyModernization: {
        title: "Legacy system modernization",
        teaser: "Staged migration without disrupting operations.",
        challenge:
          "Applications that have carried the business for 15 years, with no living documentation, where every change is frightening and nobody wants to sign off on the migration.",
        approach:
          "I reconstruct the real domain before touching a single line. I isolate the transactional core, define explicit boundaries and lay out a staged migration where old and new coexist.",
        outcome:
          "A modernization path the business can actually approve, because it never depends on a big bang or on switching off what currently generates revenue.",
      },
      enterpriseIntegration: {
        title: "Enterprise integration",
        teaser: "Explicit contracts, visible failures and auditable traceability.",
        challenge:
          "Core banking, ERP, document management, external services and batch processes that must stay coordinated without losing consistency or traceability.",
        approach:
          "I design explicit integration contracts over REST and SOAP, separate what must be synchronous from what belongs in batch or async, and make failures visible and recoverable instead of silent.",
        outcome:
          "Integrations you can audit, reprocess and explain when the business asks what happened to one specific transaction.",
      },
      bankingCore: {
        title: "Core banking and transactional systems",
        teaser: "Consistency, idempotency and traceability in regulated environments.",
        challenge:
          "Platforms where an inconsistency is not a bug: it is real money, a broken accounting close and an answer owed to the regulator.",
        approach:
          "I work from concrete knowledge of COBIS, batch processing and closing cycles. I prioritize consistency, idempotency and traceability over architectural elegance.",
        outcome:
          "Technical decisions that hold up under volume and audit, made by someone who understands the accounting impact and not just the diagram.",
      },
      genAiAdoption: {
        title: "Enterprise generative AI",
        teaser: "RAG and agents with data governance, production-ready.",
        challenge:
          "Organizations that want to leverage GenAI but cannot expose sensitive data, and cannot sustain a demo that never reaches production.",
        approach:
          "I design RAG architectures with clear data boundaries, assess when an agent adds real value versus when it is overengineering, and keep the AI provider decoupled behind a port.",
        outcome:
          "AI capabilities that integrate into the existing stack with access and cost control, instead of adding one more silo.",
      },
    },
  },

  experience: {
    eyebrow: "Experience",
    heading: "Professional experience",
    intro:
      "Skills, technology stack, career path, industries and education.",
    expand: "Show experience",
    collapse: "Hide experience",
    viaLabel: "Delivered through",
    companies: {
      accusys: {
        role: "Development, analysis, design · Tech lead · Generative AI",
        period: "June 2023 — Present",
        summary:
          "At Accusys I combine COBIS Pasivas banking work, tech lead on a fullstack COCOMO app (.NET 8 + Angular + Docker), and design of a corporate knowledge platform on AWS Bedrock for banking teams.",
      },
      "banco-ciudad": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. End-to-end analysis, design and development on the COBIS core (Pasivas), using C#, MVC, .NET, Java, VB6, SQL/T-SQL, SH and SQR as needed.",
      },
      "banco-macro": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. Functional/technical delivery on COBIS Pasivas for Macro, spanning backend and frontend in the bank’s stack (C#/.NET, Java, SQL).",
      },
      "banco-patagonia": {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. Analysis, design and development on COBIS Pasivas for Patagonia, aligned to the bank’s processes and stack.",
      },
      facebank: {
        role: "Development, analysis & design — COBIS Pasivas",
        period: "June 2023 — Present",
        summary:
          "Accusys client. Requirements delivery on the COBIS banking core (Pasivas) for Facebank through the same analysis–design–build cycle.",
      },
      ypf: {
        role: "Documentum development · Frontend/Backend · Functional analyst",
        period: "2003 / 2008 — May 2023",
        summary:
          "Inetum/IECISA client. Long-running Documentum work at YPF: Content Server, WDK, Webtop, workflows, 7.0→21.2 migrations, Docker/Postgres labs, Java/C#/React/Angular/Node apps and Invesdoc/Invesflow across countries.",
      },
      inetum: {
        role: "Development, analysis, design, install · Bizagi consulting",
        period: "January 2021 — May 2023 (ex IECISA)",
        summary:
          "At Inetum (formerly Informática El Corte Inglés) I delivered Documentum/BPM for enterprise clients, Bizagi commercial demos and document/process solutions across the region.",
      },
      techint: {
        role: "Evolutionary Documentum / Webtop development",
        period: "January 2018 — January 2021",
        summary:
          "IECISA client. Evolutionary development on Documentum 6.7/Webtop: new features and incident fixes in Java and C#.",
      },
      "la-anonima": {
        role: "Development, analysis & design — transport portal",
        period: "September 2020 — May 2023",
        summary:
          "Inetum client. La Anónima transport portal: Angular 10 + Java Spring / Oracle with Spring Tool Suite, JPA Hibernate and Java 8.",
      },
      claro: {
        role: "Functional analyst / developer — number portability",
        period: "March 2011 — December 2011",
        summary:
          "IECISA client. Analysis, design and development (Java / PL-SQL) on PORTANODE Integrator/Gateway for number portability in Argentina and Paraguay.",
      },
      mapfre: {
        role: "Service-layer design & coding — SGA MAPFRE",
        period: "August 2016 — August 2017",
        summary:
          "IECISA client (Colombia). REST/SOAP service layer for SGA-MAPFRE using Documentum and xCP 2.2 services, in Java and C#.",
      },
      coto: {
        role: "Support, rollout & retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "IECISA client. Technical support coordination and retail rollouts: Coto (~1500 users) plus Tía, Eki and others, including migrations and test plans.",
      },
      banbif: {
        role: "Documentum consulting · REST / Webtop development",
        period: "February 2018 — August 2018",
        summary:
          "IECISA client (Peru). BanBif improvement consulting, xCP 2.3 install, REST services in C# and Webtop in Java on Microsoft SQL Server.",
      },
      nike: {
        role: "Functional analyst / developer — RETAIL WARE",
        period: "January 2004 — October 2008",
        summary:
          "IECISA client. Analysis, design and development of RETAIL WARE (VB6, C#, Clarion, SQL) for Nike Argentina, Mexico and Chile, plus Puma, Dabra and Torca.",
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
      "Public repositories covering architecture, integration and product work, with demos embedded on this page.",
    openPreview: "View on this page",
    closePreview: "Close preview",
    viewDemo: "Live demo",
    languagesLabel: "Stack",
    repoHint: "Code on GitHub (optional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Personal career evolution platform and this multilingual landing.",
        detail:
          "Next.js 16, TypeScript and static export to GitHub Pages. Includes a design system, typed i18n and sections built for recruiter conversion toward architecture roles.",
      },
      catalogs: {
        title: "Catalog Builder",
        summary:
          "Angular + FastAPI app to build code catalogs from master data.",
        detail:
          "Frontend published on GitHub Pages with CI/CD. The FastAPI backend runs locally; the UI demonstrates the catalog flow, specs-based versioning and automated releases.",
      },
      hexagonal: {
        title: "Hexagonal Architecture in Java",
        summary: "Clean Architecture / hexagonal reference with Spring Boot.",
        detail:
          "Organizes domain, application and infrastructure with dependency inversion. Concrete evidence of how I apply explicit boundaries beyond a diagram.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Middleware design that reads service OpenAPI/Swagger and orchestrates MFEs.",
        detail:
          "Monorepo conventions for services, middleware and Angular microfrontends. Focused on integration contracts and day-to-day architecture rules.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary: "Spring microservices base for service composition.",
        detail:
          "Practical exploration of configuration, services and integration patterns in the Spring ecosystem, aligned with real enterprise scenarios.",
      },
      transportAgenda: {
        title: "Transport Agenda",
        summary: "Transport scheduling system with Java backend and TypeScript front.",
        detail:
          "End-to-end solution for logistics scheduling. Complements a TypeScript front with a Java backend oriented to operational domain.",
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
      "Software and solution architect with hands-on experience in enterprise and transactional systems. .NET, Java, OpenText Documentum, Bizagi BPM, integration and legacy modernization. Today I bring that foundation into modern architecture, cloud and generative AI.",
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
