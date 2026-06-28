import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../site";
import { HubsExplorer } from "./HubsExplorer";

export const metadata = createPageMetadata({
  title: "Virtual Airline Hubs",
  description:
    "Explore Delta Virtual (DLVA) hub cities across the United States through an interactive virtual airline network map.",
  path: "/hubs",
});

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
