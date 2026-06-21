import { blogs } from "@/data/blogs";

export default function sitemap() {
  const base = "https://nzhomeimprovement.com";
  const now = new Date();

  const blogEntries = blogs.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/feedback/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/kitchen-remodeling/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/bathroom-renovation/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/home-renovation/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/basement-remodeling/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/home-addition/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
  ];
}
