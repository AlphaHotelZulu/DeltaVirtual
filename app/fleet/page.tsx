import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../site";
import { FleetDirectory } from "./FleetDirectory";

export const metadata = createPageMetadata({
  title: "Virtual Airline Fleet",
  description:
    "Explore the Delta Virtual (DLVA) fleet of Airbus, Boeing, Bombardier, and Embraer aircraft available for virtual airline operations.",
  path: "/fleet",
});

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
