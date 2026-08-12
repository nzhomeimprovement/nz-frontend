import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GoogleReviews from "@/components/GoogleReviews";
import { blogs, getBlogBySlug } from "@/data/blogs";
import JsonLd from "@/components/JsonLd";

const CATEGORY_FOLDER = {
  "Kitchen Remodeling": "kitchen",
  "Bathroom Renovation": "bathroom",
  "Basement Remodeling": "basement-remodeling",
  "Home Renovation": "home-renovation",
  "Home Addition": "home-addition",
};

function getGalleryPhotos(category) {
  const folder = CATEGORY_FOLDER[category];
  if (!folder) return [];
  const dir = path.join(process.cwd(), "public", "img", "gallery", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f) => ({ src: `/img/gallery/${folder}/${f}`, alt: `${category} project - NZ Home Improvement Stamford CT` }));
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://nzhomeimprovement.com/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      url: `https://nzhomeimprovement.com/blog/${post.slug}/`,
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image }],
      siteName: "NZ Home Improvement",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogs.filter((b) => b.slug !== post.slug);
  const galleryPhotos = getGalleryPhotos(post.category);
  const heroImage = galleryPhotos[0]?.src ?? post.image;

  const isoDate = new Date(post.date).toISOString().split("T")[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nzhomeimprovement.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://nzhomeimprovement.com/blog/" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://nzhomeimprovement.com/blog/${post.slug}/` }
    ]
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://nzhomeimprovement.com/blog/${post.slug}/#article`,
    "headline": post.title,
    "description": post.metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": `https://nzhomeimprovement.com${post.image}`,
      "width": 1200,
      "height": 630
    },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "@id": "https://nzhomeimprovement.com/#business",
      "name": "NZ Home Improvement",
      "url": "https://nzhomeimprovement.com"
    },
    "publisher": {
      "@id": "https://nzhomeimprovement.com/#business"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nzhomeimprovement.com/blog/${post.slug}/`
    },
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://nzhomeimprovement.com/blog/",
      "name": "NZ Home Improvement Blog",
      "publisher": { "@id": "https://nzhomeimprovement.com/#business" }
    }
  };

  const faqSchema = post.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  } : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <PageHero title={post.title} bgImage={post.image} crumb={post.category} />

      <div className="bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* ── Main Content ── */}
            <article className="flex-1 min-w-0">

              {/* Meta row */}
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#D0956B] text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>

              {/* Hero image */}
              <div className="relative w-full h-[300px] md:h-[420px] rounded-[2rem] overflow-hidden mb-10">
                <Image
                  src={heroImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Intro paragraphs */}
              <div className="space-y-4 mb-10">
                {post.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {post.sections.map((section, si) => {
                  const HeadingTag = section.level === 3 ? "h3" : "h2";
                  const headingClass =
                    section.level === 3
                      ? "text-lg md:text-xl font-bold text-black tracking-tight leading-tight mb-3"
                      : "text-xl md:text-2xl lg:text-[1.6rem] font-bold text-black tracking-tight leading-tight mb-4";
                  return (
                    <div key={si}>
                      <HeadingTag className={headingClass}>
                        {section.heading}
                      </HeadingTag>
                      <div className="space-y-3">
                        {section.paragraphs.map((p, pi) => (
                          <p
                            key={pi}
                            className="text-gray-600 text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: p }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── FAQ ── */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-xl md:text-2xl lg:text-[1.6rem] font-bold text-black tracking-tight leading-tight mb-6">
                    FAQs – {post.category} Stamford CT
                  </h2>
                  <div className="flex flex-col gap-4">
                    {post.faqs.map((faq) => (
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
              )}

              {/* ── Photo Gallery ── */}
              {galleryPhotos.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-6">
                    {post.category} Project Photos
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {galleryPhotos.slice(0, 12).map((photo) => (
                      <div key={photo.src} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── CTA block ── */}
              <div className="mt-14 bg-zinc-900 rounded-[2rem] p-8 md:p-10 text-center">
                <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
                  Get Started Today
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  Ready to Remodel Your Kitchen?
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Contact NZ Home Improvement for professional remodeling services in Stamford, CT.
                  Call now or request a free estimate.
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
            </article>

            {/* ── Sidebar ── */}
            <aside className="w-full lg:w-[320px] shrink-0 space-y-8">

              {/* Quick links */}
              <div className="bg-zinc-50 rounded-[2rem] p-6">
                <h3 className="font-bold text-gray-900 text-base mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
                    { label: "Bathroom Renovation", href: "/bathroom-renovation" },
                    { label: "Home Renovation", href: "/home-renovation" },
                    { label: "Basement Remodeling", href: "/basement-remodeling" },
                    { label: "Home Addition", href: "/home-addition" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#D0956B] transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D0956B] shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="bg-zinc-900 rounded-[2rem] p-6 text-center">
                <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-2">
                  Free Estimate
                </p>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  Start Your Project Today
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                  Get expert guidance and a no-obligation cost estimate from our team.
                </p>
                <a
                  href="tel:+12035247974"
                  className="block w-full text-center px-6 py-3 bg-[#D0956B] hover:bg-[#C4845A] text-black text-sm font-semibold rounded-full transition-colors duration-200 mb-3"
                >
                  (203) 524-7974
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white hover:bg-zinc-100 text-black text-sm font-semibold rounded-full transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>

              {/* Related posts */}
              {otherPosts.length > 0 && (
                <div className="bg-zinc-50 rounded-[2rem] p-6">
                  <h3 className="font-bold text-gray-900 text-base mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {otherPosts.slice(0, 3).map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="group flex gap-3">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            sizes="64px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-800 text-xs font-semibold leading-snug line-clamp-2 group-hover:text-[#D0956B] transition-colors duration-200">
                            {related.title}
                          </p>
                          <p className="text-gray-400 text-[11px] mt-1">{related.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </div>
      </div>

      {/* ── Google Reviews ── */}
      <GoogleReviews />
    </>
  );
}
