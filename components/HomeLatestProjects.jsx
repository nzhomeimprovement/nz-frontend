"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import VideoModal from "./VideoModal";

const projects = [
  {
    thumb: "/img/portfolio/10.jpg",
    title: "Master Bathroom Remodel",
    src: "/media/vid4.mp4"
  },
  {
    thumb: "/img/portfolio/17.jpg",
    title: "External Remodeling",
    src: "/media/vid2.mp4"
  },
  {
    thumb: "/img/portfolio/20.jpg",
    title: "Complete Renovations",
    src: "/media/vid3.mp4"
  },
];

export default function HomeLatestProjects() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section id="blog" className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        
        {/* Header Setup aligned exactly to previous modules */}
        <div className="flex flex-col md:flex-row justify-between md:items-end flex-wrap gap-4 mb-10 md:mb-12 border-b border-gray-100 pb-6">
          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Portfolio
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] m-0 leading-tight">
              Latest Projects
            </h2>
          </div>
          
          {/* Sleek, text-based modern "View All" link mapping with hover colors */}
          <Link
            href="/portfolio"
            className="group flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors duration-300 pb-1"
          >
            View All Projects
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dynamic 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col group">
              
              {/* Media Thumb Container - Emulating that premium Bubble shape (`rounded-[2rem]`) */}
              <div
                className="relative cursor-pointer overflow-hidden rounded-[2rem] bg-gray-100 w-full aspect-[4/3] mb-5 shadow-sm transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                onClick={() => setModal({ title: p.title, src: p.src })}
              >
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                
                {/* Unified clean lime-overlay effect mapping perfectly to previous component logic */}
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="w-[60px] h-[60px] rounded-full bg-[#e3fb4b] shadow-lg flex items-center justify-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <Play size={24} className="text-black ml-1 flex-shrink-0" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Removed ugly caps-lock metadata formatting in favor of tight tracking sans bold layouts */}
              <div className="px-2 cursor-pointer flex flex-col" onClick={() => setModal({ title: p.title, src: p.src })}>
                <p className="text-[12px] font-medium text-gray-400 mb-1 tracking-wider uppercase">Project Highlights</p>
                <h5 className="text-[18px] md:text-[20px] font-bold tracking-tight text-gray-900 m-0 group-hover:text-gray-500 transition-colors duration-300">
                  {p.title}
                </h5>
              </div>
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