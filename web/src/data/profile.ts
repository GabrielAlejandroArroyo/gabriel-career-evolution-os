/**
 * Language-neutral profile data.
 *
 * Only structural facts live here: levels, ids, URLs and proper nouns that
 * read identically in Spanish and English. Every translatable string lives in
 * `src/i18n`.
 *
 * TODO(gabriel): reemplazar los valores de `contact` por los reales antes de
 * publicar. Son los unicos placeholders del proyecto.
 */

export const contact = {
  email: "gabriel.arroyo@example.com",
  linkedin: "https://www.linkedin.com/in/gabriel-alejandro-arroyo",
  github: "https://github.com/GabrielAlejandroArroyo",
} as const;

export const identity = {
  fullName: "Gabriel Alejandro Arroyo",
  shortName: "Gabriel Arroyo",
  siteUrl: "https://gabrielalejandroarroyo.github.io/gabriel-career-evolution-os",
} as const;

export const stats = {
  yearsExperience: 20,
  industries: 10,
} as const;

/** Skill proficiency, aligned with docs/CAREER_MODEL.md (0 unknown to 5 reference). */
export const MAX_LEVEL = 5;

export type SkillDomainId =
  | "architecture"
  | "backend"
  | "data"
  | "enterprise"
  | "cloud"
  | "ai";

export type SkillId =
  | "appArchitecture"
  | "solutionDesign"
  | "enterpriseIntegration"
  | "legacyModernization"
  | "microservices"
  | "hexagonalDdd"
  | "dotnet"
  | "java"
  | "restSoap"
  | "batchProcessing"
  | "nodejs"
  | "sqlServer"
  | "sybase"
  | "oracle"
  | "postgresql"
  | "dataModeling"
  | "cobis"
  | "transactionalSystems"
  | "documentum"
  | "bpmn"
  | "bian"
  | "git"
  | "cicd"
  | "aws"
  | "docker"
  | "iac"
  | "promptEngineering"
  | "bedrock"
  | "rag"
  | "aiAgents"
  | "vectorDb";

export type SkillDomain = {
  id: SkillDomainId;
  skills: { id: SkillId; level: number }[];
};

export const skillMatrix: SkillDomain[] = [
  {
    id: "architecture",
    skills: [
      { id: "appArchitecture", level: 5 },
      { id: "solutionDesign", level: 5 },
      { id: "enterpriseIntegration", level: 5 },
      { id: "legacyModernization", level: 5 },
      { id: "microservices", level: 4 },
      { id: "hexagonalDdd", level: 4 },
    ],
  },
  {
    id: "backend",
    skills: [
      { id: "dotnet", level: 5 },
      { id: "restSoap", level: 5 },
      { id: "batchProcessing", level: 5 },
      { id: "java", level: 4 },
      { id: "nodejs", level: 3 },
    ],
  },
  {
    id: "data",
    skills: [
      { id: "sqlServer", level: 5 },
      { id: "sybase", level: 5 },
      { id: "oracle", level: 4 },
      { id: "postgresql", level: 4 },
      { id: "dataModeling", level: 4 },
    ],
  },
  {
    id: "enterprise",
    skills: [
      { id: "cobis", level: 5 },
      { id: "transactionalSystems", level: 5 },
      { id: "documentum", level: 5 },
      { id: "bpmn", level: 4 },
      { id: "bian", level: 2 },
    ],
  },
  {
    id: "cloud",
    skills: [
      { id: "git", level: 5 },
      { id: "cicd", level: 4 },
      { id: "aws", level: 3 },
      { id: "docker", level: 3 },
      { id: "iac", level: 2 },
    ],
  },
  {
    id: "ai",
    skills: [
      { id: "promptEngineering", level: 4 },
      { id: "bedrock", level: 3 },
      { id: "rag", level: 3 },
      { id: "aiAgents", level: 3 },
      { id: "vectorDb", level: 2 },
    ],
  },
];

export type StackGroupId =
  | "backend"
  | "frontend"
  | "databases"
  | "integration"
  | "cloud"
  | "enterprise"
  | "ai";

/** Tool names render identically in both languages, so they stay here. */
export const techStack: { id: StackGroupId; items: string[] }[] = [
  {
    id: "backend",
    items: ["C#", ".NET 8", "ASP.NET Core", "Java", "Spring Boot", "Node.js"],
  },
  { id: "frontend", items: ["Angular", "React", "TypeScript", "JavaScript"] },
  {
    id: "databases",
    items: ["Sybase ASE", "SQL Server", "Oracle", "PostgreSQL", "MySQL", "MariaDB"],
  },
  { id: "integration", items: ["REST", "SOAP", "APIs", "Microservices", "Batch"] },
  {
    id: "cloud",
    items: ["AWS", "Docker", "Git", "GitHub", "Azure DevOps", "CI/CD"],
  },
  {
    id: "enterprise",
    items: ["COBIS", "OpenText Documentum", "DFC", "xCP", "BPMN", "Bizagi"],
  },
  {
    id: "ai",
    items: ["AWS Bedrock", "RAG", "Knowledge Bases", "Embeddings", "AI Agents", "MCP"],
  },
];

export type CredentialStatus = "earned" | "inProgress" | "planned";

export type CredentialId =
  | "digitalTech"
  | "dataScience"
  | "bizagi"
  | "documentum"
  | "togafFoundation"
  | "awsSaa"
  | "bianFoundation"
  | "togafPractitioner"
  | "awsAiPractitioner";

/**
 * Per docs/ADR/004-evidence-first-claims.md the UI must never blur the line
 * between an earned credential and a planned one, so status is explicit.
 */
export const credentials: { id: CredentialId; status: CredentialStatus }[] = [
  { id: "digitalTech", status: "earned" },
  { id: "bizagi", status: "earned" },
  { id: "documentum", status: "earned" },
  { id: "dataScience", status: "inProgress" },
  { id: "togafFoundation", status: "planned" },
  { id: "awsSaa", status: "planned" },
  { id: "bianFoundation", status: "planned" },
  { id: "togafPractitioner", status: "planned" },
  { id: "awsAiPractitioner", status: "planned" },
];

export type CapabilityId =
  | "legacyModernization"
  | "enterpriseIntegration"
  | "bankingCore"
  | "genAiAdoption";

export const capabilities: CapabilityId[] = [
  "legacyModernization",
  "enterpriseIntegration",
  "bankingCore",
  "genAiAdoption",
];

export type IndustryId =
  | "banking"
  | "financialServices"
  | "energy"
  | "insurance"
  | "retailTelco"
  | "logistics";

export const industries: IndustryId[] = [
  "banking",
  "financialServices",
  "energy",
  "insurance",
  "retailTelco",
  "logistics",
];

export type TrajectoryStepId =
  | "developer"
  | "seniorDeveloper"
  | "analyst"
  | "technicalReference"
  | "solutionDesign"
  | "technicalLead"
  | "softwareArchitect"
  | "enterpriseAiArchitect";

export const trajectory: { id: TrajectoryStepId; isTarget: boolean }[] = [
  { id: "developer", isTarget: false },
  { id: "seniorDeveloper", isTarget: false },
  { id: "analyst", isTarget: false },
  { id: "technicalReference", isTarget: false },
  { id: "solutionDesign", isTarget: false },
  { id: "technicalLead", isTarget: false },
  { id: "softwareArchitect", isTarget: true },
  { id: "enterpriseAiArchitect", isTarget: true },
];
