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
      "Resolvo sistemas críticos de ponta a ponta: mapeio o domínio, desenho a mudança, levo à produção e modernizo sem desligar o negócio. Banca (COBIS), ECM (Documentum), integração enterprise e IA generativa com governança.",
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
    headlineLead: "Como eu resolvo:",
    headlineEmphasis: "entender o domínio, delimitar o risco e entregar em produção.",
    body: "Não parto do diagrama: parto do sistema que já gera receita. Em banca, energia, seguros e retail reconstruí o domínio, isolei o núcleo e desenhei convivência entre legacy e o novo. A mesma lógica aplico hoje a cloud e IA generativa com limites de dados explícitos.",
    formula: ["Enterprise", "Arquitetura", "Banking", "Cloud", "IA generativa"],
    result: "Diferenciação",
  },

  capabilities: {
    eyebrow: "Especialização",
    heading: "Áreas de expertise",
    intro:
      "Quatro frentes com o mesmo método: problema real de cliente, decisão técnica e resultado operável — cada um ancorado em trajetória concreta.",
    expand: "Ver detalhe",
    collapse: "Ocultar",
    challengeLabel: "O problema",
    approachLabel: "Como eu resolvi",
    outcomeLabel: "O resultado",
    items: {
      legacyModernization: {
        title: "Modernização de sistemas legacy",
        teaser: "Migração por etapas sem interromper a operação.",
        challenge:
          "Na YPF sustentei Documentum por anos (Content Server, WDK, Webtop, workflows) e migrações 7.0→21.2: um ECM crítico sem documentação viva em que um big bang não era opção. No retail (Nike, Coto) o legacy já faturava com milhares de usuários.",
        approach:
          "Reconstruo o domínio real antes de tocar código. Isolo o núcleo, defino limites explícitos e planejo convivência entre o antigo e o novo — incluindo laboratório Docker/Postgres quando o salto de versão precisa ser validado.",
        outcome:
          "Um caminho de modernização que o negócio pode aprovar: o sistema continua operando enquanto evolui, sem depender de desligar o que sustenta a operação hoje.",
      },
      enterpriseIntegration: {
        title: "Integração enterprise",
        teaser: "Contratos explícitos, erros visíveis e rastreabilidade auditável.",
        challenge:
          "Na MAPFRE (SGA) e no BanBif era preciso conectar Documentum/xCP com camadas REST/SOAP. Na Claro, o PORTANODE tinha de coordenar portabilidade entre países. Na La Anónima, portal Angular + Spring/Oracle com fluxos operacionais diários.",
        approach:
          "Desenho contratos explícitos REST/SOAP, separo o síncrono do batch/assíncrono e faço os erros visíveis e recuperáveis. Na Inetum somei BPM (Bizagi) quando o processo de negócio era o contrato real.",
        outcome:
          "Integrações que se podem auditar, reprocessar e explicar quando o negócio pergunta o que aconteceu com uma transação ou expediente.",
      },
      bankingCore: {
        title: "Core bancário e sistemas transacionais",
        teaser: "Consistência, idempotência e rastreabilidade em ambientes regulados.",
        challenge:
          "Na Accusys e bancos (Ciudad, Macro, Patagonia, Facebank) cada requisito toca COBIS Pasivas: inconsistência não é bug — é dinheiro, fechamento e regulação.",
        approach:
          "Ciclo análise → design → desenvolvimento adaptado ao stack de cada banco (C#/.NET, Java, VB6, SQL/T-SQL, SH, SQR). Priorizo consistência, idempotência e rastreabilidade acima da elegância do diagrama.",
        outcome:
          "Mudanças no core que o banco pode operar e auditar, feitas por alguém que entende o impacto contábil — e não só o serviço HTTP.",
      },
      genAiAdoption: {
        title: "IA generativa enterprise",
        teaser: "RAG e agentes com governança de dados, prontos para produção.",
        challenge:
          "Na Accusys a área bancária precisa de conhecimento corporativo assistido por IA sem expor dados sensíveis nem ficar presa a uma demo que nunca chega à produção.",
        approach:
          "Desenho plataforma de conhecimento com AWS Bedrock, limites de dados claros, avaliação de quando um agente agrega valor real, e provedor desacoplado atrás de uma porta — a mesma disciplina da integração enterprise.",
        outcome:
          "Capacidade de GenAI integrável ao stack existente com controle de acesso e custo, em vez de somar outro silo experimental.",
      },
    },
  },

  experience: {
    eyebrow: "Trajetória",
    heading: "Experiência profissional",
    intro:
      "Como resolvi problemas em cada contexto: situação, decisão técnica e resultado operável.",
    expand: "Ver experiência",
    collapse: "Ocultar experiência",
    viaLabel: "Prestando serviços por",
    companies: {
      accusys: {
        role: "Desenvolvimento, analista, design · Líder técnico · IA generativa",
        period: "Junho 2023 — Atual",
        summary:
          "Na Accusys combino três frentes: entrega no core bancário COBIS Pasivas, liderança técnica de um app fullstack e design de conhecimento corporativo com GenAI.",
        solved: [
          "A banca tinha de continuar e o stack modernizar: liderei o COCOMO (.NET 8 + Angular + Docker) com critérios de arquitetura do dia a dia.",
          "A área bancária precisava de conhecimento assistido sem vazar dados sensíveis: desenhei a plataforma sobre AWS Bedrock com limites de acesso explícitos.",
          "Os bancos clientes exigiam ciclo completo por requisito: unifiquei análise, design e desenvolvimento para o core não receber “código solto”.",
        ],
      },
      "banco-ciudad": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Entrega end-to-end sobre COBIS Pasivas no stack heterogêneo do banco.",
        solved: [
          "Cada pedido chegava sem um desenho único: montei o ciclo análise → design → desenvolvimento antes de tocar Pasivas.",
          "O stack mistura C#, MVC, .NET, Java, VB6, SQL/T-SQL, SH e SQR: adapto a solução ao contexto real do banco, não a um stack ideal.",
          "O risco era quebrar consistência no core: priorizo rastreabilidade e mudanças delimitadas em vez de reescritas amplas.",
        ],
      },
      "banco-macro": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Mudanças funcionais e técnicas em Pasivas alinhadas ao stack do Macro.",
        solved: [
          "Pedidos de negócio tinham de virar mudança segura no core: separo análise funcional do design técnico antes de codar.",
          "Backend e frontend convivem em C#/.NET, Java e SQL: entrego fatias verticais que o banco pode testar no seu ambiente.",
          "Evito “patches locais”: deixo a mudança auditável para operações e fechamento.",
        ],
      },
      "banco-patagonia": {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Entregas em COBIS Pasivas alinhadas a processos e stack do Patagonia.",
        solved: [
          "Os processos do banco não admitem entregável genérico: adapto design e desenvolvimento à forma de operar Pasivas.",
          "Alinho a mudança ao ciclo análise–design–desenvolvimento para reduzir ida e volta com o negócio.",
          "Mantenho o foco em Pasivas sem arrastar dívida desnecessária a módulos vizinhos.",
        ],
      },
      facebank: {
        role: "Desenvolvimento, análise e design — COBIS Pasivas",
        period: "Junho 2023 — Atual",
        summary:
          "Cliente Accusys. Integração de requisitos no core COBIS (Pasivas) para o Facebank.",
        solved: [
          "Os requisitos tinham de entrar no core sem quebrar integrações existentes: desenho primeiro o encaixe em Pasivas.",
          "Aplico o mesmo ciclo análise–design–desenvolvimento para o Facebank receber mudanças prontas para a operação.",
          "Priorizo integração limpa ao módulo Pasivas em vez de soluções laterais difíceis de operar.",
        ],
      },
      ypf: {
        role: "Desenvolvimento Documentum · Frontend/Backend · Analista funcional",
        period: "2003 / 2008 — Maio 2023",
        summary:
          "Cliente Inetum/IECISA. Gestão documental YPF em escala: Documentum, migrações maiores e apps em torno do ECM.",
        solved: [
          "Migrar 7.0→21.2 sem desligar o ECM: validei o salto em laboratório Docker/Postgres e planejei convivência por etapas.",
          "Content Server, WDK, Webtop e workflows sem documentação viva: reconstruí o domínio e sustentei evolução + incidentes.",
          "O negócio precisava de apps sobre o ECM: entreguei Java/C#/React/Angular/Node e Invesdoc/Invesflow em vários países.",
        ],
      },
      inetum: {
        role: "Desenvolvimento, análise, design, instalação · Consultoria Bizagi",
        period: "Janeiro 2021 — Maio 2023 (ex IECISA)",
        summary:
          "Na Inetum (ex IECISA) liderei entregas Documentum/BPM e demos Bizagi para clientes enterprise na região.",
        solved: [
          "Era preciso vender e entregar processo + documento: uni consultoria Bizagi com implementação Documentum real.",
          "Coordenei instalação, análise e desenvolvimento para a demo comercial não se desconectar da solução produtiva.",
          "Padronizei entregas regionais sem perder o contexto de cada cliente.",
        ],
      },
      techint: {
        role: "Desenvolvimento evolutivo Documentum / Webtop",
        period: "Janeiro 2018 — Janeiro 2021",
        summary:
          "Cliente IECISA. Evolutivo e incidentes sobre Documentum 6.7 / Webtop em Java e C#.",
        solved: [
          "O ECM tinha de evoluir sem projetos greenfield: entreguei features e incidentes sobre Documentum 6.7/Webtop.",
          "Separei correções urgentes de melhorias evolutivas para não misturar risco no mesmo release.",
          "Trabalhei em Java e C# conforme a camada afetada, mantendo estabilidade operacional.",
        ],
      },
      "la-anonima": {
        role: "Desenvolvimento, análise e design — portal de transportes",
        period: "Setembro 2020 — Maio 2023",
        summary:
          "Cliente Inetum. Portal de transportes Angular 10 + Java Spring / Oracle.",
        solved: [
          "A operação logística precisava de um portal usável no dia a dia: desenhei o fluxo end-to-end Angular + Spring/Oracle.",
          "Modelei persistência com JPA/Hibernate sobre Oracle alinhada ao domínio de transporte.",
          "Fechei o ciclo análise–design–desenvolvimento para o portal não ficar como UI desconectada do backend.",
        ],
      },
      claro: {
        role: "Analista funcional / programador — portabilidade numérica",
        period: "Março 2011 — Dezembro 2011",
        summary:
          "Cliente IECISA. Portabilidade numérica Argentina/Paraguai sobre PORTANODE Integrator/Gateway.",
        solved: [
          "Era preciso coordenar portabilidade entre países: analisei, desenhei e desenvolvi sobre Integrator/Gateway (Java / PL-SQL).",
          "Tratei a integração como contrato explícito entre nós, não como scripts soltos.",
          "Entreguei mudanças prontas para o fluxo regulado de portabilidade numérica.",
        ],
      },
      mapfre: {
        role: "Design e programação de camada de serviços — SGA MAPFRE",
        period: "Agosto 2016 — Agosto 2017",
        summary:
          "Cliente IECISA (Colômbia). Camada REST/SOAP SGA-MAPFRE com Documentum e xCP 2.2.",
        solved: [
          "O SGA precisava expor Documentum/xCP sem acoplar clientes ao ECM: desenhei a camada REST/SOAP em Java e C#.",
          "Separei contratos de serviço da implementação Documentum para cada lado poder evoluir.",
          "Deixei a integração auditável para um ambiente de seguros regulado.",
        ],
      },
      coto: {
        role: "Suporte, implementação e retail (STORE FLOW / RETAIL WARE)",
        period: "1998 — 2003",
        summary:
          "Cliente IECISA. Suporte e implementação retail em escala (~1500 usuários no Coto) mais outras redes.",
        solved: [
          "Era preciso sustentar operação retail massiva: coordenei suporte e implementação STORE FLOW / RETAIL WARE.",
          "As migrações exigiam disciplina: montei planos de teste e cortes controlados com Tía, Eki e outros.",
          "Aprendi cedo que o legacy que fatura se moderniza por etapas, não por big bang.",
        ],
      },
      banbif: {
        role: "Consultoria Documentum · desenvolvimento REST / Webtop",
        period: "Fevereiro 2018 — Agosto 2018",
        summary:
          "Cliente IECISA (Peru). Melhorias BanBif: xCP 2.3, REST em C# e Webtop em Java sobre SQL Server.",
        solved: [
          "O banco precisava de melhorias ECM concretas: instalei xCP 2.3 e fechei o gap com serviços REST + Webtop.",
          "Expus capacidades Documentum via REST em C# sem forçar os consumidores a conhecer o modelo interno.",
          "Sustentei Webtop Java sobre SQL Server alinhado à operação do BanBif.",
        ],
      },
      nike: {
        role: "Analista funcional / programador — RETAIL WARE",
        period: "Janeiro 2004 — Outubro 2008",
        summary:
          "Cliente IECISA. RETAIL WARE multi-país (Nike AR/MX/CL e outras marcas) em VB6, C#, Clarion e SQL.",
        solved: [
          "O retail multi-país não admitia uma só variante: analisei, desenhei e desenvolvi RETAIL WARE para Nike AR/MX/CL.",
          "Estendi o mesmo método a Puma, Dabra e Torca sem perder o domínio compartilhado.",
          "Convenci o negócio com entregas evolutivas sobre stack legacy — não com reescrita total.",
        ],
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
      "Labs públicos que mostram como resolvo arquitetura e integração. Não são casos confidenciais de cliente: são evidência de método reproduzível.",
    openPreview: "Ver na página",
    closePreview: "Fechar preview",
    viewDemo: "Demo ao vivo",
    languagesLabel: "Stack",
    repoHint: "Código no GitHub (opcional)",
    items: {
      careerOs: {
        title: "Gabriel Career Evolution OS",
        summary:
          "Problema: um CV estático não mostra como você pensa. Solução: landing tipada, multilíngue e orientada a recruiters de arquitetura.",
        detail:
          "Escolhi export estático (Next.js 16 + TypeScript + GitHub Pages), i18n tipado e preferências de tema/fonte no cliente. O resultado é um artefato de produto + arquitetura front sem depender de backend.",
      },
      catalogs: {
        title: "Criador de Catálogos",
        summary:
          "Problema: montar catálogos de códigos a partir de mestres é manual e frágil. Solução: Angular + FastAPI com fluxo versionado.",
        detail:
          "Separei a UI publicada (GitHub Pages + CI/CD) do backend local FastAPI. O lab demonstra contratos claros entre front e API, versionamento por specs e releases automáticos — o mesmo critério das integrações enterprise.",
      },
      hexagonal: {
        title: "Arquitetura Hexagonal em Java",
        summary:
          "Problema: “Clean Architecture” só em slides. Solução: referência Spring Boot com limites domínio/aplicação/infra.",
        detail:
          "Organizei portas e adaptadores com inversão de dependências. Evidência concreta de como isolo o núcleo — o mesmo reflexo ao modernizar legacy ou desacoplar um provedor de IA.",
      },
      middleware: {
        title: "Middleware Designer",
        summary:
          "Problema: orquestrar serviços e MFEs sem contratos. Solução: middleware que lê OpenAPI/Swagger e impõe convenções.",
        detail:
          "Monorepo com regras para services, middleware e microfrontends Angular. O lab mostra como desenho integração a partir do contrato, não de acoplamentos implícitos.",
      },
      springMicroservices: {
        title: "Spring Microservices",
        summary:
          "Problema: compor serviços sem padrão de configuração e integração. Solução: base Spring alinhada a cenários enterprise.",
        detail:
          "Explorei configuração, composição e padrões de integração no Spring. Um sandbox para praticar o que em banca e ECM custa caro se improvisado em produção.",
      },
      transportAgenda: {
        title: "Agenda de Transporte",
        summary:
          "Problema: agenda logística sem domínio claro entre UI e backend. Solução: Java + TypeScript end-to-end orientado à operação.",
        detail:
          "Complementa o portal de transportes real (La Anónima) com um lab que separa domínio operacional do front. Evidência de como modelo um fluxo logístico completo sem misturar camadas.",
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
      "Arquiteto de software e soluções que resolve sistemas críticos de ponta a ponta: análise, design, produção e modernização. .NET, Java, COBIS, OpenText Documentum, Bizagi, integração enterprise e IA generativa com governança. Do retail e da energia à banca regulada.",
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
