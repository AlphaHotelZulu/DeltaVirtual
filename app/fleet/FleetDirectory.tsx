"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Manufacturer = "airbus" | "boeing" | "bombardier" | "embraer";

type Aircraft = {
  image: string;
  imageClassName?: string;
  name: string;
  operator?: string;
};

type IndicatorStyle = {
  opacity: number;
  transform: string;
  width: number;
};

const manufacturers: Array<{ id: Manufacturer; label: string }> = [
  { id: "airbus", label: "Airbus" },
  { id: "boeing", label: "Boeing" },
  { id: "bombardier", label: "Bombardier" },
  { id: "embraer", label: "Embraer" },
];

const fleet: Record<Manufacturer, Aircraft[]> = {
  airbus: [
    { name: "Airbus A220-100 (221)", image: "/images/fleet/a220-100.avif" },
    {
      name: "Airbus A220-300 (223)",
      image: "/images/fleet/a220-300-reupload.avif",
    },
    { name: "Airbus A319-100 (319)", image: "/images/fleet/a319.avif" },
    { name: "Airbus A320-200 (320)", image: "/images/fleet/a320.avif" },
    { name: "Airbus A321-200 (321)", image: "/images/fleet/a321.avif" },
    {
      name: "Airbus A321neo (21N)",
      image: "/images/fleet/a321neo-reupload.avif",
      imageClassName: "fleet-aircraft-image-a321neo",
    },
    { name: "Airbus A330-200 (332)", image: "/images/fleet/a330-200.avif" },
    { name: "Airbus A330-300 (333)", image: "/images/fleet/a330-300.avif" },
    {
      name: "Airbus A330-900neo (339)",
      image: "/images/fleet/a330-900neo-reupload.avif",
    },
    { name: "Airbus A350-900 (359)", image: "/images/fleet/a350-900.avif" },
  ],
  boeing: [
    { name: "Boeing 717-100 (717)", image: "/images/fleet/b717.avif" },
    { name: "Boeing 737-800 (738)", image: "/images/fleet/b737-800.avif" },
    { name: "Boeing 737-900ER (739)", image: "/images/fleet/b737-900er.avif" },
    { name: "Boeing 757-200 (752)", image: "/images/fleet/b757-200.avif" },
    { name: "Boeing 757-300 (753)", image: "/images/fleet/b757-300.avif" },
    { name: "Boeing 767-300ER (763)", image: "/images/fleet/b767-300er.avif" },
    { name: "Boeing 767-400ER (764)", image: "/images/fleet/b767-400er.avif" },
  ],
  bombardier: [
    {
      name: "Bombardier CRJ-550",
      operator: "Operated by Delta Connection Carrier SkyWest Airlines",
      image: "/images/fleet/crj700.avif",
    },
    {
      name: "Bombardier CRJ-700",
      operator:
        "Operated by Delta Connection Carrier Endeavor Air or SkyWest Airlines",
      image: "/images/fleet/crj700.avif",
    },
    {
      name: "Bombardier CRJ-900",
      operator: "Operated by Delta Connection Carrier Endeavor Air",
      image: "/images/fleet/crj900.avif",
    },
  ],
  embraer: [
    {
      name: "Embraer E-170",
      operator: "Operated by Delta Connection Carrier Republic Airways",
      image: "/images/fleet/e170.avif",
    },
    {
      name: "Embraer E-175",
      operator:
        "Operated by Delta Connection Carrier Republic Airways or SkyWest Airlines",
      image: "/images/fleet/e175.avif",
    },
  ],
};

export function FleetDirectory() {
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<Manufacturer, HTMLButtonElement | null>>({
    airbus: null,
    boeing: null,
    bombardier: null,
    embraer: null,
  });
  const [selectedManufacturer, setSelectedManufacturer] =
    useState<Manufacturer>("airbus");
  const [hoveredManufacturer, setHoveredManufacturer] =
    useState<Manufacturer | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    opacity: 0,
    transform: "translateX(0)",
    width: 0,
  });

  useEffect(() => {
    function updateIndicator() {
      const tabs = tabsRef.current;
      const targetManufacturer = hoveredManufacturer ?? selectedManufacturer;
      const button =
        buttonRefs.current[targetManufacturer] ??
        buttonRefs.current[selectedManufacturer];

      if (!tabs || !button) {
        return;
      }

      const tabsBounds = tabs.getBoundingClientRect();
      const buttonBounds = button.getBoundingClientRect();
      const x = buttonBounds.left - tabsBounds.left;

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${x}px)`,
        width: buttonBounds.width,
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [hoveredManufacturer, selectedManufacturer]);

  return (
    <div className="fleet-directory">
      <div
        className="fleet-tabs"
        onBlur={() => setHoveredManufacturer(null)}
        onMouseLeave={() => setHoveredManufacturer(null)}
        ref={tabsRef}
        role="tablist"
        aria-label="Aircraft manufacturer"
      >
        <span
          aria-hidden="true"
          className="fleet-tabs-indicator"
          style={indicatorStyle}
        />
        {manufacturers.map((manufacturer) => (
          <button
            aria-selected={selectedManufacturer === manufacturer.id}
            className={
              selectedManufacturer === manufacturer.id ? "active" : undefined
            }
            key={manufacturer.id}
            onFocus={() => setHoveredManufacturer(manufacturer.id)}
            onMouseEnter={() => setHoveredManufacturer(manufacturer.id)}
            onClick={() => setSelectedManufacturer(manufacturer.id)}
            ref={(node) => {
              buttonRefs.current[manufacturer.id] = node;
            }}
            role="tab"
            type="button"
          >
            {manufacturer.label}
          </button>
        ))}
      </div>

      <div className="fleet-list" role="tabpanel">
        {fleet[selectedManufacturer].map((aircraft) => (
          <article
            className={[
              "fleet-card",
              selectedManufacturer === "bombardier" ||
              selectedManufacturer === "embraer"
                ? "fleet-card-regional"
                : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
            key={aircraft.name}
          >
            <div
              className={[
                "fleet-aircraft-image",
                aircraft.imageClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Image
                alt=""
                fill
                sizes="(max-width: 700px) 45vw, 260px"
                src={aircraft.image}
              />
            </div>
            <div className="fleet-card-copy">
              <h2>{aircraft.name}</h2>
              {aircraft.operator ? <p>{aircraft.operator}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
