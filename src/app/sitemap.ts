import { MetadataRoute } from "next";
import { INDUSTRIES } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arvanto.com";
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/approach`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/ventures`, lastModified: new Date() },
    { url: `${baseUrl}/contactus`, lastModified: new Date() },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    ...INDUSTRIES.map(({ slug }) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
