import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us - NZ Home Improvement | Stamford, CT Renovation",
  description:
    "NZ Home Improvement is a trusted home renovation and remodeling contractor in Stamford, CT serving Fairfield and Westchester counties.",
  alternates: { canonical: "https://nzhomeimprovement.com/about" },
  openGraph: {
    url: "https://nzhomeimprovement.com/about",
    title: "About Us - NZ Home Improvement | Stamford, CT Renovation",
    description:
      "NZ Home Improvement is a trusted home renovation and remodeling contractor in Stamford, CT serving Fairfield and Westchester counties.",
  },
};

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Trusted General Contractor in Stamford" },
  { img: "/img/partners.png",            label: "Experienced & Skilled Team" },
  { img: "/img/artist.png",             label: "High-Quality Craftsmanship" },
  { img: "/img/price-tag.png",          label: "Affordable & Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const mvv = [
  {
    title: "Our Mission",
    body: "Crafting Quality Spaces – Your Trusted Partner in Residential and Commercial Construction across Connecticut.",
    isLime: true,
  },
  {
    title: "Our Vision",
    body: "To be the most trusted and respected home improvement company in the USA, known for excellence and integrity.",
    isLime: false,
  },
  {
    title: "Our Expertise",
    body: "Offering services in building, renovating, and constructing, we deploy seasoned professionals with top-notch expertise to cater to your every need.",
    isLime: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" bgImage="/img/full/02.jpg" crumb="About" />

      {/* ── Company Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Image composition */}
          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image
                src="/img/full/25.jpg"
                alt="NZ Home Improvement finished project"
                fill
                sizes="(max-width: 1024px) 55vw, 27vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/img/full/18.jpg"
                alt="NZ Home Improvement team at work"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col md:pl-4">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Who We Are
            </p>
            <h2 className="text-[28px] leading-tight md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] mb-6">
              NZ Home Improvement
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              NZ Home Improvement is a trusted general contractor in Stamford, CT, delivering high-quality home remodeling and renovation services. With years of experience, we specialize in transforming homes with precision, professionalism, and attention to detail.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Our team is dedicated to providing reliable service, on-time project completion, and excellent craftsmanship. Whether you need a full home renovation or a small upgrade, we are here to help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-10">
              {["FREE Initial Consultation", "Licensed & Fully Insured", "We Handle Permits & Approvals"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#e3fb4b] shrink-0 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-[14px] bg-[#e3fb4b] hover:bg-[#d6ec3d] text-black text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Expertise ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#e3fb4b] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Foundation
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Mission, Vision & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-[2rem] p-8 md:p-10 flex flex-col ${i === 0 ? "bg-[#e3fb4b]" : "bg-zinc-800"}`}
              >
                <h3 className={`text-xl font-bold mb-4 tracking-tight ${i === 0 ? "text-black" : "text-white"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-[1.8] ${i === 0 ? "text-black/70" : "text-zinc-400"}`}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Strengths
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item) => (
              <div
                key={item.label}
                className="bg-zinc-50 rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-[#e3fb4b] transition-colors duration-300 group"
              >
                <div className="w-16 h-16 relative mb-5">
                  <Image src={item.img} alt={item.label} fill className="object-contain" />
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-snug tracking-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
