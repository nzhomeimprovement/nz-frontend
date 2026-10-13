import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";
import { areaPages } from "@/data/areaPages";

const BASE = "https://nzhomeimprovement.com";

export function areaMetadata(page) {
  const url = `${BASE}/${page.slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { url, title: page.metaTitle, description: page.metaDescription },
  };
}

function getPhotos(gallery, alt) {
  const dir = path.join(process.cwd(), "public", "img", "gallery", gallery);
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f) => ({ src: `/img/gallery/${gallery}/${f}`, alt }));
}

function CtaButtons({ dark = false }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="tel:+12035247974"
        className="inline-flex items-center justify-center px-8 py-[14px] bg-[#D0956B] hover:bg-[#C4845A] text-black text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className={`inline-flex items-center justify-center px-8 py-[14px] text-[15px] font-medium rounded-full shadow-sm transition-all duration-300 hover:scale-105 ${
          dark ? "bg-white hover:bg-zinc-100 text-black" : "bg-zinc-900 hover:bg-zinc-700 text-white"
        }`}
      >
        Get a Free Estimate
      </Link>
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead, dark = false }) {
  return (
    <div className="text-center mb-12">
      <p className={`font-semibold uppercase tracking-[0.2em] text-[11px] mb-3 ${dark ? "text-[#D0956B]" : "text-gray-400"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-[28px] md:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.02em] leading-tight ${dark ? "text-white" : "text-black"}`}>
        {title}
      </h2>
      {lead && (
        <p className={`text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto ${dark ? "text-zinc-400" : "text-gray-500"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

function Paragraphs({ items, className = "text-gray-500" }) {
  return items.map((p) => (
    <p key={p} className={`${className} text-sm md:text-base leading-relaxed mb-4 last:mb-0`}>
      {p}
    </p>
  ));
}

export default function AreaPage({ page }) {
  const photos = getPhotos(page.gallery, page.galleryAlt);
  const [introImg1, introImg2] = photos;
  const url = `${BASE}/${page.slug}/`;

  // Detail sections get their own photo while unique gallery photos last; the rest fall into a card grid.
  const detailPhotos = photos.slice(2);
  const details = page.details || [];
  const imageDetails = details.slice(0, detailPhotos.length);
  const gridDetails = details.slice(detailPhotos.length);

  const otherAreas = areaPages.filter((p) => p.slug !== page.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: page.title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: page.serviceType,
    name: page.title,
    description: page.metaDescription,
    url,
    provider: { "@id": `${BASE}/#business` },
    areaServed: [
      { "@type": "City", name: "Greenwich", addressRegion: "CT" },
      { "@type": "AdministrativeArea", name: "Fairfield County", addressRegion: "CT" },
    ],
    image: introImg1 ? `${BASE}${introImg1.src}` : undefined,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <PageHero title={page.title} bgImage={page.heroImage} crumb={page.title} />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="relative w-full h-[380px] md:h-[500px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              {introImg1 && (
                <Image src={introImg1.src} alt={page.galleryAlt} fill sizes="(max-width: 1024px) 55vw, 27vw" className="object-cover object-center" />
              )}
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              {introImg2 && (
                <Image src={introImg2.src} alt={page.galleryAlt} fill sizes="(max-width: 1024px) 60vw, 30vw" className="object-cover object-center" />
              )}
            </div>
          </div>

          <div className="flex flex-col md:pl-4">
            <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Greenwich, CT</p>
            <h2 className="text-2xl md:text-[32px] font-bold text-black tracking-tight leading-tight mb-6">
              {page.intro.heading}
            </h2>
            <div className="lg:w-11/12 mb-8">
              <Paragraphs items={page.intro.paragraphs} />
              {page.intro.callout && (
                <p className="text-gray-800 font-semibold text-sm md:text-base leading-relaxed mt-4">{page.intro.callout}</p>
              )}
            </div>
            <CtaButtons />
          </div>
        </div>
      </section>

      {/* ── Overview (general contractor) ── */}
      {page.overview && (
        <section className="bg-zinc-50 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-[32px] font-bold text-black tracking-tight leading-tight mb-6">
              {page.overview.heading}
            </h2>
            <Paragraphs items={page.overview.paragraphs} />
          </div>
        </section>
      )}

      {/* ── Service list ── */}
      {page.serviceList && (
        <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-7xl mx-auto">
            <SectionHeading dark eyebrow="What We Offer" title={page.serviceList.heading} lead={page.serviceList.lead} />
            {page.serviceList.listIntro && (
              <p className="text-white font-medium text-sm md:text-base text-center -mt-4 mb-8">{page.serviceList.listIntro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.serviceList.items.map((s, i) => (
                <div key={s} className="bg-zinc-800 rounded-[2rem] p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D0956B] shrink-0 flex items-center justify-center text-black font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-white font-medium text-sm">{s}</span>
                </div>
              ))}
            </div>
            {page.serviceList.outro && (
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-10 text-center max-w-2xl mx-auto">
                {page.serviceList.outro}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── Service cards (general contractor) ── */}
      {page.serviceCards && (
        <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-7xl mx-auto">
            <SectionHeading dark eyebrow="What We Offer" title={page.serviceCards.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.serviceCards.items.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group bg-zinc-800 rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative aspect-video bg-zinc-700">
                    <Image src={card.img} alt={`${card.title} - NZ Home Improvement Greenwich CT`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                    <Paragraphs items={card.paragraphs} className="text-zinc-400" />
                    <span className="mt-auto pt-4 text-[#D0956B] text-sm font-semibold">Learn more ›</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Detail sections with photos ── */}
      {imageDetails.length > 0 && (
        <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
            {imageDetails.map((d, i) => (
              <div key={d.heading} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-sm ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={detailPhotos[i].src} alt={`${d.heading} - NZ Home Improvement`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div>
                  <span className="text-[#D0956B] font-bold text-sm tracking-[0.2em]">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mt-2 mb-5">{d.heading}</h2>
                  <Paragraphs items={d.paragraphs} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Remaining detail sections ── */}
      {gridDetails.length > 0 && (
        <section className="bg-zinc-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridDetails.map((d) => (
              <div key={d.heading} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">{d.heading}</h2>
                <Paragraphs items={d.paragraphs} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Portfolio Carousel ── */}
      <PortfolioCarousel heading={`${page.serviceType} Projects`} photos={photos} />

      {/* ── Process ── */}
      <section className="py-16 lg:py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <SectionHeading dark eyebrow="How We Work" title={page.process.heading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.process.steps.map((step) => (
              <div key={step.num} className="bg-zinc-800 rounded-[2rem] p-8 flex flex-col">
                <span className="text-[#D0956B] font-bold text-3xl mb-4">{step.num}</span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Our Strengths" title={page.whyUs.heading} />
          {page.whyUs.paragraphs && (
            <div className="max-w-3xl mx-auto text-center -mt-4">
              <Paragraphs items={page.whyUs.paragraphs} />
            </div>
          )}
          {page.whyUs.items && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${page.whyUs.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {page.whyUs.items.map((item) => (
              <div key={item.title} className="group bg-zinc-50 rounded-[2rem] p-8 flex flex-col hover:bg-[#D0956B] transition-colors duration-300">
                <span className="w-10 h-10 rounded-full bg-[#D0956B] group-hover:bg-zinc-900 text-black group-hover:text-[#D0956B] flex items-center justify-center font-bold mb-5 transition-colors duration-300">
                  ✓
                </span>
                <h3 className="font-bold text-gray-900 text-base leading-snug tracking-tight mb-2">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-900 text-sm leading-relaxed transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* ── Closing content ── */}
      {page.closingSections?.length > 0 && (
        <section className="bg-zinc-50 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-4xl mx-auto space-y-12">
            {page.closingSections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-4">{s.heading}</h2>
                <Paragraphs items={s.paragraphs} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-24 bg-white font-sans">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="flex flex-col gap-3.5">
            {page.faqs.map((faq) => (
              <details key={faq.q} open className="group bg-[#FAFAFA] rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <summary className="flex items-center justify-between p-5 md:px-6 md:py-[22px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[15px] md:text-base text-gray-800 font-medium pr-8">{faq.q}</h3>
                  <ChevronDown className="shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="px-5 md:px-6 pb-6 pt-1 text-[15px] text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-zinc-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">Get Started Today</p>
          <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
            {page.cta.heading}
          </h2>
          {page.cta.lead && <p className="text-white text-base md:text-lg font-medium mb-4">{page.cta.lead}</p>}
          <div className="max-w-xl mx-auto mb-10">
            <Paragraphs items={page.cta.paragraphs} className="text-zinc-400" />
          </div>
          <div className="flex justify-center">
            <CtaButtons dark />
          </div>
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Photo Gallery"
            title={`${page.serviceType} Photos`}
            lead="Browse completed projects by NZ Home Improvement across Greenwich, Stamford and Fairfield County, CT."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video shadow-sm">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Greenwich pages ── */}
      <section className="bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-5">More Services in Greenwich, CT</p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherAreas.map((a) => (
              <Link key={a.slug} href={`/${a.slug}`} className="px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-medium text-gray-800 hover:bg-[#D0956B] hover:border-[#D0956B] transition-colors duration-300">
                {a.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
    </>
  );
}
