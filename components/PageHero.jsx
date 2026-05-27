import Image from "next/image";
import Link from "next/link";

export default function PageHero({ title, bgImage, crumb }) {
  return (
    <section className="relative h-72 md:h-96 flex items-end overflow-hidden bg-zinc-950">
      <Image src={bgImage} alt={title} fill className="object-cover opacity-50" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <p className="text-[#e3fb4b] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
          NZ Home Improvement
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-white/50 mt-4">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
