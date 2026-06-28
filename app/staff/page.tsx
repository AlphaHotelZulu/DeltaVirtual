import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../site";
import { StaffDirectory } from "./StaffDirectory";

export const metadata = createPageMetadata({
  title: "Staff & Leadership",
  description:
    "Meet the leadership and staff behind Delta Virtual (DLVA), including its executive team and hub chief pilots.",
  path: "/staff",
});

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
