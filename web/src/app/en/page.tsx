"use client";

import { useEffect } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Old /en bookmark → same page with English. */
export default function EnglishRedirectPage() {
  useEffect(() => {
    window.location.replace(`${base}/?lang=en`);
  }, []);

  return (
    <p className="p-8 text-sm text-fg-muted">
      Redirecting to <a href={`${base}/?lang=en`}>{`${base}/?lang=en`}</a>…
    </p>
  );
}
