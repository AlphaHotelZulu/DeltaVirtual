import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/staff`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/fleet`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hubs`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/partners`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
