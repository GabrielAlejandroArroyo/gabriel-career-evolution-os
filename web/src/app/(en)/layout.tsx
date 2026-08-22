import type { ReactNode } from "react";
import { Document } from "@/components/layout/Document";
import { buildMetadata } from "@/app/metadata";

export const metadata = buildMetadata("en");

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
