"use client";

import Image from "next/image";
import { useState } from "react";

const leadershipTeam = [
  {
    role: "President & CEO",
    name: "Andrew Zhao",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
  },
  {
    role: "Vice President, Operations",
    name: "Kai Glidden",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
  },
  {
    role: "Vice President, Technology",
    name: "Reid Cao",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
  },
  {
    role: "Vice President, Flight Operations",
    name: "Daniel Mu",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
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

export function StaffDirectory() {
  const [selectedTeam, setSelectedTeam] = useState<"leadership" | "staff">(
    "leadership",
  );

  return (
    <div className="team-directory">
      <div className="team-tabs" role="tablist" aria-label="Team category">
        <button
          aria-selected={selectedTeam === "leadership"}
          className={selectedTeam === "leadership" ? "active" : undefined}
          onClick={() => setSelectedTeam("leadership")}
          role="tab"
          type="button"
        >
          Leadership Team
        </button>
        <button
          aria-selected={selectedTeam === "staff"}
          className={selectedTeam === "staff" ? "active" : undefined}
          onClick={() => setSelectedTeam("staff")}
          role="tab"
          type="button"
        >
          Staff Team
        </button>
      </div>

      {selectedTeam === "leadership" ? (
        <div className="leadership-list" role="tabpanel">
          {leadershipTeam.map((person) => (
            <article className="leader-row" key={person.name}>
              <div className="leader-photo">
                <Image
                  src="/images/staff/blank-profile-picture.png"
                  alt=""
                  width={640}
                  height={640}
                />
              </div>
              <div className="leader-copy">
                <p className="team-role">{person.role}</p>
                <h2>{person.name}</h2>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="staff-card-grid" role="tabpanel">
          {staffTeam.map((person) => (
            <article className="staff-card" key={person.role}>
              <div>
                <p className="team-role">{person.role}</p>
                <h2>{person.name}</h2>
              </div>
              <a href={`mailto:${person.email}`}>
                {person.email} <span aria-hidden="true">&#9993;</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
