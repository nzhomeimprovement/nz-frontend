"use client";

import { Star, ExternalLink } from "lucide-react";

const GOOGLE_PROFILE_URL = "https://share.google/8TLXg5qiopuAwyCJN";

// Replace these with your actual Google reviews
const reviews = [
  {
    name: "Robert Kerrigan",
    initials: "RK",
    bg: "#4285F4",
    rating: 5,
    date: "2 months ago",
    text: "I highly recommend NZ Home Improvements. I hired NZ to do some major roof repair work. All was done with no problems, and the whole crew was amazing to work with.",
  },
  {
    name: "Alexander Theroux",
    initials: "AT",
    bg: "#EA4335",
    rating: 5,
    date: "3 months ago",
    text: "We hired NZ home improvements for our home remodelling project. They were very organized and extremely responsive to all of our questions. Highly recommended.",
  },
  {
    name: "Carlos Carlin",
    initials: "CC",
    bg: "#34A853",
    rating: 5,
    date: "4 months ago",
    text: "Nazar, you did a great job. My family really appreciates it — the house looks awesome. NZ home improvement is the best remodelling company in Greenwich.",
  },
  {
    name: "Donald W.",
    initials: "DW",
    bg: "#FBBC05",
    rating: 5,
    date: "1 month ago",
    text: "We had the pleasure of working with the NZ Home Improvement team to remodel our kitchen and we couldn't be happier. Thank you for exceeding our expectations!",
  },
  {
    name: "Patricia M.",
    initials: "PM",
    bg: "#4285F4",
    rating: 5,
    date: "5 months ago",
    text: "Our bathroom renovation turned out absolutely stunning. NZ Home Improvement handled every detail professionally and completed the project on schedule. Couldn't be more pleased.",
  },
  {
    name: "James R.",
    initials: "JR",
    bg: "#EA4335",
    rating: 5,
    date: "6 months ago",
    text: "Outstanding work on our basement remodel. The crew was professional, clean, and communicated every step of the way. Our basement is now our favorite room in the house!",
  },
];

function GoogleIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#FBBC05] text-[#FBBC05]" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GoogleIcon size={22} />
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em]">
                Google Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-zinc-900 tracking-tight leading-tight">
              Trusted by Homeowners<br className="hidden md:block" /> Across Stamford
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-zinc-900 leading-none">5.0</span>
              <div className="flex flex-col gap-1.5">
                <Stars size={20} />
                <span className="text-xs text-zinc-400 font-medium">Based on Google Reviews</span>
              </div>
            </div>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D0956B] hover:text-[#C4845A] transition-colors"
            >
              Read all reviews
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 flex flex-col gap-4 border border-zinc-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <GoogleIcon size={16} />
              </div>

              <p className="text-zinc-600 text-sm leading-[1.75] flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-50">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: review.bg }}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-zinc-900 font-semibold text-sm leading-tight">{review.name}</p>
                  <p className="text-zinc-400 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-10">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
          >
            <GoogleIcon size={18} />
            View all reviews on Google
            <ExternalLink size={13} className="text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
