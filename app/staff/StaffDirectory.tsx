import Image from "next/image";

const leadershipTeam = [
  {
    role: "President",
    name: "Andrew Zhao",
    title: "Chief Executive Officer",
    bio: "Andrew is a Instrument Flight Instructor (CFII) based in Washington D.C. As CEO, Andrew leads the mission in building the most premier virtual airline in the world.",
    contactLabel: "Contact Andrew",
  },
  {
    role: "Vice President",
    name: "Kai Glidden",
    title: "Chief Operations Officer",
    bio: "Kai is a Instrument Flight Instructor (CFII) based in Maine. Kai is responsible for the daily operations and strategic planning for the organization.",
    contactLabel: "Contact Kai",
  },
  {
    role: "Vice President",
    name: "Reid Cao",
    title: "Chief Technology Officer",
    bio: "Reid is a Physics Major based in the United Kingdom. Reid oversees the platform Delta Virtual is built upon while continuing to innovate and improve.",
    contactLabel: "Contact Reid",
  },
];

const staffTeam = [
  { role: "ATL Chief Pilot", name: "Vacant", email: "atl@dlva.org" },
  { role: "BOS Chief Pilot", name: "Tyrell L.", email: "bos@dlva.org" },
  { role: "DTW Chief Pilot", name: "Vacant", email: "dtw@dlva.org" },
  { role: "LAX Chief Pilot", name: "Vacant", email: "lax@dlva.org" },
  { role: "MSP Chief Pilot", name: "Vacant", email: "msp@dlva.org" },
  { role: "NYC Chief Pilot", name: "Vacant", email: "nyc@dlva.org" },
  { role: "SEA Chief Pilot", name: "Vacant", email: "sea@dlva.org" },
  { role: "SLC Chief Pilot", name: "Vacant", email: "slc@dlva.org" },
];

function PlaceholderAvatar({ size }: { size: "large" | "small" }) {
  return (
    <div className={`staff-avatar staff-avatar-${size}`}>
      <Image
        alt=""
        height={640}
        src="/images/staff/profile-placeholder.png"
        width={640}
      />
    </div>
  );
}

export function StaffDirectory() {
  return (
    <div className="staff-directory">
      <section className="staff-group" aria-labelledby="leadership-heading">
        <h1 className="staff-section-title" id="leadership-heading">
          Leadership Team
        </h1>

        <div className="leadership-card-grid">
          {leadershipTeam.map((person) => (
            <article className="leadership-card" key={person.name}>
              <PlaceholderAvatar size="large" />
              <p className="staff-card-role">{person.role}</p>
              <h2>{person.name}</h2>
              <p className="staff-card-title">{person.title}</p>
              <p className="staff-card-bio">{person.bio}</p>
              <a className="staff-contact-link" href="#">
                {person.contactLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="staff-group staff-group-compact"
        aria-labelledby="staff-heading"
      >
        <h1 className="staff-section-title" id="staff-heading">
          Staff Team
        </h1>

        <div className="staff-team-grid">
          {staffTeam.map((person) => (
            <article className="staff-team-card" key={person.role}>
              <PlaceholderAvatar size="small" />
              <p className="staff-card-role">{person.role}</p>
              <h2>{person.name}</h2>
              <a className="staff-email-link" href={`mailto:${person.email}`}>
                {person.email} <span aria-hidden="true">&#9993;</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
