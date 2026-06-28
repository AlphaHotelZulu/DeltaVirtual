import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dlva.org/#organization",
      name: "Delta Virtual",
      alternateName: "DLVA",
      url: "https://dlva.org",
      logo: "https://dlva.org/images/delta-virtual-logo.svg",
      description:
        "A virtual airline community offering realistic flight simulation operations, an extensive fleet, and major U.S. hubs.",
    },
    {
      "@type": "WebSite",
      "@id": "https://dlva.org/#website",
      name: "Delta Virtual",
      alternateName: "DLVA",
      url: "https://dlva.org",
      publisher: {
        "@id": "https://dlva.org/#organization",
      },
    },
  ],
};

const featureCards = [
  {
    title: "Experienced Team",
    body: "Our dedicated team consists of real pilots, industry experts, and professionals, allowing us to provide the best experience possible.",
    href: "/staff",
  },
  {
    title: "Comprehensive Fleet",
    body: "Delta Virtual proudly features one of the largest fleets in the virtual airline community, with nearly every aircraft type operated by us or our partners.",
    href: "/fleet",
  },
  {
    title: "Global Connectivity",
    body: "Our network provides greater access to an expanding global network, including a wide array of domestic and international destinations.",
    href: "/hubs",
  },
];

const differentiators = [
  {
    title: "Custom Crew Center",
    body: "We use modern technology to provide a truly customized experience. Our state-of-the-art platform ensures every element feels as close to reality as possible.",
    image: "/images/home/about-1.webp",
  },
  {
    title: "Real World Operations",
    body: "We offer a range of unique features similar to those of real-world airlines, such as a seniority based bidding process and type ratings.",
    image: "/images/home/about-2.webp",
  },
  {
    title: "Learn from Real Pilots",
    body: "Our modular training program allows for us to personalize training for everyone, from enthusiasts to real world pilots.",
    image: "/images/home/about-3.webp",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <SiteHeader activePage="home" />

      <section className="home-hero" aria-label="Delta Virtual introduction" />

      <section className="home-main-section">
        <div className="home-content">
          <article className="home-intro-card">
            <Image
              alt=""
              className="home-intro-widget"
              height={921}
              priority
              src="/images/home/delta-widget.png"
              width={1012}
            />
            <div>
              <p>Welcome to Delta Virtual</p>
              <h1>Your Partner in Virtual Aviation</h1>
            </div>
          </article>

          <div className="home-feature-grid" aria-label="Delta Virtual highlights">
            {featureCards.map((card) => (
              <article className="home-feature-card" key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
                <a href={card.href}>Learn More</a>
              </article>
            ))}
          </div>

          <section className="home-sets-section" aria-labelledby="sets-heading">
            <h2 id="sets-heading">The Delta Difference</h2>

            <div className="home-set-list">
              {differentiators.map((item) => (
                <article className="home-set-card" key={item.title}>
                  <div className="home-set-image">
                    <Image
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 340px"
                      src={item.image}
                    />
                  </div>
                  <div className="home-set-copy">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
