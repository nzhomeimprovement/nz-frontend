import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Home Renovation in Stamford CT | Trusted Home Remodeling Contractor",
  description:
    "Get professional home renovation in Stamford CT with expert contractors, modern designs, and affordable remodeling services. Free estimate available.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/home-renovation-stamford-ct" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/home-renovation-stamford-ct",
    title: "Home Renovation in Stamford CT | Trusted Home Remodeling Contractor",
    description:
      "Get professional home renovation in Stamford CT with expert contractors, modern designs, and affordable remodeling services. Free estimate available.",
  },
};

const services = [
  "Full Home Remodeling",
  "Kitchen & Bathroom Upgrades",
  "Flooring & Structural Improvements",
  "Interior Redesign & Painting",
  "Roofing & Exterior Updates",
  "Energy Efficiency Improvements",
];

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Experienced Home Renovation Experts" },
  { img: "/img/partners.png",            label: "High-Quality Craftsmanship" },
  { img: "/img/artist.png",             label: "Custom Design & Planning" },
  { img: "/img/price-tag.png",          label: "Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We understand your requirements, budget, and design preferences for your home." },
  { num: "02", title: "Planning",     desc: "We create a customized renovation plan including layout design, materials, and timeline." },
  { num: "03", title: "Execution",    desc: "Our team manages everything from demolition to finishing with quality and care." },
  { num: "04", title: "Final Inspection", desc: "We maintain regular communication and ensure high-quality results at every stage." },
];

const faqs = [
  {
    q: "What is the average cost of home renovation in Stamford CT?",
    a: "The average cost ranges from $20,000 to over $100,000 depending on project size and materials.",
  },
  {
    q: "How long does a home renovation take?",
    a: "Most home renovation projects take between 4 to 12 weeks depending on complexity.",
  },
  {
    q: "Is home renovation worth it?",
    a: "Yes, it improves comfort, functionality, and increases property value.",
  },
  {
    q: "Can I renovate my home on a budget?",
    a: "Yes, we offer affordable renovation solutions based on your budget and requirements.",
  },
  {
    q: "Do I need permits for home renovation?",
    a: "Yes, some structural, electrical, and plumbing work may require permits depending on local regulations.",
  },
];

export default function HomeRenovationPage() {
  return (
    <>
      <PageHero
        title="Home Renovation in Stamford CT"
        bgImage="/img/full/11.jpg"
        crumb="Home Renovation"
      />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image
                src="/img/full/25.jpg"
                alt="Home renovation project"
                fill
                sizes="(max-width: 1024px) 55vw, 27vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/img/full/02.jpg"
                alt="Complete home remodeling Stamford CT"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:pl-4">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Service Detail
            </p>
            <h2 className="text-[28px] leading-tight md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] mb-6">
              Home Renovation in Stamford CT – Full Service Remodeling Solutions
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are looking for home renovation in Stamford CT, NZ Home Improvement provides complete remodeling solutions designed to upgrade your entire living space. As an experienced home renovation contractor near you, we handle everything from small upgrades to full home transformations with a focus on quality, functionality, and modern design.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Home renovation is not just about improving appearance, it is about creating a more comfortable, efficient, and valuable living environment. Whether you want to update a single room or renovate your whole house, our team ensures every project is completed with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12035247974"
                className="inline-flex items-center justify-center px-8 py-[14px] bg-[#D0956B] hover:bg-[#C4845A] text-black text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-[14px] bg-zinc-900 hover:bg-zinc-700 text-white text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Offer
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Our Home Renovation Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              We offer a wide range of home renovation services in Stamford CT. Whether you are planning a whole home renovation or targeted upgrades, we deliver custom solutions based on your property structure, lifestyle, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={s} className="bg-zinc-800 rounded-[2rem] p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D0956B] shrink-0 flex items-center justify-center text-black font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-white font-medium text-sm">{s}</span>
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
              Why Choose NZ Home Improvement?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item) => (
              <div
                key={item.label}
                className="bg-zinc-50 rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-[#D0956B] transition-colors duration-300"
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

      {/* ── Process ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              How We Work
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Our Home Renovation Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-zinc-800 rounded-[2rem] p-8 flex flex-col">
                <span className="text-[#D0956B] font-bold text-3xl mb-4">{step.num}</span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              FAQ
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-zinc-50 rounded-[1.5rem] p-6 open:bg-[#D0956B] transition-colors duration-300"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer text-sm md:text-base list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="w-6 h-6 rounded-full border border-gray-400 shrink-0 flex items-center justify-center text-xs font-bold">
                    +
                  </span>
                </summary>
                <p className="text-gray-700 text-sm leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-zinc-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
            Get Started Today
          </p>
          <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
            Ready to Renovate Your Home?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement today for expert home renovation in Stamford CT. Call now or request a free estimate to get started!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12035247974"
              className="inline-flex items-center justify-center px-8 py-[14px] bg-[#D0956B] hover:bg-[#C4845A] text-black text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-[14px] bg-white hover:bg-zinc-100 text-black text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
