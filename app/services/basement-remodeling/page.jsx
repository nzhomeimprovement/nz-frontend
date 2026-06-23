import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Basement Remodeling in Stamford CT | Expert Basement Finishing Services",
  description:
    "Get professional basement remodeling in Stamford CT with cost estimates, modern ideas, and affordable renovation services near you.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/basement-remodeling/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/basement-remodeling/",
    title: "Basement Remodeling in Stamford CT | Expert Basement Finishing Services",
    description:
      "Get professional basement remodeling in Stamford CT with cost estimates, modern ideas, and affordable renovation services near you.",
  },
};

const services = [
  "Basement Finishing & Framing",
  "Home Theater Setup",
  "Guest Suite & Bedroom Conversion",
  "Home Office Design",
  "Gym & Recreation Rooms",
  "Lighting, Flooring & Insulation",
];

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Experienced Basement Remodeling Experts" },
  { img: "/img/partners.png",            label: "High-Quality Craftsmanship" },
  { img: "/img/artist.png",             label: "Custom Design Solutions" },
  { img: "/img/price-tag.png",          label: "Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const processSteps = [
  { num: "01", title: "Consultation",     desc: "We understand your needs, budget, and design preferences for the space." },
  { num: "02", title: "Planning",         desc: "We create a customized plan with layout design, material selection, and timeline." },
  { num: "03", title: "Construction",     desc: "Our skilled team handles everything from framing and insulation to flooring and finishing." },
  { num: "04", title: "Final Inspection", desc: "We maintain clear communication and ensure quality before project completion." },
];

const faqs = [
  {
    q: "How much does basement remodeling cost in Stamford CT?",
    a: "The average basement remodel cost ranges from $10,000 to $40,000 depending on size and design.",
  },
  {
    q: "How long does basement remodeling take?",
    a: "Most basement projects take between 3 to 8 weeks.",
  },
  {
    q: "Can I remodel my basement on a budget?",
    a: "Yes, we offer affordable basement remodeling services with cost-effective design options.",
  },
  {
    q: "Does basement remodeling increase home value?",
    a: "Yes, it significantly increases usable space and resale value.",
  },
  {
    q: "What can I turn my basement into?",
    a: "You can convert it into a home office, gym, guest room, entertainment area, or rental unit.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Basement Remodeling",
  "name": "Basement Remodeling Stamford CT",
  "description": "Professional basement remodeling and finishing services in Stamford CT. Transform your basement into a living space, home office, gym, or entertainment area.",
  "url": "https://nzhomeimprovement.com/services/basement-remodeling/",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://nzhomeimprovement.com/#business",
    "name": "NZ Home Improvement"
  },
  "areaServed": { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
  "image": "https://nzhomeimprovement.com/img/full/21.jpg"
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

export default function BasementRemodelingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        title="Basement Remodeling Stamford CT"
        bgImage="/img/full/21.jpg"
        crumb="Basement Remodeling"
      />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image
                src="/img/full/09.jpg"
                alt="Basement renovation project"
                fill
                sizes="(max-width: 1024px) 55vw, 27vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/img/full/20.jpg"
                alt="Finished basement remodeling Stamford CT"
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
              Basement Remodeling in Stamford CT – Transform Unused Space into Living Area
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are looking for <strong className="text-gray-800">basement remodeling in Stamford CT</strong>, NZ Home Improvement provides expert solutions to transform your unused basement into a functional and beautiful living space. Our experienced team of <strong className="text-gray-800"><a href="http://localhost:3000/services">basement remodel contractors</a></strong> specializes in designing and building customized basement areas that match your lifestyle and needs.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Whether you want a cozy family room, home office, guest bedroom, gym, or entertainment area, we turn your vision into reality. A well-designed basement remodel not only increases usable space but also adds significant value to your home. From planning to finishing, we ensure every detail is handled professionally with high-quality workmanship and modern design standards.
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
      <PortfolioCarousel heading="Basement Remodeling Projects" />

      {/* ── Services Detail ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Offer
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Our Basement Remodeling Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              We offer complete basement renovation services in Stamford CT. Whether you prefer a luxury setup or a budget-friendly upgrade, we customize the design based on your goals.
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
              Our Basement Remodeling Process
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
              Basement Remodel Cost in Stamford CT
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              One of the most important factors homeowners consider is the <strong className="text-gray-800">basement remodel cost</strong>. If you are wondering, how much does it cost to remodel a basement in Stamford CT? the answer depends on size, layout, materials, and required structural work.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              On average, the <strong className="text-gray-800">basement remodeling cost in Stamford CT</strong> ranges between $10,000 and $40,000 or more. A basic finishing project may cost less, while a fully customized basement with bathrooms, kitchens, or entertainment setups may cost more.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We also provide <strong className="text-gray-800">affordable basement remodeling services</strong> and transparent basement remodeling cost estimates near you, helping you plan your project with confidence and no hidden charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Basement Remodeling Ideas for Modern Homes
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Design plays a key role in basement transformation. We help homeowners explore creative <strong className="text-gray-800">basement remodeling ideas</strong> that maximize space and functionality.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Popular options include home theaters, guest suites, playrooms, fitness areas, and home offices. For smaller spaces, we offer <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/portfolio">small basement remodel ideas</a></strong> that focus on smart storage, lighting, and layout optimization.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Whether you prefer a luxury setup or a budget-friendly upgrade, we customize the design based on your goals and budget.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Benefits of Basement Remodeling
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Investing in <strong className="text-gray-800">basement remodeling in Stamford CT</strong> provides multiple benefits. It increases your home&apos;s usable space without the need for expansion, improves property value, and enhances lifestyle comfort.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              A finished basement can also generate extra income if converted into a rental unit or guest suite. Additionally, it improves energy efficiency and overall home organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              How Long Does a Basement Remodel Take?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A common question is, <strong className="text-gray-800">how long does a basement remodel take?</strong> The timeline depends on the size and complexity of the project. On average, a <strong className="text-gray-800">basement remodeling project in Stamford CT</strong> takes 3 to 8 weeks.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Smaller finishing projects may take less time, while full renovations with additional rooms or bathrooms may take longer. We ensure efficient project management to complete work on schedule.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Why Choose Our Basement Remodeling Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Choosing the right contractor is important for a successful renovation. At NZ Home Improvement, we are trusted experts in <strong className="text-gray-800">basement remodeling Stamford CT</strong>, known for quality work, reliable service, and customer satisfaction.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We use high-quality materials, modern techniques, and skilled craftsmanship to ensure long-lasting results. Whether you are searching for <strong className="text-gray-800">basement remodelers near you</strong> or a complete renovation solution, we are your trusted local experts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Increase Your Home Value with Basement Remodeling
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A finished basement is one of the best ways to increase property value. It adds functional square footage and makes your home more attractive to buyers.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Even small improvements like better lighting, flooring, and layout changes can significantly enhance the space. Our <strong className="text-gray-800">basement remodeling services</strong> are designed to deliver maximum return on investment.
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
            Ready to Remodel Your Basement?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement today for expert basement remodeling in Stamford CT. Call now or request a free estimate to get started!
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
