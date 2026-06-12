import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog – Home Improvement Tips & Remodeling Guides | NZ Home Improvement",
  description:
    "Read expert home improvement tips, kitchen remodeling guides, and renovation advice from NZ Home Improvement – Stamford CT's trusted remodeling contractor.",
  alternates: { canonical: "https://nzhomeimprovement.com/blog/" },
  openGraph: {
    type: "website",
    url: "https://nzhomeimprovement.com/blog/",
    title: "Blog – Home Improvement Tips & Remodeling Guides | NZ Home Improvement",
    description:
      "Read expert home improvement tips, kitchen remodeling guides, and renovation advice from NZ Home Improvement – Stamford CT's trusted remodeling contractor.",
    siteName: "NZ Home Improvement",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Our Blog" bgImage="/img/full/13.jpg" crumb="Blog" />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
            Expert Advice
          </p>
          <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight">
            Home Improvement Tips &amp; Guides
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4">
            Stay informed with the latest remodeling trends, cost guides, and expert tips from our
            team of experienced contractors in Stamford, CT.
          </p>
        </div>

        {/* ── Blog Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <Link href={`/blog/${post.slug}`} className="relative block w-full h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-[#D0956B] text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </Link>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-gray-400 text-xs mb-2">{post.date}</p>
                <h3 className="text-gray-900 font-bold text-base leading-snug tracking-tight mb-3 line-clamp-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#D0956B] transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[#D0956B] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Read More
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-zinc-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#D0956B] font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
            Ready to Start?
          </p>
          <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
            Transform Your Home Today
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Contact NZ Home Improvement for expert remodeling services in Stamford, CT. Get your
            free consultation and estimate today.
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
