export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://nzhomeimprovement.com/sitemap.xml",
  };
}
