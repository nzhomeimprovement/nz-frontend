"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index];
  const label = img.alt || img.title || "";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-10000 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image container */}
      <div
        className="relative flex items-center justify-center px-16 w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="relative flex-1 w-full min-h-0">
            <Image
              src={img.src}
              alt={label}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          {label && (
            <p className="text-white/80 text-sm font-medium text-center shrink-0">
              {label}
            </p>
          )}
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
