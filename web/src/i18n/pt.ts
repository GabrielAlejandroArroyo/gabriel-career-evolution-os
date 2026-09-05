import type { Dictionary } from "./types";

export const pt: Dictionary = {
  locale: "pt",
  htmlLang: "pt-BR",
  localeName: "Português",

  meta: {
    title: "Gabriel Arroyo — Software & Solution Architect",
    description:
      "Arquiteto de software e soluções com mais de 20 anos em sistemas empresariais e transacionais. Banca, integração enterprise, modernização legacy, cloud e GenAI.",
    ogTitle: "Gabriel Arroyo — Software & Solution Architect",
    ogDescription:
      "Arquiteto hands-on em sistemas enterprise e transacionais. Banking, arquitetura, cloud e IA generativa.",
    jobTitle: "Software & Solution Architect",
  },

  nav: {
    skipToContent: "Ir para o conteúdo",
    expertise: "Expertise",
    portfolio: "Projetos",
    presence: "LinkedIn",
    contact: "Contato",
    toggleTheme: "Alternar tema",
  },

  config: {
    openLabel: "Configuração do projeto",
    title: "Configuração",
    subtitle: "Idioma, tema e tipografia desta página.",
    languageLabel: "Idioma",
    themeLabel: "Tema",
    themeLight: "Claro",
    themeDark: "Escuro",
    fontLabel: "Tipografia",
    fontSearch: "Buscar fonte…",
    fontEmpty: "Nenhuma fonte com esse nome.",
  },

  hero: {
    availability: "Disponível para papéis de arquitetura",
    role: "Software & Solution Architect",
    tagline:
      "+20 anos em sistemas enterprise e transacionais: banca, integração, modernização legacy, cloud e IA generativa. Experiência end-to-end, do design à produção.",
    primaryCta: "Contatar",
    secondaryCta: "Ver expertise",
  },

  metrics: {
    yearsLabel: "anos em tecnologia empresarial",
    industriesLabel: "indústrias com sistemas críticos",
    scopeValue: "End-to-end",
    scopeLabel: "do design ao suporte em produção",
  },

  differentiation: {
    eyebrow: "Proposta de valor",
    headlineLead: "Arquiteto com base hands-on:",
    headlineEmphasis: "do código em produção à decisão de arquitetura.",
    body: "Percorri o ciclo completo: desenvolvimento, integração, suporte produtivo e modernização de sistemas críticos. Essa experiência operacional sustenta decisões de arquitetura viáveis, auditáveis e sustentáveis em produção.",
    formula: ["Enterprise", "Arquitetura", "Banking", "Cloud", "IA generativa"],
    result: "Diferenciação",
  },

  capabilities: {
    eyebrow: "Especialização",
    heading: "Áreas de expertise",
    intro:
      "Quatro frentes em que entrego valor direto. Cada uma inclui problema, abordagem e resultado.",
    expand: "Ver detalhe",
    collapse: "Ocultar",
    challengeLabel: "O problema",
    approachLabel: "Minha abordagem",
    outcomeLabel: "O resultado",
    items: {
      legacyModernization: {
        title: "Modernização de sistemas legacy",
        teaser: "Migração por etapas sem interromper a operação.",
        challenge:
          "Aplicações que sustentam o negócio há 15 anos, sem documentação viva, em que cada mudança assusta e ninguém quer assinar a migração.",
        approach:
          "Reconstruo o domínio real antes de tocar uma linha. Isolo o núcleo transacional, defino limites explícitos e proponho uma migração por etapas com convivência entre o antigo e o novo.",
        outcome:
          "Um caminho de modernização que o negócio pode aprovar porque nunca depende de um big bang nem de desligar o que gera receita hoje.",
      },
      enterpriseIntegration: {
        title: "Integração enterprise",
        teaser: "Contratos explícitos, erros visíveis e rastreabilidade auditável.",
        challenge:
          "Core bancário, ERP, gestão documental, serviços externos e processos batch que precisam se coordenar sem perder consistência nem rastreabilidade.",
        approach:
          "Desenho contratos de integração explícitos sobre REST e SOAP, separo o síncrono do que deve ser batch ou assíncrono, e faço com que os erros sejam visíveis e recuperáveis em vez de silenciosos.",
        outcome:
          "Integrações que se podem auditar, reprocessar e explicar quando o negócio pergunta o que aconteceu com uma transação específica.",
      },
      bankingCore: {
        title: "Core bancário e sistemas transacionais",
        teaser: "Consistência, idempotência e rastreabilidade em ambientes regulados.",
        challenge:
          "Plataformas em que uma inconsistência não é um bug: é dinheiro real, um fechamento contábil quebrado e uma resposta ao regulador.",
        approach:
          "Trabalho a partir do conhecimento concreto de COBIS, processos batch e ciclos de fechamento. Priorizo consistência, idempotência e rastreabilidade acima da elegância arquitetural.",
        outcome:
          "Decisões técnicas que suportam volume e auditoria, tomadas por alguém que entende o impacto contábil e não só o diagrama.",
      },
      genAiAdoption: {
        title: "IA generativa enterprise",
        teaser: "RAG e agentes com governança de dados, prontos para produção.",
        challenge:
          "Organizações que querem aproveitar GenAI mas não podem expor dados sensíveis nem sustentar uma demo que nunca chega à produção.",
        approach:
          "Desenho arquiteturas RAG com limites de dados claros, avalio quando um agente agrega valor real e quando é overengineering, e mantenho o provedor de IA desacoplado atrás de uma porta.",
        outcome:
          "Capacidades de IA que se integram ao stack existente com controle de acesso e custo, em vez de adicionar mais um silo.",
      },
    },
  },

  experience: {
    eyebrow: "Trajetória",
    heading: "Experiência profissional",
    intro: "Skills, stack tecnológico, trajetória, indústrias e formação.",
    expand: "Ver experiência",
    collapse: "Ocultar experiência",
    viaLabel: "Prestando serviços por",
    companies: {
      accusys: {
        role: "Desenvolvimento, analista, design · Líder técnico · IA generativa",
        period: "Junho 2023 — Atual",
        summary:
          "Na Accusys combino backend/frontend sobre COBIS (módulo Pasivas) para banca, liderança técnica de um app fullstack COCOMO (.NET 8 + Angular + Docker) e o design de uma plataforma de conhecimento corporativo com AWS Bedrock para a área bancária.",
      },
      "banco-ciudad": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Para cada requisito: análise, design e desenvolvimento no core bancário COBIS (módulo Pasivas), com C#, MVC, .NET, Java, VB6, SQL/T-SQL, scripts SH e SQR conforme o contexto do banco.",
      },
      "banco-macro": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Implementação de mudanças em Pasivas do core COBIS: análise funcional/técnica e desenvolvimento backend/frontend adaptado ao stack do banco (C#/.NET, Java, SQL).",
      },
      "banco-patagonia": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Análise, design e desenvolvimento sobre COBIS Pasivas para Patagonia, alinhando a entrega ao stack e aos processos do banco.",
      },
      facebank: {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Desenvolvimento e integração de requisitos no core bancário COBIS (Pasivas) para Facebank, com o mesmo ciclo de análise–design–desenvolvimento.",
      },
      ypf: {
        role: "Desenvolvimento Documentum · Frontend/Backend · Analista funcional",
        period: "2003 / 2008 — Maio 2023",
        summary:
          "Cliente Inetum/IECISA. Anos de trabalho em gestão documental YPF: Documentum (Content Server, WDK, Webtop, workflows), migrações 7.0→21.2, laboratório Docker/Postgres, apps Java/C#/React/Angular/Node e sistemas Invesdoc/Invesflow em vários países.",
      },
      inetum: {
        role: "Desenvolvimento, análise, design, instalação · Consultoria Bizagi",
        period: "Janeiro 2021 — Maio 2023 (ex IECISA)",
        summary:
          "Na Inetum (ex Informática El Corte Inglés) liderei entregas Documentum/BPM para clientes enterprise, demos comerciais Bizagi e integração de soluções documentais e de processos na região.",
      },
      techint: {
        role: "Desenvolvimento evolutivo Documentum / Webtop",
        period: "Janeiro 2018 — Janeiro 2021",
        summary:
          "Cliente IECISA. Desenvolvimento evolutivo Documentum 6.7/Webtop: novas funcionalidades e correção de incidentes em Java e C#.",
      },
      "la-anonima": {
        role: "Desenvolvimento, análise e design — portal de transportes",
        period: "Setembro 2020 — Maio 2023",
        summary:
          "Cliente Inetum. Portal de transportes La Anónima: Angular 10 + Java Spring / Oracle, com Spring Tool Suite, JPA Hibernate e Java 8.",
      },
      claro: {
        role: "Analista funcional / programador — portabilidade numérica",
        period: "Março 2011 — Dezembro 2011",
        summary:
          "Cliente IECISA. Análise, design e desenvolvimento (Java / PL-SQL) sobre PORTANODE Integrator/Gateway para portabilidade numérica na Argentina e no Paraguai.",
      },
      mapfre: {
        role: "Design e programação de camada de serviços — SGA MAPFRE",
        period: "Agosto 2016 — Agosto 2017",
        summary:
          "Cliente IECISA (Colômbia). Camada REST/SOAP do projeto SGA-MAPFRE com Documentum e serviços xCP 2.2, em Java e C#.",
      },
      coto: {
        role: "Suporte, implementação e retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "Cliente IECISA. Coordenação de suporte técnico e implementação retail: Coto (~1500 usuários) junto com Tía, Eki e outros, com migração de sistemas e planos de teste.",
      },
      banbif: {
        role: "Consultoria Documentum · desenvolvimento REST / Webtop",
        period: "Fevereiro 2018 — Agosto 2018",
        summary:
          "Cliente IECISA (Peru). Consultoria de melhorias no BanBif, instalação xCP 2.3, serviços REST em C# e Webtop em Java sobre Microsoft SQL Server.",
      },
      nike: {
        role: "Analista funcional / programador — RETAIL WARE",
        period: "Janeiro 2004 — Outubro 2008",
        summary:
          "Cliente IECISA. Análise, design e desenvolvimento do sistema retail RETAIL WARE (VB6, C#, Clarion, SQL) para Nike Argentina, México e Chile, além de Puma, Dabra e Torca.",
      },
    },
  },

  skills: {
    eyebrow: "Competências",
    heading: "Competências técnicas",
    intro:
      "Nível real por domínio, sem inflar: o consolidado e o que está em desenvolvimento.",
    levelLabel: "Nível",
    legend: [
      "1 Básico",
      "2 Intermediário",
      "3 Avançado",
      "4 Especialista",
      "5 Referência",
    ],
    domains: {
      architecture: "Arquitetura",
      backend: "Backend e integração",
      data: "Dados",
      enterprise: "Enterprise e banking",
      cloud: "Cloud e DevOps",
      ai: "IA generativa",
    },
    names: {
      appArchitecture: "Arquitetura de aplicações",
      solutionDesign: "Design de soluções",
      enterpriseIntegration: "Integração enterprise",
      legacyModernization: "Modernização legacy",
      microservices: "Microsserviços",
      hexagonalDdd: "Arquitetura hexagonal e DDD",
      dotnet: "C# / .NET",
      java: "Java / Spring Boot",
      restSoap: "APIs REST e SOAP",
      batchProcessing: "Processos batch",
      nodejs: "Node.js",
      sqlServer: "SQL Server",
      sybase: "Sybase ASE",
      oracle: "Oracle",
      postgresql: "PostgreSQL",
      dataModeling: "Modelagem de dados",
      cobis: "COBIS",
      transactionalSystems: "Sistemas transacionais",
      documentum: "OpenText Documentum",
      bpmn: "BPMN / Bizagi",
      bian: "BIAN",
      git: "Git e controle de versão",
      cicd: "CI/CD",
      aws: "AWS",
      docker: "Docker",
      iac: "Infraestrutura como código",
      promptEngineering: "Prompt engineering",
      bedrock: "AWS Bedrock",
      rag: "RAG e Knowledge Bases",
      aiAgents: "AI Agents e MCP",
      vectorDb: "Bancos de dados vetoriais",
    },
  },

  stack: {
    eyebrow: "Tecnologias",
    heading: "Stack tecnológico",
    intro:
      "Tecnologias aplicadas em projetos enterprise ao longo de mais de 20 anos.",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bancos de dados",
      integration: "Integração",
      cloud: "Cloud e DevOps",
      enterprise: "Enterprise",
      ai: "IA generativa",
    },
  },

  trajectory: {
    eyebrow: "Evolução",
    heading: "Trajetória de papéis",
    intro:
      "Progressão de developer a arquiteto: a base técnica sustenta as decisões de arquitetura.",
    targetLabel: "Foco atual",
    steps: {
      developer: "Developer",
      seniorDeveloper: "Senior Developer",
      analyst: "Analista funcional e técnico",
      technicalReference: "Referência técnica",
      solutionDesign: "Design de soluções",
      technicalLead: "Technical Lead",
      softwareArchitect: "Software / Solution Architect",
      enterpriseAiArchitect: "Enterprise & AI Solutions Architect",
    },
  },

  industries: {
    eyebrow: "Indústrias",
    heading: "Experiência por indústria",
    intro:
      "Ambientes regulados e de missão crítica, com foco em banca e integração enterprise.",
    items: {
      banking: "Banca e sistemas transacionais",
      financialServices: "Serviços financeiros",
      energy: "Energia e petróleo",
      insurance: "Seguros",
      retailTelco: "Varejo e telecomunicações",
      logistics: "Logística e gestão documental",
    },
  },

  credentials: {
    eyebrow: "Formação",
    heading: "Formação e certificações",
    intro:
      "Status explícito de cada credencial: obtida, em andamento ou planejada.",
    status: {
      earned: "Obtido",
      inProgress: "Em andamento",
      planned: "Planejado",
    },
    items: {
      digitalTech: {
        name: "Licenciatura em Tecnologias Digitais",
        issuer: "Formação universitária",
      },
      dataScience: {
        name: "Licenciatura em Ciência de Dados",
        issuer: "Formação universitária — etapa final",
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
    heading: "Projetos em destaque",
    intro:
      "Repositórios públicos de arquitetura, integração e produto, com demos integradas nesta página.",
    openPreview: "Ver na página",
    closePreview: "Fechar preview",
    viewDemo: "Demo ao vivo",
    languagesLabel: "Stack",
    repoHint: "Código no GitHub (opcional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Plataforma pessoal de evolução profissional e esta landing multilíngue.",
        detail:
          "Next.js 16, TypeScript e export estático para GitHub Pages. Inclui design system, i18n tipado e seções pensadas para conversão de recruiters a papéis de arquitetura.",
      },
      catalogs: {
        title: "Criador de Catálogos",
        summary:
          "App Angular + FastAPI para montar catálogos de códigos a partir de mestres.",
        detail:
          "Frontend publicado no GitHub Pages com CI/CD. O backend FastAPI roda em local; a UI demonstra o fluxo de catálogos, versionamento por specs e releases automáticos.",
      },
      hexagonal: {
        title: "Arquitetura Hexagonal em Java",
        summary:
          "Referência de Clean Architecture / hexagonal com Spring Boot.",
        detail:
          "Organiza domínio, aplicação e infraestrutura com inversão de dependências. Serve como evidência concreta de como aplico limites explícitos além do diagrama.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Design de middleware que lê OpenAPI/Swagger de serviços e orquestra MFEs.",
        detail:
          "Monorepo com convenções para services, middleware e microfrontends Angular. Focado em contratos de integração e regras de arquitetura do dia a dia.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary: "Base de microsserviços Spring para composição de serviços.",
        detail:
          "Exploração prática de configuração, serviços e padrões de integração no ecossistema Spring, alinhada a cenários enterprise reais.",
      },
      transportAgenda: {
        title: "Agenda de Transporte",
        summary: "Sistema de agenda de transporte com backend Java e front TypeScript.",
        detail:
          "Solução end-to-end para gestão de agenda logística. Complementa o front em TypeScript com um backend Java orientado a domínio operacional.",
      },
    },
  },

  presence: {
    eyebrow: "Perfil profissional",
    heading: "Perfil LinkedIn",
    intro:
      "Resumo do perfil público: about, credenciais e recomendações.",
    expand: "Ver perfil completo",
    collapse: "Ocultar detalhe",
    locationLabel: "Localização",
    companyLabel: "Empresa atual",
    educationLabel: "Formação",
    followersLabel: "Seguidores",
    connectionsLabel: "Contatos",
    aboutLabel: "Sobre",
    about:
      "Arquiteto de software e soluções com experiência hands-on em sistemas enterprise e transacionais. .NET, Java, OpenText Documentum, Bizagi BPM, integração e modernização legacy. Hoje levo essa base à arquitetura moderna, cloud e IA generativa.",
    highlightsLabel: "Credenciais visíveis no LinkedIn",
    recommendationsLabel: "Recomendações",
    recommendations: {
      bruno:
        "Quando se trata de Documentum, Gabriel é um verdadeiro especialista. Conhece todos os detalhes técnicos e está sempre atualizado. Se há um problema, resolve com criatividade e eficácia. Responsável, apto ao cargo e sempre pronto para novos desafios.",
      karina:
        "Excelente profissional, responsável, proativo e sempre com iniciativas nas últimas tecnologias. Comprometido com os objetivos e com grande capacidade de trabalho em equipe.",
    },
    openExternally: "Abrir perfil completo no LinkedIn",
  },

  contact: {
    eyebrow: "Contato",
    heading: "Disponível para papéis de arquitetura",
    body: "Respondo com contexto concreto sobre seu stack e seu desafio técnico. Conte-me o que precisa resolver.",
    rolesLabel: "Papéis de interesse",
    roles: [
      "Software Architect",
      "Solution Architect",
      "Enterprise Application Architect",
      "Technical Lead",
      "Banking Solutions Architect",
      "AWS Solutions Architect",
      "AI Solutions Architect",
    ],
    emailCta: "Enviar e-mail",
    presenceCta: "Ver presença LinkedIn",
    portfolioCta: "Ver projetos",
  },

  footer: {
    clientsLabel: "Empresas e clientes com os quais trabalhei",
    tagline: "Software & Solution Architect",
    builtWith: "Next.js e TypeScript. Publicado no GitHub Pages.",
  },
};
