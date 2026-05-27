"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
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
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">&#10094;</button>
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={1200}
          height={800}
          className="lightbox-img"
          style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }}
          priority
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">&#10095;</button>
    </div>
  );
}
