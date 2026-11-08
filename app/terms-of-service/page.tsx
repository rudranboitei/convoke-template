// app/terms-of-service/page.tsx
import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { termsOfService } from "@/lib/policies";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: "The terms for using this site.",
};

export default function Page() {
  return <PolicyPage policy={termsOfService} />;
}
