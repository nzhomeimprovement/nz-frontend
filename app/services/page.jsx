import ServicesClient from "@/components/ServicesClient";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Services - NZ Home Improvement | Renovation & Remodeling CT",
  description:
    "NZ Home Improvement provides home renovation, kitchen remodeling, bathroom renovation, basement remodeling, and general contracting services in Stamford, CT.",
  alternates: { canonical: "https://nzhomeimprovement.com/services" },
  openGraph: {
    type: "website",
    url: "https://nzhomeimprovement.com/services",
    title: "Services - NZ Home Improvement | Renovation & Remodeling CT",
    description:
      "NZ Home Improvement provides home renovation, kitchen remodeling, bathroom renovation, basement remodeling, and general contracting services in Stamford, CT.",
    siteName: "NZ Home Improvement",
  },
};

const servicesList = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Home Renovation",
  "Flooring Installation",
  "Roofing Services",
  "General Contracting",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" bgImage="/img/full/13.jpg" crumb="Services" />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Do
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Complete Home Remodeling Services
            </h2>
          </div>

          <div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
              We offer a complete range of home improvement and contracting services in Stamford, CT. As a leading general contractor, we handle every project with care and professionalism, ensuring high-quality results every time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((s) => (
                <div key={s} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e3fb4b] shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <div className="border-t border-gray-100">
        <ServicesClient />
      </div>
    </>
  );
}
