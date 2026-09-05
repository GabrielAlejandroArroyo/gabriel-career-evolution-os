import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { buildMetadata } from "@/app/metadata";

export const metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Document>{children}</Document>;
}
