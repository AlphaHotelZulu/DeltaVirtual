import type { Metadata } from "next";

const configuredSiteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dlva.org",
);

if (configuredSiteUrl.hostname === "dlva.org") {
  configuredSiteUrl.hostname = "www.dlva.org";
}

export const SITE_URL = configuredSiteUrl.origin;
export const SITE_NAME = "Delta Virtual";
export const SITE_ALTERNATE_NAMES = ["DLVA", "Delta Virtual Air Lines"];
export const SITE_DESCRIPTION =
  "Founded in 2025, Delta Virtual is a 501(c)(3) non-profit organization dedicated to replicating real-world airline operations to foster a deeper understanding of the aviation industry.";

type PageMetadataOptions = {
  description: string;
  path: `/${string}`;
  title: string;
};

export function createPageMetadata({
  description,
  path,
  title,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: "/images/home/home-hero.png",
          width: 5120,
          height: 2880,
          alt: "Delta Virtual aircraft approaching an airport",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/images/home/home-hero.png"],
    },
  };
}
