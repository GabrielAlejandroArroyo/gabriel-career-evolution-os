"use client";

import { useEffect } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Old /pt bookmark → same page with Portuguese. */
export default function PortugueseRedirectPage() {
  useEffect(() => {
    window.location.replace(`${base}/?lang=pt`);
  }, []);

  return (
    <p className="p-8 text-sm text-fg-muted">
      Redirecting to <a href={`${base}/?lang=pt`}>{`${base}/?lang=pt`}</a>…
    </p>
  );
}
