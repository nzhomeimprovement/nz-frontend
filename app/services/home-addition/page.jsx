import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata = {
  title: "Home Addition in Stamford CT | Room Addition & Expansion Experts",
  description:
    "Get professional home addition in Stamford CT with custom design, cost estimates, and trusted contractors near you. Expand your home affordably.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/home-addition" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/home-addition",
    title: "Home Addition in Stamford CT | Room Addition & Expansion Experts",
    description:
      "Get professional home addition in Stamford CT with custom design, cost estimates, and trusted contractors near you. Expand your home affordably.",
  },
};

const services = [
  "Room Additions",
  "Second-Story Additions",
  "Garage Conversions",
  "Sunroom Construction",
  "Extended Kitchen & Living Spaces",
  "Custom Home Addition Design",
];

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Experienced Home Addition Experts" },
  { img: "/img/partners.png",            label: "High-Quality Construction" },
  { img: "/img/artist.png",             label: "Custom Design & Planning" },
  { img: "/img/price-tag.png",          label: "Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const processSteps = [
  { num: "01", title: "Consultation",     desc: "We understand your requirements, budget, and design preferences." },
  { num: "02", title: "Design",           desc: "We create a customized home addition design plan with layout, structure, materials, and timeline." },
  { num: "03", title: "Construction",     desc: "Our team handles everything from foundation work and framing to finishing and final detailing." },
  { num: "04", title: "Final Inspection", desc: "We ensure all work meets local building codes and permit requirements for a smooth process." },
];

const faqs = [
  {
    q: "How much does a home addition cost in Stamford CT?",
    a: "The average home addition cost ranges from $25,000 to over $100,000 depending on size and complexity.",
  },
  {
    q: "How long does a home addition take?",
    a: "Most home addition projects take between 6 to 12 weeks to complete.",
  },
  {
    q: "What is the cheapest type of home addition?",
    a: "Simple room additions or garage conversions are usually the most affordable options.",
  },
  {
    q: "Do I need permits for a home addition?",
    a: "Yes, most home additions require permits for structural, electrical, and plumbing work.",
  },
  {
    q: "Does a home addition increase home value?",
    a: "Yes, it significantly increases property value and improves living space.",
  },
];

export default function HomeAdditionPage() {
  return (
    <>
      <PageHero
        title="Home Addition Stamford CT"
        bgImage="/img/full/25.jpg"
        crumb="Home Addition"
      />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image
                src="/img/full/02.jpg"
                alt="Home addition project"
                fill
                sizes="(max-width: 1024px) 55vw, 27vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/img/full/20.jpg"
                alt="Home expansion services Stamford CT"
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
              Home Addition in Stamford CT – Custom Expansion Solutions
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are planning a home addition in Stamford CT, <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/">NZ Home Improvement</a></strong> provides complete design and construction services to expand your living space with high-quality workmanship. As an experienced <strong className="text-gray-800">home addition contractor near you</strong>, we specialize in creating seamless extensions that blend perfectly with your existing home structure.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              A home addition is one of the most effective ways to increase space without moving to a new house. Whether you need an extra bedroom, larger living area, home office, or second-story expansion, our team delivers custom solutions based on your needs, budget, and property layout.
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
      <PortfolioCarousel heading="Home Addition Projects" />

      {/* ── Services Detail ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Offer
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Types of Home Additions We Offer
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              We provide a wide range of <strong className="text-zinc-200">home addition services</strong> designed to improve functionality and comfort. Each <strong className="text-zinc-200">home addition design</strong> is carefully planned to ensure it matches the style of your existing home. We also specialize in <strong className="text-zinc-200">custom home additions</strong>, allowing homeowners to design fully personalized spaces that fit their lifestyle and long-term goals.
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

      {/* ── Cost & Benefits ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Cost */}
            <div>
              <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Pricing</p>
              <h2 className="text-[24px] md:text-3xl font-bold text-black tracking-[-0.02em] mb-5 leading-tight">
                Home Addition Cost in Stamford CT
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                One of the most important factors in planning a project is the <strong className="text-gray-800">home addition cost in Stamford CT</strong>. The cost depends on the size of the addition, materials used, structural changes, and design complexity.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                On average, a standard home addition may cost between $25,000 and $100,000 or more. Larger or luxury expansions such as second-story additions can cost significantly higher. We provide clear and detailed <strong className="text-gray-800">home addition cost per square foot estimates</strong> so you can plan your budget effectively.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                For homeowners looking for flexible options, we also offer <strong className="text-gray-800">affordable home addition solutions</strong> without compromising quality or durability.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Benefits</p>
              <h2 className="text-[24px] md:text-3xl font-bold text-black tracking-[-0.02em] mb-5 leading-tight">
                Benefits of Adding an Addition to Your Home
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                A home addition provides several long-term benefits. It increases living space, improves functionality, and significantly raises property value. Instead of buying a new house, adding space to your current home allows you to stay in your preferred location while upgrading your lifestyle.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                A well-planned <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/portfolio">home addition project</a></strong> can also improve comfort by creating dedicated spaces such as offices, guest rooms, or entertainment areas. It is one of the best investments for growing families or homeowners needing extra space.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-zinc-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Our Strengths
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Why Choose Our Home Addition Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Choosing the right contractor is essential for a successful project. We are trusted specialists in <strong className="text-gray-800">home addition services in Stamford CT</strong>, known for quality work, transparent pricing, and reliable service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-[#D0956B] transition-colors duration-300"
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
              Home Addition Planning and Design Process
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Our process starts with a detailed consultation where we understand your requirements, budget, and design preferences. After that, we create a customized <strong className="text-zinc-200">home addition design plan</strong> that includes layout, structure, materials, and timeline.
            </p>
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

      {/* ── Timeline & ROI ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Timeline */}
            <div>
              <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Timeline</p>
              <h2 className="text-[24px] md:text-3xl font-bold text-black tracking-[-0.02em] mb-5 leading-tight">
                How Long Does a Home Addition Take?
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                The timeline for a <strong className="text-gray-800">home addition Stamford CT</strong> depends on the size and complexity of the project. On average, most additions take between 6 to 12 weeks. Smaller room additions may take less time, while larger projects such as second-story expansions can take longer.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We always aim for efficient project management while maintaining high construction standards. Our team ensures minimal disruption to your daily life during the construction process.
              </p>
            </div>

            {/* ROI */}
            <div>
              <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Return on Investment</p>
              <h2 className="text-[24px] md:text-3xl font-bold text-black tracking-[-0.02em] mb-5 leading-tight">
                Home Addition Value and ROI
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
                A professionally built home addition significantly increases property value. Extra rooms, larger living spaces, and improved layouts make your home more attractive to future buyers.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Even a small addition can deliver a strong return on investment, especially in high-demand areas like Stamford CT. Whether you plan to sell in the future or stay long-term, a home addition is a smart financial decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Rich SEO Content ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Why Choose Our Home Addition Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Choosing the right contractor is essential for a successful project. We are trusted specialists in <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/services">home addition services in Stamford CT</a></strong>, known for quality work, transparent pricing, and reliable service.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our team uses high-quality materials and modern construction techniques to ensure durability and long-lasting results. Every project is customized to meet the unique needs of each homeowner, ensuring complete satisfaction from start to finish.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Home Addition Value and ROI
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A professionally built <strong className="text-gray-800">home addition</strong> significantly increases property value. Extra rooms, larger living spaces, and improved layouts make your home more attractive to future buyers.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Even a small addition can deliver a strong return on investment, especially in high-demand areas like Stamford CT. Whether you plan to sell in the future or stay long-term, a home addition is a smart financial decision.
            </p>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-zinc-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              FAQ
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              FAQs – Home Addition in Stamford CT
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-[1.5rem] p-6 open:bg-[#D0956B] transition-colors duration-300"
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
            Ready to Expand Your Home?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement today for expert home addition in Stamford CT. Call now or request a free estimate to get started!
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
