"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Staff", href: "/staff" },
  { label: "Fleet", href: "/fleet" },
  { label: "Hubs", href: "/hubs" },
  { label: "Partners", href: "/partners" },
];

type SiteHeaderProps = {
  activePage: "home" | "staff" | "fleet" | "hubs" | "partners";
};

type IndicatorStyle = {
  opacity: number;
  transform: string;
  width: number;
};

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [hoveredPage, setHoveredPage] =
    useState<SiteHeaderProps["activePage"] | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    opacity: 0,
    transform: "translateX(0)",
    width: 0,
  });

  useEffect(() => {
    function updateIndicator() {
      const nav = navRef.current;
      const targetPage = hoveredPage ?? activePage;
      const link = linkRefs.current[targetPage] ?? linkRefs.current[activePage];

      if (!nav || !link) {
        return;
      }

      const navBounds = nav.getBoundingClientRect();
      const linkBounds = link.getBoundingClientRect();
      const indicatorWidth = linkBounds.width + 4;
      const x =
        linkBounds.left - navBounds.left + linkBounds.width / 2 - indicatorWidth / 2;

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${x}px)`,
        width: indicatorWidth,
      });
    }

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activePage, hoveredPage]);

  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Delta Virtual home">
        <Image
          src="/images/delta-virtual-logo.svg"
          alt="Delta Virtual"
          width={202}
          height={51}
          priority
        />
      </Link>

      <nav
        className="nav-links"
        aria-label="Main menu"
        onBlur={() => setHoveredPage(null)}
        onMouseLeave={() => setHoveredPage(null)}
        ref={navRef}
      >
        <span
          aria-hidden="true"
          className="nav-indicator"
          style={indicatorStyle}
        />
        {navigation.map((item) => {
          const page = item.label.toLowerCase() as SiteHeaderProps["activePage"];
          const isActive = page === activePage;

          return (
            <Link
              className={isActive ? "active" : undefined}
              href={item.href}
              key={item.label}
              onFocus={() => setHoveredPage(page)}
              onMouseEnter={() => setHoveredPage(page)}
              ref={(node) => {
                linkRefs.current[page] = node;
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="account-actions">
        <a className="sign-up" href="https://apply.dlva.org">
          Sign Up
        </a>
        <a className="button button-small" href="https://crew.dlva.org">
          Log In
        </a>
      </div>
    </header>
  );
}
