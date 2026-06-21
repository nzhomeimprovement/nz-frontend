import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { MapPin, Clock } from "lucide-react";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const metadata = {
  title: "Contact Us - NZ Home Improvement | Free Estimates Stamford CT",
  description:
    "Contact NZ Home Improvement in Stamford, CT. Free estimates on home renovation, kitchen and bathroom remodeling, basement finishing, and construction.",
  alternates: { canonical: "https://nzhomeimprovement.com/contact/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/contact/",
    title: "Contact Us - NZ Home Improvement | Free Estimates Stamford CT",
    description:
      "Contact NZ Home Improvement in Stamford, CT. Free estimates on home renovation, kitchen and bathroom remodeling, basement finishing.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" bgImage="/img/full/08.jpg" crumb="Contact" />

      {/* ── Contact Section ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Reach Out
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Get In Touch
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4">
              We appreciate your interest in NZ Home Improvement. Get in touch and we&apos;ll get back to you shortly.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">

            {/* Info cards */}
            <div className="flex flex-col gap-5">

              <div className="bg-zinc-50 rounded-[2rem] p-7 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-[#D0956B] shrink-0 flex items-center justify-center">
                  <MapPin size={18} className="text-black" />
                </div>
                <div>
                  <h6 className="font-bold text-zinc-900 text-sm mb-2">Our Location</h6>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    1372 Summer St, Stamford, CT 06905, U.S.A
                  </p>
                  <a
                    href="mailto:build@nzhomeimprovement.net"
                    className="text-sm text-gray-700 hover:text-black transition-colors block mt-2 break-all"
                  >
                    build@nzhomeimprovement.net
                  </a>
                  <a
                    href="tel:+12035247974"
                    className="text-sm text-gray-700 hover:text-black transition-colors block mt-1"
                  >
                    +1 203-524-7974
                  </a>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-[2rem] p-7 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-[#D0956B] shrink-0 flex items-center justify-center">
                  <Clock size={18} className="text-black" />
                </div>
                <div>
                  <h6 className="font-bold text-zinc-900 text-sm mb-2">Business Hours</h6>
                  <p className="text-gray-500 text-sm">Mon – Fri: 9am to 6pm</p>
                  <p className="text-gray-500 text-sm">Sat: 9am to 1pm</p>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-[2rem] p-7">
                <h6 className="font-bold text-zinc-900 text-sm mb-4">Follow Us</h6>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/n.z_homeimprovement?igsh=NHFtNHFpMHd0a3l4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#D0956B] hover:text-black transition-colors duration-300"
                  >
                    <IconInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/share/15zMf8GRMZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#D0956B] hover:text-black transition-colors duration-300"
                  >
                    <IconFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-10">
              <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
                Send a Message
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-7">
                Request a Free Estimate
              </h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3104323331067!2d-73.54484122448318!3d41.062206516103366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a1ec73089f5b%3A0xd73abd15a025df17!2s1372%20Summer%20St%2C%20Stamford%2C%20CT%2006905%2C%20USA!5e0!3m2!1sen!2s!4v1740291050009!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NZ Home Improvement Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
