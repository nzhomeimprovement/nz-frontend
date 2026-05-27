import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/feedback", label: "Feedback" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/img/logo-black.png"
                alt="NZ Home Improvement"
                width={180}
                height={55}
                className="object-contain brightness-0 invert" 
                /* Note: 'brightness-0 invert' forces a black logo to become white for dark mode. Remove if you have a white logo file. */
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
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#DFFF40] hover:border-[#DFFF40] hover:text-zinc-950 hover:-translate-y-1 transition-all duration-300 text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#DFFF40] hover:border-[#DFFF40] hover:text-zinc-950 hover:-translate-y-1 transition-all duration-300 text-xs font-bold"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
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
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#DFFF40] transition-all duration-300 mr-2 text-sm">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-6 lg:col-span-4">
            <h6 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Get in Touch
            </h6>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4 text-sm text-zinc-400 group">
                <span className="shrink-0 mt-0.5 text-[#DFFF40] opacity-80 text-base">&#x1F4CD;</span>
                <span className="leading-relaxed">1372 Summer St, <br/>Stamford, CT 06905, USA</span>
              </li>
              <li>
                <a
                  href="mailto:build@nzhomeimprovement.net"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="shrink-0 text-[#DFFF40] opacity-80 group-hover:opacity-100 transition-opacity text-sm">&#x2709;</span>
                  build@nzhomeimprovement.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+12035247974"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="shrink-0 text-[#DFFF40] opacity-80 group-hover:opacity-100 transition-opacity text-sm">&#x260E;</span>
                  +1 (203) 524-7974
                </a>
              </li>
            </ul>

            {/* Badges safely wrapped in a white pill in case they are jpgs without transparency */}
            <div className="inline-flex gap-4 items-center bg-white/5 border border-white/10 py-3 px-5 rounded-2xl">
              <Image src="/img/yelp.png" alt="Yelp" width={60} height={24} className="object-contain" />
              <div className="w-[1px] h-6 bg-white/20 mx-2"></div>
              <Image src="/img/acc1.png" alt="Accredited Business" width={60} height={24} className="object-contain" />
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