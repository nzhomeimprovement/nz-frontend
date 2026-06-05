
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Old service canonical URLs
      { source: "/services/kitchen-remodeling-stamford-ct",  destination: "/services/kitchen-remodeling",  permanent: true },
      { source: "/services/bathroom-renovation-stamford-ct", destination: "/services/bathroom-renovation", permanent: true },
      { source: "/services/basement-remodeling-stamford-ct", destination: "/services/basement-remodeling", permanent: true },
      { source: "/services/home-renovation-stamford-ct",     destination: "/services/home-renovation",     permanent: true },
      { source: "/services/home-addition-stamford-ct",       destination: "/services/home-addition",       permanent: true },
      // Old .html URLs
      { source: "/index.html",     destination: "/",          permanent: true },
      { source: "/home.html",      destination: "/",          permanent: true },
      { source: "/about.html",     destination: "/about",     permanent: true },
      { source: "/portfolio.html", destination: "/portfolio", permanent: true },
      { source: "/feedback.html",  destination: "/feedback",  permanent: true },
      { source: "/contact.html",   destination: "/contact",   permanent: true },
      { source: "/services.html",  destination: "/services",  permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
