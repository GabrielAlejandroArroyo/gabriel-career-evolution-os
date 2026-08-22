import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { buildMetadata } from "@/app/metadata";

export const metadata = buildMetadata("es");

export default function SpanishRootLayout({ children }: { children: ReactNode }) {
  return <Document locale="es">{children}</Document>;
}
