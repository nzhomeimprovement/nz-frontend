"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({ title, src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-10000 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-5 py-3.5 border-b border-gray-100">
          <h5 className="m-0 text-sm font-semibold">{title}</h5>
          <button
            className="text-gray-800 cursor-pointer bg-transparent border-none hover:text-brand transition-colors duration-200 flex items-center"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
        <div className="p-5">
          <video width="100%" controls autoPlay>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-gray-900 text-white hover:bg-brand transition-colors duration-300 cursor-pointer border-none rounded-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
