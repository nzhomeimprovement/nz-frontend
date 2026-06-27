import fs from "fs";
import path from "path";
import PortfolioClient from "@/components/PortfolioClient";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Portfolio - NZ Home Improvement | Renovation Projects CT",
  description:
    "Browse NZ Home Improvement's portfolio of kitchen, bathroom, basement, and home renovation projects in Stamford, CT.",
  alternates: { canonical: "https://nzhomeimprovement.com/portfolio/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/portfolio/",
    title: "Our Portfolio - NZ Home Improvement | Renovation Projects CT",
    description:
      "Browse the full NZ Home Improvement portfolio of kitchen, bathroom, basement, and home renovation projects across Stamford, CT and Fairfield County.",
  },
};

const CATEGORY_MAP = {
  kitchen: { label: "Kitchen", title: "Kitchen Remodel" },
  bathroom: { label: "Bathroom", title: "Bathroom Renovation" },
  "basement-remodeling": { label: "Basement", title: "Basement Remodel" },
  "home-renovation": { label: "Home Renovation", title: "Home Renovation" },
  "home-addition": { label: "Home Addition", title: "Home Addition" },
};

function buildPhotos() {
  const galleryDir = path.join(process.cwd(), "public", "img", "gallery");
  const photos = [];

  for (const [folder, { label, title }] of Object.entries(CATEGORY_MAP)) {
    const folderPath = path.join(galleryDir, folder);
    if (!fs.existsSync(folderPath)) continue;

    const files = fs
      .readdirSync(folderPath)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => {
        const n = (s) => parseInt(s) || 0;
        return n(a) - n(b);
      });

    for (const file of files) {
      photos.push({
        src: `/img/gallery/${folder}/${file}`,
        type: label,
        title,
      });
    }
  }

  return photos;
}

export default function PortfolioPage() {
  const photos = buildPhotos();

  return (
    <>
      <PageHero title="Our Portfolio" bgImage="/img/full/20.jpg" crumb="Portfolio" />

      {/* ── Intro header ── */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 border-b border-gray-100 pb-8">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Work
            </p>
            <h2 className="text-[28px] md:text-4xl font-bold text-black tracking-[-0.02em] leading-tight">
              Completed Projects
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Browse our completed renovation and remodeling projects — from kitchens and bathrooms to full home transformations across Stamford, CT.
          </p>
        </div>
      </section>

      {/* ── Video + Photo Gallery ── */}
      <PortfolioClient photos={photos} />
    </>
  );
}
