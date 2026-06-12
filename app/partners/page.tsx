import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Partners | Delta Virtual",
  description: "Visit Delta Virtual's virtual aviation partners.",
};

export default function PartnersPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePage="partners" />

      <section className="partners-hero" aria-label="Delta Virtual partners" />

      <section className="partners-section">
        <div className="partners-content">
          <div className="partner-feature">
            <div className="partner-feature-copy">
              <h1>VATSIM</h1>
              <p>
                VATSIM (short for the Virtual Air Traffic Simulation Network) is
                a completely free online platform which allows virtual pilots,
                wherever they are in the world, to connect their flight
                simulators into one shared virtual world. VATSIM also simulates
                air traffic control in this virtual world, creating the ultimate
                as-real-as-it-gets experience for you, the virtual aviation
                enthusiast.
              </p>
            </div>

            <div className="partner-feature-logo">
              <Image
                alt="VATSIM"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 430px"
                src="/images/partners/vatsim-logo.png"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
