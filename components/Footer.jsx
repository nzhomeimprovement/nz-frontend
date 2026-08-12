import Link from "next/link";
import Image from "next/image";

const GOOGLE_PROFILE_URL = "https://share.google/8TLXg5qiopuAwyCJN";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

const quickLinks = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/feedback",  label: "Feedback" },
  { href: "/contact",   label: "Contact" },
];

const serviceLinks = [
  { href: "/kitchen-remodeling",  label: "Kitchen Remodeling" },
  { href: "/bathroom-renovation", label: "Bathroom Renovation" },
  { href: "/home-renovation",     label: "Home Renovation" },
  { href: "/basement-remodeling", label: "Basement Remodeling" },
  { href: "/home-addition",       label: "Home Addition" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/logo-black.png"
                alt="NZ Home Improvement"
                width={180}
                height={55}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Professional home renovation and remodeling in Stamford, CT. We specialize in transforming spaces throughout Fairfield &amp; Westchester counties.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/n.z_homeimprovement"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#D0956B] hover:border-[#D0956B] hover:text-zinc-950 hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/NZHOMEIMPROVEMENT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#D0956B] hover:border-[#D0956B] hover:text-zinc-950 hover:-translate-y-1 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h6>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#D0956B] transition-all duration-300 mr-2 text-sm">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:col-span-4 lg:col-span-3">
            <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Our Services
            </h6>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#D0956B] transition-all duration-300 mr-2 text-sm">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-3">
            <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Get in Touch
            </h6>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4 text-sm text-zinc-400">
                <span className="shrink-0 mt-0.5 text-[#D0956B] opacity-80 text-base">&#x1F4CD;</span>
                <span className="leading-relaxed">1372 Summer St, <br/>Stamford, CT 06905, USA</span>
              </li>
              <li>
                <a
                  href="mailto:build@nzhomeimprovement.net"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="shrink-0 text-[#D0956B] opacity-80 group-hover:opacity-100 transition-opacity text-sm">&#x2709;</span>
                  build@nzhomeimprovement.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+12035247974"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="shrink-0 text-[#D0956B] opacity-80 group-hover:opacity-100 transition-opacity text-sm">&#x260E;</span>
                  +1 (203) 524-7974
                </a>
              </li>
            </ul>

            <div className="inline-flex flex-wrap gap-3">
              <div className="inline-flex gap-4 items-center bg-white/5 border border-white/10 py-3 px-5 rounded-2xl">
                <Image src="/img/yelp.png" alt="Yelp" width={60} height={24} className="object-contain" />
                <div className="w-px h-6 bg-white/20"></div>
                <Image src="/img/acc1.png" alt="Accredited Business" width={60} height={24} className="object-contain" />
              </div>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 py-3 px-5 rounded-2xl transition-colors duration-300 group"
              >
                <GoogleIcon />
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="9" height="9" viewBox="0 0 24 24" fill="#FBBC05" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors leading-none">Google Reviews</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 m-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">NZ Home Improvement</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
