import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Home Renovation in Stamford CT | Trusted Home Remodeling Contractor",
  description:
    "Get professional home renovation in Stamford CT with expert contractors, modern designs, and affordable remodeling services. Free estimate available.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/home-renovation/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/home-renovation/",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Home Renovation",
  "name": "Home Renovation Stamford CT",
  "description": "Professional home renovation services in Stamford CT. Full home remodels, interior upgrades, structural improvements, and custom renovations.",
  "url": "https://nzhomeimprovement.com/services/home-renovation/",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://nzhomeimprovement.com/#business",
    "name": "NZ Home Improvement"
  },
  "areaServed": { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
  "image": "https://nzhomeimprovement.com/img/full/11.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
  }))
};

export default function HomeRenovationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        title="Home Renovation Stamford CT"
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
              If you are looking for home renovation Stamford CT, <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/">NZ Home Improvement</a></strong> provides complete remodeling solutions designed to upgrade your entire living space. As an experienced home renovation contractor near you, we handle everything from small upgrades to full home transformations with a focus on quality, functionality, and modern design.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              <strong className="text-gray-800">Home renovation</strong> is not just about improving appearance, it is about creating a more comfortable, efficient, and valuable living environment. Whether you want to update a single room or renovate your whole house, our team ensures every project is completed with precision and care.
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

      {/* ── Portfolio Carousel ── */}
      <PortfolioCarousel heading="Home Renovation Projects" />

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

      {/* ── Rich SEO Content ── */}
      <section className="bg-zinc-50 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Home Renovation Cost in Stamford CT
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              One of the most important questions homeowners ask is about the <strong className="text-gray-800">home renovation cost in Stamford CT</strong>. The cost depends on the size of the home, materials used, and the level of renovation required.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              On average, a basic renovation may start from $20,000, while a full <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/portfolio">home renovation project</a></strong> can go above $100,000 depending on customization and upgrades. We provide clear and detailed home renovation cost estimate so you can plan your project without confusion or hidden charges.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We also offer <strong className="text-gray-800">affordable home renovation options</strong> for homeowners who want to upgrade their space while staying within budget.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Benefits of Home Renovation
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A well-planned <strong className="text-gray-800">home renovation</strong> improves both lifestyle and property value. Upgrading old interiors, improving energy efficiency, and redesigning layouts can make your home more comfortable and modern.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              A professional renovation also increases resale value, making it a smart long-term investment. Many homeowners choose renovation instead of moving because it allows them to stay in their preferred location while enjoying a fully updated home.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Home Renovation Ideas and Trends
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Modern home renovation focuses on open spaces, natural lighting, energy efficiency, and smart storage solutions. Popular <strong className="text-gray-800">home renovation ideas</strong> include open-concept living rooms, modern kitchens, upgraded bathrooms, and finished basements.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We also follow the latest design trends to ensure your home looks modern and stylish while remaining practical for everyday use. Whether you prefer a luxury design or a simple modern upgrade, we tailor everything to your vision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Why Choose Our Home Renovation Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Choosing the right contractor is essential for a successful renovation. We are trusted experts in <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/services">home renovation Stamford CT</a></strong> with years of experience in delivering high-quality residential projects.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We focus on quality workmanship, transparent pricing, and customer satisfaction. Our team uses durable materials and modern techniques to ensure long-lasting results. Every project is handled professionally from start to finish.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Home Renovation ROI and Value Increase
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              <strong className="text-gray-800">Home renovation</strong> is one of the best ways to increase property value. Updated kitchens, modern bathrooms, and improved layouts significantly increase resale potential. Even small upgrades can make a big difference in market appeal.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              If you are planning to sell your home in the future, renovation is a smart investment that can deliver strong returns.
            </p>
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

      {/* ── Google Reviews ── */}
      <GoogleReviews />
    </>
  );
}
