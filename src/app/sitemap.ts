import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practice-areas";
import { people } from "@/data/people";
import { perspectives } from "@/data/perspectives";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.saranshrajassociates.co.in";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/firm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sectors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/people`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/perspectives`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const practiceRoutes: MetadataRoute.Sitemap = practiceAreas.map((p) => ({
    url: `${base}/expertise/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const peopleRoutes: MetadataRoute.Sitemap = people.map((p) => ({
    url: `${base}/people/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const perspectiveRoutes: MetadataRoute.Sitemap = perspectives.map((p) => ({
    url: `${base}/perspectives/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...practiceRoutes, ...peopleRoutes, ...perspectiveRoutes];
}
