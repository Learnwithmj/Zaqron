import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#080B14",
    theme_color: "#080B14",
    icons: [{ src: "/brand/zaqron-app-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
