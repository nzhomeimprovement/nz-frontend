import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Kitchen Remodeling Stamford CT | Affordable Kitchen Remodel Experts",
  description:
    "Looking for kitchen remodeling in Stamford CT? Get expert remodelers, modern design ideas, and accurate kitchen remodel cost estimates. Free consultation available.",
  alternates: { canonical: "https://nzhomeimprovement.com/services/kitchen-remodeling/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/services/kitchen-remodeling/",
    title: "Kitchen Remodeling in Stamford CT | Affordable Kitchen Remodel Experts",
    description:
      "Looking for kitchen remodeling in Stamford CT? Get expert remodelers, modern design ideas, and accurate kitchen remodel cost estimates. Free consultation available.",
  },
};

const services = [
  "Custom Cabinet Design & Installation",
  "Countertop Replacement",
  "Kitchen Layout Redesign",
  "Flooring & Tile Work",
  "Lighting & Plumbing Upgrades",
  "Small Kitchen Remodel Solutions",
];

const whyUsItems = [
  { img: "/img/construction-worker.png", label: "Experienced Kitchen Remodeling Experts" },
  { img: "/img/partners.png",            label: "High-Quality Materials & Craftsmanship" },
  { img: "/img/artist.png",             label: "Custom Design Solutions" },
  { img: "/img/price-tag.png",          label: "Transparent Pricing" },
  { img: "/img/task-management.png",    label: "On-Time Project Completion" },
  { img: "/img/customer-review.png",    label: "Customer Satisfaction Guaranteed" },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We understand your goals, budget, and design preferences for your kitchen." },
  { num: "02", title: "Design",       desc: "We create a custom plan with layout design, material selection, and timeline." },
  { num: "03", title: "Construction", desc: "Our skilled team handles everything from demolition to installation professionally." },
  { num: "04", title: "Final Touch",  desc: "We deliver a stress-free remodeling experience with outstanding results." },
];

const faqs = [
  {
    q: "How much does a small kitchen remodel cost in Stamford CT?",
    a: "A small kitchen remodel cost typically ranges from $10,000 to $25,000 depending on materials and design.",
  },
  {
    q: "What is the average kitchen remodel cost?",
    a: "The average cost to remodel a kitchen in Stamford CT is between $15,000 and $50,000.",
  },
  {
    q: "Can I do a kitchen remodel on a budget?",
    a: "Yes, with proper planning and cost-effective materials, a budget kitchen remodel can deliver excellent results.",
  },
  {
    q: "How long does a kitchen remodeling project take?",
    a: "Most projects take between 2 to 10 weeks depending on size and complexity.",
  },
  {
    q: "Do I need permits for kitchen remodeling?",
    a: "Yes, permits may be required for electrical, plumbing, and structural work.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nzhomeimprovement.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nzhomeimprovement.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Kitchen Remodeling", "item": "https://nzhomeimprovement.com/services/kitchen-remodeling/" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://nzhomeimprovement.com/services/kitchen-remodeling/#service",
  "serviceType": "Kitchen Remodeling",
  "name": "Kitchen Remodeling Stamford CT",
  "description": "Professional kitchen remodeling services in Stamford CT. Modern designs, custom cabinets, countertops, and full kitchen renovations.",
  "url": "https://nzhomeimprovement.com/services/kitchen-remodeling/",
  "provider": { "@id": "https://nzhomeimprovement.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
    { "@type": "AdministrativeArea", "name": "Fairfield County", "addressRegion": "CT" }
  ],
  "image": "https://nzhomeimprovement.com/img/gallery/kitchen/1.jpeg",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kitchen Remodeling Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Cabinet Design & Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Countertop Replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Layout Redesign" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring & Tile Work" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lighting & Plumbing Upgrades" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Kitchen Remodel Solutions" } }
    ]
  }
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

function getKitchenPhotos() {
  const dir = path.join(process.cwd(), "public", "img", "gallery", "kitchen");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f) => ({ src: `/img/gallery/kitchen/${f}`, alt: "Kitchen remodeling project - NZ Home Improvement Stamford CT" }));
}

export default function KitchenRemodelingPage() {
  const kitchenPhotos = getKitchenPhotos();
  const [introImg1, introImg2] = kitchenPhotos;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        title="Kitchen Remodeling Stamford CT"
        bgImage="/img/full/09.jpg"
        crumb="Kitchen Remodeling"
      />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              {introImg1 && (
                <Image
                  src={introImg1.src}
                  alt="Kitchen renovation project"
                  fill
                  sizes="(max-width: 1024px) 55vw, 27vw"
                  className="object-cover object-center"
                />
              )}
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              {introImg2 && (
                <Image
                  src={introImg2.src}
                  alt="Modern kitchen remodeling Stamford CT"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover object-center"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col md:pl-4">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Service Detail
            </p>
            <h2 className="text-[28px] leading-tight md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] mb-6">
              Kitchen Remodeling in Stamford CT – Modern, Affordable & Custom Designs
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are planning <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/services">kitchen remodeling Stamford CT</a></strong>, choosing the right contractor is the most important step toward achieving your dream kitchen. At <strong className="text-gray-800">NZ Home Improvement</strong>, we provide high-quality and customized kitchen renovation solutions designed to improve both functionality and aesthetics. Our experienced team ofkitchen remodelers near you specializes in transforming outdated kitchens into modern, stylish, and highly efficient spaces.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Whether you want a complete transformation or a small kitchen remodel, we focus on delivering results that match your vision and budget. From layout redesign to finishing touches, every aspect of your <strong className="text-gray-800">kitchen renovation</strong> is handled with precision and care. A well-designed kitchen not only enhances your daily lifestyle but also significantly increases your property value.
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
      <PortfolioCarousel heading="Kitchen Remodeling Projects" photos={kitchenPhotos} />

      {/* ── Services Detail ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              What We Offer
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight">
              Our Kitchen Remodeling Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              We offer complete kitchen renovation services in Stamford CT. Whether you are upgrading cabinets, replacing countertops, or doing a full renovation, we ensure you get the best value for your investment.
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
              Our Kitchen Remodeling Process
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
              Kitchen Remodel Cost in Stamford CT
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              One of the most common questions homeowners ask is, how much does a kitchen remodel cost in Stamford CT? The answer depends on several factors, including the size of your kitchen, the materials you choose, and the complexity of the design. On average, the <strong className="text-gray-800">kitchen remodel cost in Stamford CT</strong> ranges between $15,000 and $50,000 or more for high-end projects.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              For homeowners looking for cost-effective solutions, we offer kitchen remodel on a budget options that deliver great results without overspending. Our team provides a detailed and transparent <strong className="text-gray-800">kitchen remodel cost estimate</strong> so you can plan your project with confidence. Whether you are upgrading cabinets, replacing countertops, or doing a full renovation, we ensure you get the best value for your investment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Custom Kitchen Designs &amp; Modern Remodeling Ideas
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              A successful renovation starts with the right design. We help homeowners explore the latest <strong className="text-gray-800">kitchen remodel ideas 2025</strong> to create spaces that are both functional and visually appealing. Popular trends include open-concept layouts, smart storage solutions, quartz countertops, and energy-efficient appliances.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              If you have limited space, we also specialize in <strong className="text-gray-800"><a href="http://localhost:3000/portfolio">small kitchen remodel ideas</a></strong> that maximize every inch of your kitchen. From clever cabinet designs to space-saving layouts, we ensure your kitchen feels larger and more organized. Whether you are interested in a luxury upgrade or a <strong className="text-gray-800">cheap kitchen remodel</strong>, our team works closely with you to bring your ideas to life.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              How Long Does a Kitchen Remodel Take?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Many homeowners ask, <strong className="text-gray-800">how long does a kitchen remodel take?</strong> The duration depends on the scope of the project. A smaller renovation may take around 2 to 4 weeks, while a complete kitchen remodel can take 6 to 10 weeks or longer.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We prioritize efficient project management to ensure your renovation is completed on time without compromising quality. Our team works diligently to minimize disruption and deliver your new kitchen as quickly as possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Why Choose Our Kitchen Remodeling Services?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              When it comes to <strong className="text-gray-800">kitchen remodeling Stamford CT</strong>, experience and reliability matter. At <strong className="text-gray-800"><a href="https://nzhomeimprovement.com/">NZ Home Improvement</a></strong>, we are committed to providing top-quality services that exceed customer expectations. Our team uses high-quality materials, modern techniques, and proven strategies to deliver long-lasting results.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We understand that every homeowner has unique needs, which is why we offer personalized solutions tailored to your lifestyle and budget. Whether you are looking for a high-end renovation or an affordable upgrade, we are your trusted partner for <strong className="text-gray-800">kitchen remodeling near you</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
              Increase Your Home Value with Kitchen Remodeling
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              Investing in a <strong className="text-gray-800">kitchen remodel</strong> is one of the best ways to increase your home&apos;s value. A modern and functional kitchen attracts potential buyers and improves your overall living experience. Even small upgrades can make a big difference in both appearance and usability.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              From improving layout efficiency to upgrading materials, our <strong className="text-gray-800">kitchen remodeling services</strong> are designed to deliver maximum return on investment. If you are planning to sell your home or simply want to enjoy a better space, a professional kitchen renovation is a smart choice.
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
            Ready to Upgrade Your Kitchen?
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement today for professional kitchen remodeling in Stamford CT. Call now or request a free consultation to get started!
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

      {/* ── Kitchen Photo Grid ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Photo Gallery
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Kitchen Remodeling Photos
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Browse our completed kitchen remodeling projects across Stamford, CT and Fairfield County.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {kitchenPhotos.map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviews />
    </>
  );
}
