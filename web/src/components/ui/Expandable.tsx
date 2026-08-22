"use client";

import { useId, type ReactNode } from "react";

type ExpandableProps = {
  title: ReactNode;
  summary?: ReactNode;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
  expandLabel: string;
  collapseLabel: string;
  className?: string;
};

/**
 * Accessible disclosure: native button semantics, aria-expanded, and a
 * controlled open state so parents can enforce accordion behaviour.
 */
export function Expandable({
  title,
  summary,
  children,
  open,
  onToggle,
  expandLabel,
  collapseLabel,
  className = "",
}: ExpandableProps) {
  const panelId = useId();

  return (
    <div
      className={`rounded-2xl border border-border bg-bg-elevated transition ${
        open ? "border-accent" : "hover:border-border-strong"
      } ${className}`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left md:px-7"
      >
        <span className="min-w-0 flex-1">
          <span className="block font-display text-lg font-semibold text-balance md:text-xl">
            {title}
          </span>
          {summary && !open ? (
            <span className="mt-2 block text-sm leading-relaxed text-fg-muted text-pretty">
              {summary}
            </span>
          ) : null}
        </span>
        <span className="shrink-0 pt-1 text-sm font-semibold text-accent">
          {open ? collapseLabel : expandLabel}
        </span>
      </button>

      {open ? (
        <div id={panelId} className="border-t border-border px-6 pb-6 pt-5 md:px-7">
          {children}
        </div>
      ) : null}
    </div>
  );
}
