"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Lightbox from "./Lightbox";

const photos = [
  { src: "/img/portfolio/1.jpg",    alt: "NZ Home Improvement Renovation Project" },
  { src: "/img/portfolio/2.jpg",    alt: "Kitchen Remodeling Stamford CT" },
  { src: "/img/portfolio/2a.jpg",   alt: "Kitchen Renovation Detail" },
  { src: "/img/portfolio/3.jpg",    alt: "Bathroom Renovation Project" },
  { src: "/img/portfolio/4.jpg",    alt: "Basement Remodeling Stamford CT" },
  { src: "/img/portfolio/5.jpg",    alt: "Home Renovation Project" },
  { src: "/img/portfolio/6.jpg",    alt: "Kitchen Remodeling Project" },
  { src: "/img/portfolio/7.jpg",    alt: "Bathroom Renovation Stamford CT" },
  { src: "/img/portfolio/8.jpg",    alt: "Home Addition Project" },
  { src: "/img/portfolio/9.jpg",    alt: "Basement Finishing Project" },
  { src: "/img/portfolio/10.jpg",   alt: "Master Bathroom Remodel" },
  { src: "/img/portfolio/11.jpg",   alt: "Kitchen Renovation Stamford" },
  { src: "/img/portfolio/12.jpg",   alt: "Bathroom Remodeling Project" },
  { src: "/img/portfolio/13.jpg",   alt: "Home Renovation Stamford CT" },
  { src: "/img/portfolio/14.jpg",   alt: "Kitchen Remodeling Before & After" },
  { src: "/img/portfolio/14b.jpg",  alt: "Kitchen Remodeling Detail" },
  { src: "/img/portfolio/15.jpg",   alt: "Basement Remodeling Project" },
  { src: "/img/portfolio/16.jpg",   alt: "Bathroom Renovation Project" },
  { src: "/img/portfolio/17.jpg",   alt: "Exterior Home Remodeling" },
  { src: "/img/portfolio/18.jpg",   alt: "Exterior Renovation Project" },
  { src: "/img/portfolio/19.jpg",   alt: "Home Renovation Interior" },
  { src: "/img/portfolio/20.jpg",   alt: "Complete Home Renovation" },
  { src: "/img/portfolio/21.jpg",   alt: "Basement Finishing Stamford CT" },
  { src: "/img/portfolio/22.jpg",   alt: "Kitchen Remodel Project" },
  { src: "/img/portfolio/23.jpg",   alt: "Home Addition Stamford CT" },
  { src: "/img/portfolio/24.jpg",   alt: "Bathroom Upgrade Project" },
  { src: "/img/portfolio/24b.jpg",  alt: "Bathroom Renovation Detail" },
  { src: "/img/portfolio/25.jpg",   alt: "Exterior Home Addition" },
  { src: "/img/portfolio/26.jpg",   alt: "Kitchen Renovation Project" },
  { src: "/img/portfolio/27.jpg",   alt: "Basement Remodel Interior" },
  { src: "/img/portfolio/28.jpg",   alt: "Bathroom Remodeling Stamford CT" },
  { src: "/img/portfolio/29.jpg",   alt: "Home Renovation Project" },
  { src: "/img/portfolio/29a.jpg",  alt: "Home Renovation Detail" },
  { src: "/img/portfolio/30.jpg",   alt: "Kitchen Remodeling CT" },
  { src: "/img/portfolio/31.jpg",   alt: "Bathroom Renovation CT" },
  { src: "/img/portfolio/32.jpg",   alt: "Home Addition CT" },
  { src: "/img/portfolio/33.jpg",   alt: "Basement Remodeling CT" },
  { src: "/img/portfolio/34.jpg",   alt: "Full Home Renovation" },
  { src: "/img/portfolio/35.jpg",   alt: "Kitchen & Bathroom Remodel" },
  { src: "/img/portfolio/40.jpg",   alt: "Complete Home Remodeling" },
  { src: "/img/portfolio/41.jpeg",  alt: "NZ Home Project 41" },
  { src: "/img/portfolio/42.jpeg",  alt: "NZ Home Project 42" },
  { src: "/img/portfolio/43.jpeg",  alt: "NZ Home Project 43" },
  { src: "/img/portfolio/44.jpeg",  alt: "NZ Home Project 44" },
  { src: "/img/portfolio/45.jpeg",  alt: "NZ Home Project 45" },
  { src: "/img/portfolio/46.jpeg",  alt: "NZ Home Project 46" },
  { src: "/img/portfolio/47.jpeg",  alt: "NZ Home Project 47" },
  { src: "/img/portfolio/48.jpeg",  alt: "NZ Home Project 48" },
  { src: "/img/portfolio/49.jpeg",  alt: "NZ Home Project 49" },
  { src: "/img/portfolio/50.jpeg",  alt: "NZ Home Project 50" },
  { src: "/img/portfolio/51.jpeg",  alt: "NZ Home Project 51" },
  { src: "/img/portfolio/52.jpeg",  alt: "NZ Home Project 52" },
  { src: "/img/portfolio/55.jpeg",  alt: "NZ Home Project 55" },
  { src: "/img/portfolio/56.jpeg",  alt: "NZ Home Project 56" },
  { src: "/img/portfolio/121.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/123.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/123a.jpg", alt: "NZ Home Renovation Detail" },
  { src: "/img/portfolio/123b.jpg", alt: "NZ Home Renovation Detail" },
  { src: "/img/portfolio/124.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/132.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/134.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/141.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/151.jpeg", alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/181.jpg",  alt: "NZ Home Renovation Project" },
  { src: "/img/portfolio/301.jpg",  alt: "NZ Home Renovation Project" },
];

export default function PortfolioCarousel({ photos: propPhotos, heading = "Project Gallery" }) {
  const items = propPhotos ?? photos;
  const scrollRef = useRef(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardW = card ? card.offsetWidth + 16 : el.offsetWidth / 4;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              {heading}
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              Browse real renovation projects completed by NZ Home Improvement across Stamford, CT.
            </p>
          </div>

          {/* Arrows + View All */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              <ArrowRight size={17} strokeWidth={1.8} />
            </button>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors duration-200 border-b border-gray-900 hover:border-gray-500 pb-px"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((photo, i) => (
            <div
              key={photo.src}
              data-card
              className="snap-start shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)] xl:w-[calc(25%-0.76rem)] cursor-pointer group"
              onClick={() => setLightboxIdx(i)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-4/3">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    View Photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="flex sm:hidden justify-center mt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={items}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => (i - 1 + items.length) % items.length)}
          onNext={() => setLightboxIdx((i) => (i + 1) % items.length)}
        />
      )}
    </section>
  );
}
