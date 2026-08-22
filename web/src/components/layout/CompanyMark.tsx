import type { ReactNode } from "react";
import type { CompanyLogo } from "@/data/companies";

type MarkProps = { accent: string };

function AccusysMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <path
        d="M8 22 L16 8 L24 22 M11.5 16.5h9"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BancoCiudadMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <circle cx="16" cy="16" r="15" fill={accent} />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="#fff"
        fontSize="11"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        BC
      </text>
    </svg>
  );
}

function BancoMacroMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="6" fill={accent} />
      <path
        d="M7 23V10l5.5 9L18 10v13M22 23V10"
        fill="none"
        stroke="#fff"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BancoPatagoniaMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <path d="M6 22 L16 8 L26 22 Z" fill="#fff" opacity="0.95" />
      <path d="M12 22 L16 14 L20 22 Z" fill={accent} />
    </svg>
  );
}

function FacebankMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="10" fill={accent} />
      <circle cx="16" cy="13" r="5" fill="#fff" />
      <path d="M8 25c1.5-4.5 5-7 8-7s6.5 2.5 8 7" fill="#fff" />
    </svg>
  );
}

function YpfMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <circle cx="16" cy="16" r="15" fill={accent} />
      <circle cx="16" cy="16" r="6" fill="#F7C948" />
      <circle cx="16" cy="16" r="2.5" fill={accent} />
    </svg>
  );
}

function InetumMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <circle cx="10" cy="16" r="3" fill="#fff" />
      <circle cx="16" cy="16" r="3" fill="#fff" opacity="0.75" />
      <circle cx="22" cy="16" r="3" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function TechintMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="4" fill={accent} />
      <path
        d="M8 10h16M16 10v13"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaAnonimaMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <path
        d="M9 11h3l1.2 10h9.5l2-7H13"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="24" r="1.6" fill="#fff" />
      <circle cx="22" cy="24" r="1.6" fill="#fff" />
    </svg>
  );
}

function ClaroMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <circle cx="16" cy="16" r="15" fill={accent} />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

function MapfreMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="4" fill={accent} />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        M
      </text>
    </svg>
  );
}

function CotoMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        C
      </text>
    </svg>
  );
}

function BanbifMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="6" fill={accent} />
      <path
        d="M6 20 L16 8 L26 20 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <rect x="12" y="18" width="8" height="6" fill="#fff" />
    </svg>
  );
}

function NikeMark({ accent }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <rect width="32" height="32" rx="8" fill={accent} />
      <path
        d="M6 18c6 1 11-1 16-6-4 7-10 10-16 8z"
        fill="#fff"
      />
    </svg>
  );
}

const marks: Record<string, (props: MarkProps) => ReactNode> = {
  accusys: AccusysMark,
  "banco-ciudad": BancoCiudadMark,
  "banco-macro": BancoMacroMark,
  "banco-patagonia": BancoPatagoniaMark,
  facebank: FacebankMark,
  ypf: YpfMark,
  inetum: InetumMark,
  techint: TechintMark,
  "la-anonima": LaAnonimaMark,
  claro: ClaroMark,
  mapfre: MapfreMark,
  coto: CotoMark,
  banbif: BanbifMark,
  nike: NikeMark,
};

export function CompanyMark({ company }: { company: CompanyLogo }) {
  const Mark = marks[company.id] ?? AccusysMark;

  return (
    <span className="inline-flex size-8 shrink-0 overflow-hidden rounded-lg shadow-sm md:size-9">
      <Mark accent={company.accent} />
    </span>
  );
}
