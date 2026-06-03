"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I highly recommend N.Z Home Improvements company. I hired NZ to do some major roof repair work. All was done with no problems, and the whole crew was amazing to work with.",
    author: "Robert Kerrigan",
    initials: "RK",
  },
  {
    text: "We hired N.Z home improvements for our home remodelling project. They were very organized & were extremely responsive to all of our questions. Highly recommended.",
    author: "Alexander Theroux",
    initials: "AT",
  },
  {
    text: "Nazar you did a great job. My family really appreciate, the house looks awesome. We must say, NZ home improvement is best remodelling company in Greenwich.",
    author: "Carlos Carlin",
    initials: "CC",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonial" className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans w-full max-w-7xl mx-auto">
      
      {/* Implemented the signature large pill-like bounding box over a clean gray to anchor the content without a harsh full-page dark background */}
      <div className="relative bg-gray-50 rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden  flex flex-col items-center text-center">
        
        {/* Subtle, premium header setup mapping to previous sections */}
        <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-4">
          What Our Clients Say
        </p>
        <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight mb-10">
          Trusted by homeowners.
        </h2>

        {/* Minimal quote icon - removing harsh colors and treating it as a light structural element */}
        <div className="flex justify-center mb-8 text-gray-200">
          <Quote size={56} strokeWidth={1.5} fill="currentColor" />
        </div>

        {/* Added standard fixed height constraint to the text area so the layout doesn't bounce significantly as texts change size */}
        <div className="min-h-[140px] flex items-center justify-center lg:w-4/5 mx-auto mb-10">
          <p className="text-gray-800 text-xl md:text-2xl font-medium leading-[1.6] md:leading-[1.7] transition-opacity duration-500">
            "{t.text}"
          </p>
        </div>

        {/* Author Avatar & Detail grouping */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {/* Lime highlight mapping directly to the primary action color of the design language */}
          <div className="w-[50px] h-[50px] rounded-full bg-[#D0956B] shadow-sm flex items-center justify-center text-black font-bold text-[15px] shrink-0">
            {t.initials}
          </div>
          <div className="flex flex-col text-left gap-1">
             <p className="text-black font-bold text-[15px] leading-none m-0">
               {t.author}
             </p>
             <span className="text-gray-400 text-sm font-medium">Homeowner</span>
          </div>
        </div>

        {/* Upgraded standard tiny dots into premium active-state "Pill" styled controls */}
        <div className="flex justify-center gap-2 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D0956B] ${
                i === current 
                ? "bg-black w-8 h-[10px]"  /* Active dot becomes a sleek elongated pill */
                : "bg-gray-300 hover:bg-gray-400 w-[10px] h-[10px]"
              }`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}