import Image from "next/image";

const updates = [
  {
    date: "JUNE 1, 2026",
    title: "Delta Virtual Launches New Website",
    image: "/images/news-website-launch.png",
    summary:
      "Delta Virtual has launched a new website that reflects its dedication to providing users with an experience of immersive realism. This new platform aims to set a new standard in flight simulation...",
  },
  {
    date: "MARCH 1, 2026",
    title: "Delta Virtual Celebrates First Anniversary",
    image: "/images/news-anniversary.jpg",
    summary:
      "Delta Virtual is excited to commemorate its first anniversary, marking a year of innovation and achievement. Throughout the past year, Delta Virtual has been dedicated to providing exceptional virtual experiences...",
  },
  {
    date: "JANUARY 1, 2026",
    title: "A Message From Our CEO",
    image: "/images/news-ceo-message.webp",
    summary:
      "Read a message from our CEO as we celebrate the New Year and pay tribute to the Centennial Anniversary of Delta Air Lines. This milestone marks a century of dedication to excellence...",
  },
];

const navigation = ["Home", "Staff", "Fleet", "Hubs", "Partners"];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#" aria-label="Delta Virtual home">
          <Image
            src="/images/delta-virtual-logo.svg"
            alt="Delta Virtual"
            width={202}
            height={51}
            priority
          />
        </a>

        <nav className="nav-links" aria-label="Main menu">
          {navigation.map((item) => (
            <a
              className={item === "Home" ? "active" : undefined}
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="account-actions">
          <a className="sign-up" href="#">
            Sign Up
          </a>
          <a className="button button-small" href="#">
            Log In
          </a>
        </div>
      </header>

      <section className="hero" aria-label="Delta Virtual introduction">
        <div className="hero-content">
          <h1>Your Partner in Virtual Aviation</h1>
          <p>
            Delta Virtual is the leading virtual airline, providing an immersive
            and authentic experience to aviators, aspiring pilots, and
            enthusiasts.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="content-grid">
          <div className="photo-panel about-photo" aria-hidden="true" />
          <article className="about-copy">
            <h2>About Us</h2>
            <p>
              Founded in 2022, Delta Virtual is a non-profit, 501c3
              organization dedicated to replicating real-world airline
              operations and fostering a deeper understanding of the aviation
              industry. Our mission is to educate and promote the many
              opportunities in aviation, inspiring aspiring pilots and
              enthusiasts to explore and pursue their passion for aviation. We
              aim to provide a realistic, immersive experience through
              relentless innovation, creating a platform that brings virtual
              aviation to life.
            </p>
            <a className="button" href="#">
              Join Now
            </a>
          </article>
        </div>
      </section>

      <section className="updates-section">
        <div className="section-heading">
          <div>
            <h2>Latest Updates</h2>
            <p>
              Keep up to date with the latest news, insights, and developments
              from Delta Virtual and our mission to provide an immersive and
              realistic virtual experience to everyone.
            </p>
          </div>
          <a className="button" href="#">
            <span className="label-full">View All Articles</span>
            <span className="label-short">View All</span>
          </a>
        </div>

        <div className="updates-grid">
          {updates.map((update) => (
            <article className="update-card" key={update.title}>
              <div className="update-image">
                <Image
                  src={update.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              </div>
              <time>{update.date}</time>
              <h3>{update.title}</h3>
              <p>{update.summary}</p>
              <a href="#">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        Copyright © 2026 Delta Virtual. All rights reserved.
      </footer>
    </main>
  );
}
