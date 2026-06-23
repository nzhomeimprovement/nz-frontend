import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Bathroom Renovation in Stamford CT | Affordable Bathroom Remodel Experts",
  description:
    "Get expert bathroom renovation in Stamford CT with modern designs, cost estimates, and affordable remodeling services. Free consultation available.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/bathroom-renovation/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/bathroom-renovation/",
    title: "Bathroom Renovation in Stamford CT | Affordable Bathroom Remodel Experts",
    description:
      "Get expert bathroom renovation in Stamford CT with modern designs, cost estimates, and affordable remodeling services. Free consultation available.",
  },
};

const services = [
  "Full Bathroom Remodeling",
  "Walk-in Shower Installation",
  "Tile & Flooring Installation",
  "Vanity & Cabinet Upgrades",
  "Plumbing & Fixture Replacement",
  "Small Bathroom Renovation",
];

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Experienced Bathroom Renovation Experts" },
  { img: "/img/partners.png",            label: "High-Quality Materials & Finishes" },
  { img: "/img/artist.png",             label: "Custom Design Solutions" },
  { img: "/img/price-tag.png",          label: "Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const processSteps = [
  { num: "01", title: "Consultation",     desc: "We understand your requirements, design preferences, and budget in detail." },
  { num: "02", title: "Design",           desc: "We create a custom renovation plan with layout design and material selection." },
  { num: "03", title: "Construction",     desc: "Our skilled team handles everything from demolition to final installation with care." },
  { num: "04", title: "Final Inspection", desc: "We deliver high-quality results on time and within budget." },
];

const faqs = [
  {
    q: "How much does a small bathroom renovation cost in Stamford CT?",
    a: "A small bathroom renovation cost typically ranges between $5,000 and $15,000 depending on materials and design.",
  },
  {
    q: "What is the average bathroom renovation cost?",
    a: "The average cost of bathroom renovation in Stamford CT is between $8,000 and $25,000.",
  },
  {
    q: "Can I renovate my bathroom on a budget?",
    a: "Yes, we offer affordable bathroom renovation services with cost-effective solutions.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "Most bathroom renovations take 2 to 4 weeks.",
  },
  {
    q: "Do bathroom renovations increase home value?",
    a: "Yes, they significantly improve resale value and buyer appeal.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bathroom Renovation",
  "name": "Bathroom Renovation Stamford CT",
  "description": "Professional bathroom renovation services in Stamford CT. Modern designs, tile work, fixtures, and full bathroom remodels.",
  "url": "https://nzhomeimprovement.com/services/bathroom-renovation/",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://nzhomeimprovement.com/#business",
    "name": "NZ Home Improvement"
  },
  "areaServed": { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
  "image": "https://nzhomeimprovement.com/img/full/20.jpg"
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

export default function BathroomRenovationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        title="Bathroom Renovation Stamford CT"
        bgImage="/img/full/20.jpg"
        crumb="Bathroom Renovation"
      />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image
                src="/img/full/09.jpg"
                alt="Bathroom renovation project"
                fill
                sizes="(max-width: 1024px) 55vw, 27vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/img/full/21.jpg"
                alt="Modern bathroom renovation Stamford CT"
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
              Bathroom Renovation in Stamford CT – Modern, Stylish & Affordable Solutions
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are looking for <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/services/">bathroom renovation Stamford CT</a></strong>, NZ Home Improvement provides professional and customized remodeling services designed to upgrade your space with style and functionality. Our experienced team of bathroom remodelers near you specializes in transforming old and outdated bathrooms into modern, comfortable, and visually appealing spaces.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Whether you are planning a full renovation or a <strong className="text-gray-800">small bathroom remodel</strong>, we focus on delivering high-quality craftsmanship tailored to your needs. A well-designed bathroom not only improves daily comfort but also increases your home&apos;s overall value and appeal. From modern fixtures to elegant tile work and smart storage solutions, we ensure every detail is carefully planned and executed to perfection.
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
      <PortfolioCarousel heading="Bathroom Renovation Projects" />

      {/* ── Services Detail ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Offer
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Our Bathroom Renovation Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              We offer complete bathroom remodeling services in Stamford CT. From walk-in showers to floating vanities, we ensure every detail is completed with precision and high-quality craftsmanship.
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
              Our Bathroom Renovation Process
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
              Bathroom Renovation Cost in Stamford CT
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              One of the most important factors homeowners consider is the bathroom renovation cost. If you are wondering, <strong className="text-gray-800">how much does it cost to renovate a bathroom in Stamford CT?</strong> the answer depends on several factors such as bathroom size, materials, layout changes, and design complexity.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              On average, the <strong className="text-gray-800">cost of bathroom renovation in Stamford CT</strong> ranges from $8,000 to $25,000 or more for luxury upgrades. A basic small bathroom renovation cost may be lower, while high-end remodels with premium finishes can cost significantly more.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We also provide <strong className="text-gray-800">affordable bathroom renovation services</strong> that are designed for homeowners who want quality upgrades within a reasonable budget. Our team provides transparent <strong className="text-gray-800">bathroom renovation cost estimates</strong> so you can plan your project without surprises.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Modern Bathroom Design Ideas &amp; Trends
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Design plays a key role in any successful renovation. We help homeowners explore the latest bathroom renovation ideas that combine style, comfort, and functionality. Popular trends include walk-in showers, floating vanities, LED mirrors, and minimalist designs.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              For compact spaces, we offer creative <strong className="text-gray-800"><a href="http://localhost:3000/portfolio">small bathroom renovation ideas on a budget</a></strong> that maximize space efficiency without compromising on style. Smart storage solutions, light color schemes, and modern fittings can completely transform even the smallest bathrooms.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Whether you prefer a luxury spa-like bathroom or a simple and modern design, our team ensures your vision becomes a reality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              How Long Does a Bathroom Renovation Take?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A common question homeowners ask is, <strong className="text-gray-800">how long does a bathroom renovation take?</strong> The timeline depends on the size and complexity of the project. On average, a <strong className="text-gray-800">bathroom remodel in Stamford CT</strong> takes between 2 to 4 weeks.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Smaller projects may be completed faster, while larger renovations involving plumbing or structural changes may take longer. We always focus on efficient project management to minimize disruption in your home.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Why Choose Our Bathroom Renovation Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Choosing the right contractor for <strong className="text-gray-800">bathroom renovation in Stamford CT</strong> is essential for achieving long-lasting results. At <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/">NZ Home Improvement</a></strong>, we are committed to delivering top-quality workmanship, reliable service, and customer satisfaction.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We use high-quality materials, modern techniques, and expert craftsmanship to ensure your bathroom is not only beautiful but also durable. Whether you are searching for <strong className="text-gray-800">bathroom remodel near you</strong> or a complete renovation solution, we are your trusted local experts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Increase Your Home Value with Bathroom Remodeling
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A professionally renovated bathroom is one of the best investments you can make in your home. A modern and functional bathroom significantly increases property value and improves buyer interest.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Even small upgrades such as new tiles, updated fixtures, or improved lighting can make a big difference. Our <strong className="text-gray-800">bathroom renovation services</strong> are designed to deliver maximum value and long-term benefits.
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
            Ready to Renovate Your Bathroom?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement today for expert bathroom renovation in Stamford CT. Call now or request a free consultation to get started!
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
