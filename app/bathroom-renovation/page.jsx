import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Bathroom Renovation Stamford CT | NZ Home Improvement",
  description:
    "Bathroom renovation in Stamford CT by NZ Home Improvement. Get custom designs, expert remodeling, and a free consultation for your bathroom project.",
  alternates: { canonical: "https://nzhomeimprovement.com/bathroom-renovation/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/bathroom-renovation/",
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
    q: "How much does a bathroom renovation cost in Stamford CT?",
    a: "Bathroom renovation costs in Stamford CT vary based on the bathroom size, materials, fixtures, layout changes, and overall project scope. NZ Home Improvement provides personalized estimates based on your project.",
  },
  {
    q: "How much does a small bathroom remodel cost in Stamford CT?",
    a: "A small bathroom remodel can cost less than a full renovation, depending on the materials, fixtures, and changes required. We can provide a project-specific estimate based on your bathroom and budget.",
  },
  {
    q: "Can I remodel my bathroom on a budget?",
    a: "Yes. A bathroom can be updated on a budget by choosing cost-effective materials, updating fixtures, improving storage, and focusing on the areas that need the most improvement.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "Most bathroom remodeling projects take around 2 to 4 weeks, although the timeline can vary depending on the size of the bathroom and whether plumbing, electrical, or structural work is required.",
  },
  {
    q: "Does bathroom remodeling increase home value?",
    a: "A professionally remodeled bathroom can improve your home's appearance, functionality, and buyer appeal. The value added depends on the quality and scope of the renovation and the local market.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nzhomeimprovement.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nzhomeimprovement.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Bathroom Renovation", "item": "https://nzhomeimprovement.com/bathroom-renovation/" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://nzhomeimprovement.com/bathroom-renovation/#service",
  "serviceType": "Bathroom Renovation",
  "name": "Bathroom Renovation Stamford CT",
  "description": "Professional bathroom renovation services in Stamford CT. Modern designs, tile work, fixtures, and full bathroom remodels.",
  "url": "https://nzhomeimprovement.com/bathroom-renovation/",
  "provider": { "@id": "https://nzhomeimprovement.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
    { "@type": "AdministrativeArea", "name": "Fairfield County", "addressRegion": "CT" }
  ],
  "image": "https://nzhomeimprovement.com/img/gallery/bathroom/1.jpeg",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bathroom Renovation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Bathroom Remodeling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walk-in Shower Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tile & Flooring Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vanity & Cabinet Upgrades" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing & Fixture Replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Bathroom Renovation" } }
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

function getBathroomPhotos() {
  const dir = path.join(process.cwd(), "public", "img", "gallery", "bathroom");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f) => ({ src: `/img/gallery/bathroom/${f}`, alt: "Bathroom renovation project - NZ Home Improvement Stamford CT" }));
}

export default function BathroomRenovationPage() {
  const bathroomPhotos = getBathroomPhotos();
  const [introImg1, introImg2] = bathroomPhotos;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
              {introImg1 && (
                <Image
                  src={introImg1.src}
                  alt="Bathroom renovation project"
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
                  alt="Modern bathroom renovation Stamford CT"
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
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 lg:w-11/12">
              If you are planning a bathroom renovation in Stamford, CT, NZ Home Improvement provides professional and customized remodeling services designed to improve your space, comfort, and functionality. Our experienced bathroom remodeling team helps homeowners transform outdated bathrooms into modern, practical, and visually appealing spaces with designs tailored to their needs and budget.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 lg:w-11/12">
              Whether you are planning a complete bathroom renovation or a smaller bathroom remodel, we focus on quality craftsmanship and thoughtful design from start to finish. From modern fixtures and elegant tile work to practical layouts and smart storage solutions, every detail is carefully planned around your goals. A well-designed bathroom can improve everyday comfort, enhance your home's appeal, and add long-term value to your Stamford property.
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
      <PortfolioCarousel heading="Bathroom Renovation Projects" photos={bathroomPhotos} />

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
              Get expert bathroom remodeling guidance from NZ Home Improvement. Contact us today to discuss your project and receive a personalized estimate.
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

    {/* Bathroom Renovation Cost */}
    <div>
      <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
        Bathroom Renovation Cost in Stamford CT
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        One of the most important factors homeowners consider is the bathroom renovation cost. If you are wondering,{" "}
        <strong className="text-gray-800">
          how much does it cost to renovate a bathroom in Stamford CT?
        </strong>{" "}
        the answer depends on several factors such as bathroom size, materials, layout changes, and design complexity.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        On average, the{" "}
        <strong className="text-gray-800">
          cost of bathroom renovation in Stamford CT
        </strong>{" "}
        ranges from $8,000 to $25,000 or more for luxury upgrades. A basic small bathroom renovation cost may be lower, while high-end remodels with premium finishes can cost significantly more.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        We also provide{" "}
        <strong className="text-gray-800">
          affordable bathroom renovation services
        </strong>{" "}
        that are designed for homeowners who want quality upgrades within a reasonable budget. Our team provides transparent{" "}
        <strong className="text-gray-800">
          bathroom renovation cost estimates
        </strong>{" "}
        so you can plan your project without surprises. For a complete pricing breakdown, see our{" "}
        <a
          href="/blog/bathroom-remodeling-cost-stamford-ct/"
          className="hover:underline"
        >
          bathroom remodeling cost guide
        </a>
        .
      </p>
    </div>

    {/* Bathroom Design Ideas */}
    <div>
      <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
        Modern Bathroom Design Ideas &amp; Trends
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        Design plays a key role in any successful renovation. We help homeowners explore the latest{" "}
        <strong className="text-gray-800">
          bathroom renovation ideas
        </strong>{" "}
        that combine style, comfort, and functionality. Popular trends include{" "}
        <a
          href="/blog/walk-in-shower-vs-bathtub-stamford-ct/"
          className="hover:underline"
        >
          walk-in showers
        </a>
        , floating vanities, LED mirrors, and minimalist designs.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        For compact spaces, we offer creative{" "}
        <strong className="text-gray-800">
          <a
            href="/blog/bathroom-remodel-ideas-small-bathrooms-stamford-ct/"
            className="hover:underline"
          >
            small bathroom renovation ideas on a budget
          </a>
        </strong>{" "}
        that maximize space efficiency without compromising on style. Smart storage solutions, light color schemes, and modern fittings can completely transform even the smallest bathrooms.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        Whether you prefer a luxury spa-like bathroom or a simple and modern design, our team ensures your vision becomes a reality.
      </p>
    </div>

    {/* Bathroom Renovation Timeline */}
    <div>
      <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
        How Long Does a Bathroom Renovation Take?
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        A common question homeowners ask is,{" "}
        <strong className="text-gray-800">
          how long does a bathroom renovation take?
        </strong>{" "}
        The timeline depends on the size and complexity of the project. On average, a{" "}
        <strong className="text-gray-800">
          bathroom remodel in Stamford CT
        </strong>{" "}
        takes between 2 to 4 weeks.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        Smaller projects may be completed faster, while larger renovations involving plumbing or structural changes may take longer. We always focus on efficient project management to minimize disruption in your home.
      </p>
    </div>

    {/* Why Choose NZ Home Improvement */}
    <div>
      <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
        Why Choose NZ Home Improvement for Bathroom Remodeling in Stamford CT?
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        Choosing the right contractor for{" "}
        <strong className="text-gray-800">
          bathroom renovation in Stamford CT
        </strong>{" "}
        is essential for achieving long-lasting results. At{" "}
        <strong className="text-gray-800">
          <a href="/" className="hover:underline">
            NZ Home Improvement
          </a>
        </strong>
        , we are committed to delivering top-quality workmanship, reliable service, and customer satisfaction.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        We use high-quality materials, modern techniques, and expert craftsmanship to ensure your bathroom is not only beautiful but also durable. Explore our{" "}
        <strong className="text-gray-800">
          <a href="/services/" className="hover:underline">
            home remodeling services
          </a>
        </strong>{" "}
        to see how we can help improve your bathroom and other areas of your home. Whether you are searching for{" "}
        <strong className="text-gray-800">
          bathroom remodeling near you
        </strong>{" "}
        or a complete renovation solution, we are your trusted local experts.
      </p>
    </div>

    {/* Home Value */}
    <div>
      <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">
        How Bathroom Remodeling Can Increase Your Stamford CT Home Value
      </h2>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
        A professionally renovated bathroom is one of the best investments you can make in your home. A modern and functional bathroom can improve everyday comfort, enhance your home's appeal, and increase buyer interest.
      </p>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        Even small upgrades such as new tiles, updated fixtures, or improved lighting can make a big difference. Our{" "}
        <strong className="text-gray-800">
          bathroom renovation services
        </strong>{" "}
        are designed to deliver lasting value and practical benefits for Stamford homeowners. Learn more about{" "}
        <a
          href="/blog/home-remodeling-roi-stamford-ct-2026/"
          className="hover:underline"
        >
          home remodeling ROI in Stamford CT
        </a>
        .
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

      {/* ── Bathroom Photo Grid ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
              Photo Gallery
            </p>
            <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
              Bathroom Renovation Photos
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Browse our completed bathroom renovation projects across Stamford, CT and Fairfield County.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {bathroomPhotos.map((photo) => (
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
