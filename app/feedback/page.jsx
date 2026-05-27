import TestimonialsSection from "@/components/TestimonialsSection";
import PageHero from "@/components/PageHero";
import { Quote, Star } from "lucide-react";

export const metadata = {
  title: "Testimonials - NZ Home Improvement | Client Feedback Stamford CT",
  description:
    "Read client testimonials for NZ Home Improvement in Stamford, CT. We deliver quality home renovations and guarantee customer satisfaction.",
  alternates: { canonical: "https://nzhomeimprovement.com/feedback" },
  openGraph: {
    url: "https://nzhomeimprovement.com/feedback",
    title: "Testimonials - NZ Home Improvement | Client Feedback Stamford CT",
    description:
      "Read client testimonials for NZ Home Improvement in Stamford, CT. We deliver quality home renovations and guarantee customer satisfaction.",
  },
};

const reviews = [
  {
    text: "I highly recommend N.Z Home Improvements company. I hired NZ to do some major roof repair work. All was done with no problems, and the whole crew was amazing to work with.",
    author: "Robert Kerrigan",
    initials: "RK",
    source: "Google",
  },
  {
    text: "We hired N.Z home improvements for our home remodelling project. They were very organized & were extremely responsive to all of our questions. Highly recommended.",
    author: "Alexander Theroux",
    initials: "AT",
    source: "Houzz",
  },
  {
    text: "Nazar you did a great job. My family really appreciate, the house looks awesome. We must say, NZ home improvement is best remodelling company in Greenwich.",
    author: "Carlos Carlin",
    initials: "CC",
    source: "Google",
  },
  {
    text: "NZ Home Improvement did an outstanding job on our basement remodel. The team was professional, clean, and finished on time. I couldn't be happier with the results.",
    author: "Maria Gonzalez",
    initials: "MG",
    source: "Yelp",
  },
  {
    text: "Exceptional work on our kitchen renovation. NZ Home Improvement delivered exactly what we envisioned at a fair price. Will definitely hire them again for future projects.",
    author: "David Chen",
    initials: "DC",
    source: "Google",
  },
  {
    text: "From start to finish, the team at NZ Home Improvement was fantastic. Communication was great and the quality of work exceeded our expectations.",
    author: "Jennifer Williams",
    initials: "JW",
    source: "Houzz",
  },
];

export default function FeedbackPage() {
  return (
    <>
      <PageHero title="Client Feedback" bgImage="/img/full/11.jpg" crumb="Feedback" />

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.2em] text-[11px] mb-3">
            Client Stories
          </p>
          <h2 className="text-[28px] md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] leading-tight mb-5">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            We take pride in delivering exceptional renovation services. Here&apos;s what some of our valued clients have to say about their experience with NZ Home Improvement.
          </p>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="bg-white pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              className={`rounded-4xl p-8 flex flex-col ${i === 0 ? "bg-[#e3fb4b]" : "bg-zinc-50"}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={`fill-current ${i === 0 ? "text-black/50" : "text-[#fcb612]"}`}
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                size={28}
                strokeWidth={1.5}
                className={`mb-4 ${i === 0 ? "text-black/30" : "text-gray-300"}`}
                fill="currentColor"
              />

              {/* Text */}
              <p className={`text-sm leading-[1.8] flex-1 mb-6 ${i === 0 ? "text-black/80" : "text-gray-600"}`}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? "bg-black text-[#e3fb4b]" : "bg-zinc-900 text-white"}`}>
                  {r.initials}
                </div>
                <div>
                  <p className={`text-sm font-bold leading-none ${i === 0 ? "text-black" : "text-zinc-900"}`}>
                    {r.author}
                  </p>
                  <p className={`text-[11px] mt-1 ${i === 0 ? "text-black/50" : "text-gray-400"}`}>
                    via {r.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <TestimonialsSection />
    </>
  );
}
