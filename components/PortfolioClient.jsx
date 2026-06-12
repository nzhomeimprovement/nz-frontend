"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Search } from "lucide-react";
import VideoModal from "./VideoModal";
import Lightbox from "./Lightbox";

const videoItems = [
  { title: "About NZ Home Improvement",  src: "/media/nzvid.mp4",     thumb: "/img/v1.jpg" },
  { title: "Recent Kitchen Remodeling",  src: "/media/vid1.mp4",      thumb: "/img/v2.jpg" },
  { title: "Bathroom Renovation",        src: "/media/bathroom.mp4",  thumb: "/img/portfolio/10.jpg" },
  { title: "Master Bathroom Remodel",    src: "/media/vid4.mp4",      thumb: "/img/portfolio/28.jpg" },
  { title: "External Remodeling",        src: "/media/vid2.mp4",      thumb: "/img/portfolio/17.jpg" },
  { title: "Complete Home Renovation",   src: "/media/vid3.mp4",      thumb: "/img/portfolio/20.jpg" },
  { title: "NZ Home Project 1",          src: "/media/nzh1.mp4",      thumb: "/img/portfolio/23.jpg" },
  { title: "NZ Home Project 2",          src: "/media/nzh2.mp4",      thumb: "/img/portfolio/25.jpg" },
  { title: "Exterior Remodel",           src: "/media/exterior.mp4",  thumb: "/img/portfolio/18.jpg" },
];

const photos = [
  { src: "/img/portfolio/1.jpg",    type: "Kitchen",          title: "Kitchen Remodel" },
  { src: "/img/portfolio/2.jpg",    type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/2a.jpg",   type: "Bathroom",         title: "Bathroom Detail" },
  { src: "/img/portfolio/3.jpg",    type: "Kitchen",          title: "Kitchen Transformation" },
  { src: "/img/portfolio/4.jpg",    type: "Exterior",         title: "Exterior Renovation" },
  { src: "/img/portfolio/5.jpg",    type: "Kitchen",          title: "Custom Kitchen" },
  { src: "/img/portfolio/6.jpg",    type: "Bathroom",         title: "Bathroom Makeover" },
  { src: "/img/portfolio/7.jpg",    type: "Basement",         title: "Basement Remodel" },
  { src: "/img/portfolio/8.jpg",    type: "Kitchen",          title: "Kitchen Upgrade" },
  { src: "/img/portfolio/9.jpg",    type: "Exterior",         title: "Exterior Facelift" },
  { src: "/img/portfolio/10.jpg",   type: "Bathroom",         title: "Bathroom Remodel" },
  { src: "/img/portfolio/11.jpg",   type: "Kitchen",          title: "Kitchen Renovation" },
  { src: "/img/portfolio/12.jpg",   type: "Full Renovation",  title: "Living Room Update" },
  { src: "/img/portfolio/13.jpg",   type: "Bathroom",         title: "Master Bathroom" },
  { src: "/img/portfolio/14.jpg",   type: "Kitchen",          title: "Kitchen Redesign" },
  { src: "/img/portfolio/14b.jpg",  type: "Kitchen",          title: "Kitchen Detail" },
  { src: "/img/portfolio/15.jpg",   type: "Exterior",         title: "Home Exterior" },
  { src: "/img/portfolio/16.jpg",   type: "Bathroom",         title: "Bathroom Overhaul" },
  { src: "/img/portfolio/17.jpg",   type: "Exterior",         title: "Exterior Remodel" },
  { src: "/img/portfolio/18.jpg",   type: "Exterior",         title: "Home Exterior" },
  { src: "/img/portfolio/19.jpg",   type: "Kitchen",          title: "Kitchen Project" },
  { src: "/img/portfolio/20.jpg",   type: "Full Renovation",  title: "Complete Home Renovation" },
  { src: "/img/portfolio/21.jpg",   type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/22.jpg",   type: "Kitchen",          title: "Kitchen Upgrade" },
  { src: "/img/portfolio/23.jpg",   type: "Full Renovation",  title: "Home Renovation" },
  { src: "/img/portfolio/24.jpg",   type: "Bathroom",         title: "Bathroom Makeover" },
  { src: "/img/portfolio/24b.jpg",  type: "Bathroom",         title: "Bathroom Detail" },
  { src: "/img/portfolio/25.jpg",   type: "Kitchen",          title: "Kitchen Transformation" },
  { src: "/img/portfolio/26.jpg",   type: "Basement",         title: "Basement Renovation" },
  { src: "/img/portfolio/27.jpg",   type: "Exterior",         title: "Exterior Work" },
  { src: "/img/portfolio/28.jpg",   type: "Bathroom",         title: "Master Bathroom Remodel" },
  { src: "/img/portfolio/29.jpg",   type: "Kitchen",          title: "Kitchen Project" },
  { src: "/img/portfolio/29a.jpg",  type: "Kitchen",          title: "Kitchen Detail" },
  { src: "/img/portfolio/30.jpg",   type: "Full Renovation",  title: "Full Home Renovation" },
  { src: "/img/portfolio/31.jpg",   type: "Bathroom",         title: "Bathroom Update" },
  { src: "/img/portfolio/32.jpg",   type: "Kitchen",          title: "Kitchen Remodel" },
  { src: "/img/portfolio/33.jpg",   type: "Exterior",         title: "Home Exterior" },
  { src: "/img/portfolio/34.jpg",   type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/35.jpg",   type: "Kitchen",          title: "Kitchen Makeover" },
  { src: "/img/portfolio/40.jpg",   type: "Full Renovation",  title: "Complete Renovation" },
  { src: "/img/portfolio/41.jpeg",  type: "Kitchen",          title: "Kitchen Project" },
  { src: "/img/portfolio/42.jpeg",  type: "Bathroom",         title: "Bathroom Project" },
  { src: "/img/portfolio/43.jpeg",  type: "Exterior",         title: "Exterior Project" },
  { src: "/img/portfolio/44.jpeg",  type: "Kitchen",          title: "Kitchen Renovation" },
  { src: "/img/portfolio/45.jpeg",  type: "Bathroom",         title: "Bathroom Remodel" },
  { src: "/img/portfolio/46.jpeg",  type: "Full Renovation",  title: "Home Renovation" },
  { src: "/img/portfolio/47.jpeg",  type: "Kitchen",          title: "Kitchen Upgrade" },
  { src: "/img/portfolio/48.jpeg",  type: "Bathroom",         title: "Bathroom Update" },
  { src: "/img/portfolio/49.jpeg",  type: "Exterior",         title: "Exterior Renovation" },
  { src: "/img/portfolio/50.jpeg",  type: "Kitchen",          title: "Kitchen Transformation" },
  { src: "/img/portfolio/51.jpeg",  type: "Bathroom",         title: "Bathroom Makeover" },
  { src: "/img/portfolio/52.jpeg",  type: "Full Renovation",  title: "Complete Home Makeover" },
  { src: "/img/portfolio/55.jpeg",  type: "Kitchen",          title: "Kitchen Remodel" },
  { src: "/img/portfolio/56.jpeg",  type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/121.jpg",  type: "Kitchen",          title: "Kitchen Project" },
  { src: "/img/portfolio/123.jpg",  type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/123a.jpg", type: "Bathroom",         title: "Bathroom Detail" },
  { src: "/img/portfolio/123b.jpg", type: "Bathroom",         title: "Bathroom Finish" },
  { src: "/img/portfolio/124.jpg",  type: "Kitchen",          title: "Kitchen Remodel" },
  { src: "/img/portfolio/132.jpg",  type: "Exterior",         title: "Exterior Renovation" },
  { src: "/img/portfolio/134.jpg",  type: "Full Renovation",  title: "Full Home Renovation" },
  { src: "/img/portfolio/141.jpg",  type: "Kitchen",          title: "Kitchen Renovation" },
  { src: "/img/portfolio/151.jpeg", type: "Bathroom",         title: "Bathroom Renovation" },
  { src: "/img/portfolio/181.jpg",  type: "Exterior",         title: "Exterior Renovation" },
  { src: "/img/portfolio/301.jpg",  type: "Full Renovation",  title: "Complete Renovation" },
];

const TYPE_FILTERS = ["All", "Kitchen", "Bathroom", "Exterior", "Basement", "Full Renovation"];


export default function PortfolioClient() {
  const [videoModal, setVideoModal]     = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? photos : photos.filter((p) => p.type === activeFilter);

  return (
    <section className="bg-white pb-20 font-sans">

      {/* ── Video Gallery ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-gray-100 pb-6">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
              Watch Our Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
              Video Gallery
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            {videoItems.length} project videos from our completed renovations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoItems.map((v) => (
            <div
              key={v.title}
              className="group cursor-pointer flex flex-col"
              onClick={() => setVideoModal({ title: v.title, src: v.src })}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-3 shadow-sm">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#D0956B] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={22} className="text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-gray-900 group-hover:text-gray-500 transition-colors px-1">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Photo Gallery ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
              Project Photos
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
              Photo Gallery
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            {photos.length} photos from real renovation projects.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TYPE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-colors duration-200 ${
                activeFilter === f
                  ? "bg-[#D0956B] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
              {f === "All" ? (
                <span className="ml-1.5 opacity-60">({photos.length})</span>
              ) : (
                <span className="ml-1.5 opacity-60">
                  ({photos.filter((p) => p.type === f).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((p) => (
            <div
              key={p.src}
              className="group cursor-pointer"
              onClick={() => setLightboxIndex(photos.indexOf(p))}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video shadow-sm">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#D0956B] flex items-center justify-center">
                    <Search size={14} className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {videoModal && (
        <VideoModal title={videoModal.title} src={videoModal.src} onClose={() => setVideoModal(null)} />
      )}
      {lightboxIndex !== null && (
        <Lightbox
          images={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % photos.length)}
        />
      )}
    </section>
  );
}
