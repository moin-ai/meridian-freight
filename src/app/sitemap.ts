import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const BASE = "https://meridianfreight.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/who-we-are",
    "/what-we-do",
    "/careers",
    "/contact",
    "/get-a-quote",
    "/track",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const services = site.services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...services];
}
