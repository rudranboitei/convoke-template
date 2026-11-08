// app/code-of-conduct/page.tsx
import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { codeOfConduct } from "@/lib/policies";

export const metadata: Metadata = {
  title: codeOfConduct.title,
  description: "Our community standards for events, spaces, and conversations.",
};

export default function Page() {
  return <PolicyPage policy={codeOfConduct} />;
}
