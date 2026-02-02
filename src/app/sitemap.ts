import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nikhilmahajan.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://nikhilmahajan.vercel.app/backend_resume.pdf",
      lastModified: new Date(),
    },
  ];
}
