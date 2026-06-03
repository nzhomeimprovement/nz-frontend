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

const photoNums = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,40,
];
const photos = photoNums.map((n) => ({
  src: `/img/portfolio/${n}.jpg`,
  alt: `NZ Home Improvement Project ${n}`,
}));

export default function PortfolioClient() {
  const [videoModal, setVideoModal] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-3 shadow-sm">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay + play button */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#D0956B] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={22} className="text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              {/* Title */}
              <p className="text-[13px] font-semibold text-gray-900 group-hover:text-gray-500 transition-colors px-1">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Photo Gallery ── */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-gray-100 pb-6">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-square"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={p.src}
                alt={p.alt}
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
