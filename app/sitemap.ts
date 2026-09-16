import type { MetadataRoute } from "next";
import { CITIES, LAWYERS, PRACTICES, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lawyers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/practice`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/city`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/verify`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const lawyerPages: MetadataRoute.Sitemap = LAWYERS.map((l) => ({
    url: `${SITE_URL}/lawyers/${l.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE_URL}/city/${c.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const practicePages: MetadataRoute.Sitemap = PRACTICES.map((p) => ({
    url: `${SITE_URL}/practice/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comboPages: MetadataRoute.Sitemap = CITIES.flatMap((c) =>
    PRACTICES.map((p) => ({
      url: `${SITE_URL}/city/${c.slug}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...staticPages, ...lawyerPages, ...cityPages, ...practicePages, ...comboPages];
}
