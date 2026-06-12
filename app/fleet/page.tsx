import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { FleetDirectory } from "./FleetDirectory";

export const metadata: Metadata = {
  title: "Fleet | Delta Virtual",
  description: "Explore Delta Virtual's Airbus, Boeing, Bombardier, and Embraer fleet.",
};

export default function FleetPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePage="fleet" />

      <section className="fleet-hero" aria-label="Delta Virtual fleet" />

      <section className="fleet-section">
        <div className="fleet-content">
          <h1>Explore our Fleet</h1>
          <FleetDirectory />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
