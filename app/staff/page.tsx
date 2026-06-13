import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StaffDirectory } from "./StaffDirectory";

export const metadata: Metadata = {
  title: "Staff",
  description: "Meet the Delta Virtual leadership and staff teams.",
};

export default function StaffPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePage="staff" />

      <section className="staff-hero" aria-label="Delta Virtual staff" />

      <section className="staff-section">
        <div className="staff-content">
          <StaffDirectory />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
