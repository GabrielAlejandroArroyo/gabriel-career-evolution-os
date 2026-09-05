import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { buildMetadata } from "@/app/metadata";

export const metadata = buildMetadata("pt");

export default function PortugueseRootLayout({ children }: { children: ReactNode }) {
  return <Document locale="pt">{children}</Document>;
}
