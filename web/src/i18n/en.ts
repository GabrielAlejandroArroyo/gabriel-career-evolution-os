import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  localeName: "English",
  switchTo: { href: "/", label: "ES", hreflang: "es" },

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
    experience: "Path",
    credentials: "Education",
    contact: "Contact",
    toggleTheme: "Toggle theme",
  },

  hero: {
    availability: "Open to architecture roles",
    role: "Software & Solution Architect",
    tagline:
      "Over 20 years designing, building and integrating the systems companies cannot afford to have fail. Today I bring that foundation into modern architecture, cloud and generative AI.",
    primaryCta: "Let's talk about the role",
    secondaryCta: "See my expertise",
  },

  metrics: {
    yearsLabel: "years in enterprise technology",
    industriesLabel: "industries with mission-critical systems",
    scopeValue: "End-to-end",
    scopeLabel: "from design to production support",
  },

  differentiation: {
    eyebrow: "Value proposition",
    headlineLead: "I am not a developer who collected technologies.",
    headlineEmphasis: "I am an architect who shipped them.",
    body: "Most architects arrive from design and never had to keep what they designed alive. I walked the full path: I wrote the code, integrated the systems, handled the 3 a.m. outages and modernized what everyone else preferred not to touch. That operational scar tissue is why my architectural decisions survive contact with reality.",
    formula: ["Enterprise", "Architecture", "Banking", "Cloud", "Generative AI"],
    result: "Differentiation",
  },

  capabilities: {
    eyebrow: "What I solve",
    heading: "The problems that get me in the room",
    intro:
      "These are not portfolio projects. They are the situations I have been solving for two decades across banking, energy, insurance and retail.",
    challengeLabel: "The problem",
    approachLabel: "My approach",
    outcomeLabel: "The outcome",
    items: {
      legacyModernization: {
        title: "Legacy system modernization",
        challenge:
          "Applications that have carried the business for 15 years, with no living documentation, where every change is frightening and nobody wants to sign off on the migration.",
        approach:
          "I reconstruct the real domain before touching a single line. I isolate the transactional core, define explicit boundaries and lay out a staged migration where old and new coexist.",
        outcome:
          "A modernization path the business can actually approve, because it never depends on a big bang or on switching off what currently generates revenue.",
      },
      enterpriseIntegration: {
        title: "Integrating systems never designed to talk to each other",
        challenge:
          "Core banking, ERP, document management, external services and batch processes that must stay coordinated without losing consistency or traceability.",
        approach:
          "I design explicit integration contracts over REST and SOAP, separate what must be synchronous from what belongs in batch or async, and make failures visible and recoverable instead of silent.",
        outcome:
          "Integrations you can audit, reprocess and explain when the business asks what happened to one specific transaction.",
      },
      bankingCore: {
        title: "Architecture on banking and transactional systems",
        challenge:
          "Platforms where an inconsistency is not a bug: it is real money, a broken accounting close and an answer owed to the regulator.",
        approach:
          "I work from concrete knowledge of COBIS, batch processing and closing cycles. I prioritize consistency, idempotency and traceability over architectural elegance.",
        outcome:
          "Technical decisions that hold up under volume and audit, made by someone who understands the accounting impact and not just the diagram.",
      },
      genAiAdoption: {
        title: "Generative AI adoption in enterprise contexts",
        challenge:
          "Organizations that want to leverage GenAI but cannot expose sensitive data, and cannot sustain a demo that never reaches production.",
        approach:
          "I design RAG architectures with clear data boundaries, assess when an agent adds real value versus when it is overengineering, and keep the AI provider decoupled behind a port.",
        outcome:
          "AI capabilities that integrate into the existing stack with access and cost control, instead of adding one more silo.",
      },
    },
  },

  skills: {
    eyebrow: "Technical depth",
    heading: "Where I stand and how deep I go",
    intro:
      "An honest read of my level per domain. What I know deeply and what I am still building, without inflating either one.",
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
    eyebrow: "Tooling",
    heading: "The stack I work with",
    intro:
      "Breadth accumulated over twenty years. Technologies are the means; architecture and domain are the argument.",
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
    heading: "From writing the code to deciding the architecture",
    intro:
      "I do not erase my developer years. They are exactly what backs my architectural decisions today.",
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
    eyebrow: "Context",
    heading: "Industries where the system cannot fail",
    intro:
      "Regulated, transactional and operationally demanding environments, with particular focus on banking and enterprise integration.",
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
    heading: "Degrees, certifications and where I am heading",
    intro:
      "I explicitly separate what I have already earned from what is in progress or planned. If it says planned, I have not sat the exam yet.",
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

  contact: {
    eyebrow: "Next step",
    heading:
      "If you need an architect who has already lived enterprise complexity, let's talk.",
    body: "I reply with concrete context about your stack and your problem, not a generic pitch. Tell me what you are trying to solve.",
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
    linkedinCta: "LinkedIn",
    githubCta: "GitHub",
  },

  footer: {
    tagline: "Software & Solution Architect",
    builtWith: "Next.js and TypeScript. Deployed on GitHub Pages.",
  },
};
