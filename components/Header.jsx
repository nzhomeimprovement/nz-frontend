"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/kitchen-remodeling",  label: "Kitchen Remodeling" },
  { href: "/bathroom-renovation", label: "Bathroom Renovation" },
  { href: "/home-renovation",     label: "Home Renovation" },
  { href: "/basement-remodeling", label: "Basement Remodeling" },
  { href: "/home-addition",       label: "Home Addition" },
];

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About Us" },
  { href: "/services",  label: "Our Services", hasDropdown: true },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/blog",      label: "Blog" },
  { href: "/feedback",  label: "Feedback" },
  { href: "/contact",   label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isLight = pathname !== "/" && pathname !== "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || isLight;
  const onServices = pathname.startsWith("/services");

  const linkClass = (href) =>
    `px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
      solid
        ? "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
        : "text-zinc-300 hover:bg-white/10 hover:text-[#D0956B]"
    } ${
      (href === "/services" ? onServices : pathname === href)
        ? "text-[#D0956B]!"
        : ""
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-1000 pt-5 px-4 md:px-8 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            solid
              ? "bg-white shadow-md border border-zinc-100"
              : "bg-zinc-800/60 backdrop-blur-lg border border-white/10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative block shrink-0 w-30 h-9">
            <Image
              src="/img/logo-white.png"
              alt="NZ Home Improvement"
              fill
              className={`object-contain transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
              priority
            />
            <Image
              src="/img/logo-black.png"
              alt="NZ Home Improvement"
              fill
              className={`object-contain transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => {
              if (l.hasDropdown) {
                return (
                  <div key={l.href} className="relative group">
                    <Link
                      href={l.href}
                      className={`${linkClass(l.href)} flex items-center gap-1`}
                    >
                      {l.label}
                      <ChevronDown
                        size={11}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </Link>

                    {/* Dropdown panel — pt-3 acts as hover buffer */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-2 min-w-[210px]">
                        <Link
                          href="/services"
                          className={`flex items-center px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-700 transition-colors duration-200 border-b border-zinc-100 mb-1 pb-3`}
                        >
                          All Services
                        </Link>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[12px] font-semibold transition-colors duration-200 whitespace-nowrap ${
                              pathname === s.href
                                ? "bg-[#D0956B] text-zinc-900"
                                : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D0956B] shrink-0" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+12035247974"
              className="hidden sm:flex items-center gap-2 font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 bg-[#D0956B] text-zinc-900 hover:bg-[#C4845A]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (203) 524-7974
            </a>
            <button
              className="lg:hidden cursor-pointer bg-transparent border-none p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={22}
                className={`transition-colors duration-300 ${solid ? "text-zinc-800" : "text-white"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[rgba(20,20,20,0.97)] z-[9999] flex flex-col items-center justify-center gap-5 overflow-y-auto py-16">
          <button
            className="absolute top-5 right-5 bg-transparent border-none text-white cursor-pointer hover:text-[#D0956B] transition-colors duration-300"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {navLinks.map((l) => {
            if (l.hasDropdown) {
              return (
                <div key={l.href} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`text-lg font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-[#D0956B] flex items-center gap-2 bg-transparent border-none cursor-pointer ${
                      onServices ? "text-[#D0956B]" : "text-white/85"
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="flex flex-col items-center gap-2 mt-1 pb-1">
                      <Link
                        href="/services"
                        className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#D0956B] ${
                            pathname === s.href ? "text-[#D0956B]" : "text-white/60"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-lg font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-[#D0956B] ${
                  pathname === l.href ? "text-[#D0956B]" : "text-white/85"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}

          <a
            href="tel:+12035247974"
            className="mt-4 bg-[#D0956B] text-zinc-900 font-semibold px-8 py-3 rounded-full text-sm"
          >
            +1 (203) 524-7974
          </a>
        </div>
      )}
    </>
  );
}
