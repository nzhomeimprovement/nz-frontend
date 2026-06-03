"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

const videos = [
  {
    thumb: "/img/v1.jpg",
    title: "About NZ Home Improvement",
    src: "/media/nzvid.mp4"
  },
  {
    thumb: "/img/v2.jpg",
    title: "Recent Kitchen Remodeling",
    src: "/media/vid1.mp4"
  },
];

export default function HomeVideoSection() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            {/* Kept your pre-title but restyled it to fit the modern minimal theme */}
            <p className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Work
            </p>
            {/* Matching the bold, clean, tight-tracking header from the first image */}
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Take a look at how <br className="hidden sm:block"/> we're creative.
            </h2>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videos.map((v) => (
            <div key={v.title} className="flex flex-col group cursor-pointer" onClick={() => setModal({ title: v.title, src: v.src })}>
              
              {/* Thumbnail Container */}
              {/* Applying the large pill-like rounded corners to match the first design */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/3] w-full mb-5 shadow-sm transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Play Button Overlay overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Styling play button with the same Lime accent color as the CTA */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[#D0956B] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play size={28} className="text-black ml-1.5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Clean, standard case video title aligned with modern UI aesthetics */}
              <h4 className="text-[17px] md:text-[19px] font-bold text-gray-900 group-hover:text-gray-600 transition-colors pl-2">
                {v.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {modal && (
        <VideoModal title={modal.title} src={modal.src} onClose={() => setModal(null)} />
      )}
    </>
  );
}