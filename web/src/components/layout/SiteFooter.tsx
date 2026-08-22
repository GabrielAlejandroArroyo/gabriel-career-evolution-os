import type { Dictionary } from "@/i18n";
import { identity } from "@/data/profile";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          {identity.fullName} · {dict.footer.tagline}
        </p>
        <p className="font-mono text-xs">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
