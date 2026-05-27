"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Lightbox from "./Lightbox";

const allItems = [
  // Bathroom
  { src: "/img/portfolio/14.jpg",   title: "Kitchen Remodel",       category: "bathroom" },
  { src: "/img/portfolio/14b.jpg",  title: "Kitchen Remodel",       category: "bathroom" },
  { src: "/img/portfolio/132.jpg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/32.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/22.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/124.jpg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/24.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/24b.jpg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/10.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/28.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/40.jpg",   title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/41.jpeg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/42.jpeg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/48.jpeg",  title: "Bathroom Remodel",      category: "bathroom" },
  { src: "/img/portfolio/49.jpeg",  title: "Bathroom Remodel",      category: "bathroom" },
  // Kitchen
  { src: "/img/portfolio/2.jpg",    title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/2a.jpg",   title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/21.jpg",   title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/121.jpg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/9.jpg",    title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/35.jpg",   title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/27.jpg",   title: "Custom Cabinetry",      category: "kitchen" },
  { src: "/img/portfolio/141.jpg",  title: "Kitchen Remodeling",    category: "kitchen" },
  { src: "/img/portfolio/4.jpg",    title: "Custom Cabinetry",      category: "kitchen" },
  { src: "/img/portfolio/301.jpg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/30.jpg",   title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/50.jpeg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/151.jpeg", title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/51.jpeg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/52.jpeg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/55.jpeg",  title: "Kitchen Remodel",       category: "kitchen" },
  { src: "/img/portfolio/56.jpeg",  title: "Exterior Remodel",      category: "kitchen" },
  // Home Remodel
  { src: "/img/portfolio/17.jpg",   title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/134.jpg",  title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/34.jpg",   title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/29a.jpg",  title: "Bathroom Remodel",      category: "home" },
  { src: "/img/portfolio/29.jpg",   title: "Bathroom Remodel",      category: "home" },
  { src: "/img/portfolio/31.jpg",   title: "Bathroom Remodel",      category: "home" },
  { src: "/img/portfolio/123.jpg",  title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/123a.jpg", title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/123b.jpg", title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/23.jpg",   title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/25.jpg",   title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/33.jpg",   title: "Flooring Installation", category: "home" },
  { src: "/img/portfolio/181.jpg",  title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/18.jpg",   title: "Exterior Remodel",      category: "home" },
  { src: "/img/portfolio/20.jpg",   title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/43.jpeg",  title: "Kitchen Remodel",       category: "home" },
  { src: "/img/portfolio/44.jpeg",  title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/45.jpeg",  title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/46.jpeg",  title: "Home Remodel",          category: "home" },
  { src: "/img/portfolio/47.jpeg",  title: "Home Remodel",          category: "home" },
  // General
  { src: "/img/portfolio/26.jpg",   title: "Kitchen Remodel",       category: "general" },
  { src: "/img/portfolio/16.jpg",   title: "Dry Wall Installation",  category: "general" },
  { src: "/img/portfolio/13.jpg",   title: "Decorative Wall",       category: "general" },
];

const tabs = [
  { key: "all",      label: "All" },
  { key: "bathroom", label: "Bathroom" },
  { key: "kitchen",  label: "Kitchen" },
  { key: "home",     label: "Home Remodel" },
];

export default function ServicesClient() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = active === "all" ? allItems : allItems.filter((i) => i.category === active);

  return (
    <section className="bg-white py-12 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
              Browse by Category
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
              Photo Gallery
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  active === t.key
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-zinc-900 hover:text-zinc-900"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.src}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-square"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                <div className="w-9 h-9 rounded-full bg-[#e3fb4b] flex items-center justify-center">
                  <Search size={14} className="text-black" />
                </div>
                <p className="text-white text-xs font-semibold text-center leading-tight">
                  {item.title}
                </p>
                <p className="text-white/60 text-[10px]">Residential Project</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % filtered.length)}
        />
      )}
    </section>
  );
}
