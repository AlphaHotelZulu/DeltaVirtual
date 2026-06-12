import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { HubsExplorer } from "./HubsExplorer";

export const metadata: Metadata = {
  title: "Hubs",
  description: "Explore Delta Virtual hub cities across the United States.",
};

export default function HubsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePage="hubs" />

      <section className="hubs-hero" aria-label="Delta Virtual hubs" />

      <section className="hubs-section">
        <div className="hubs-content">
          <h1>Explore our Hubs</h1>
          <HubsExplorer />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
