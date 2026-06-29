import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import HomeVideoSection from "@/components/HomeVideoSection";
import HomeLatestProjects from "@/components/HomeLatestProjects";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";
import { ArrowLeft, ArrowRight, ClipboardList, Headset, ImageIcon, Lightbulb, Share2, ShoppingBag, Star } from "lucide-react";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nzhomeimprovement.com/#website",
  "name": "NZ Home Improvement",
  "url": "https://nzhomeimprovement.com",
  "description": "NZ Home Improvements is a trusted general contractor Stamford CT offering kitchen remodeling, bathroom renovation, basement finishing & commercial construction services.",
  "publisher": { "@id": "https://nzhomeimprovement.com/#business" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://nzhomeimprovement.com/?s={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": "https://nzhomeimprovement.com/#business",
  "name": "NZ Home Improvement",
  "alternateName": "NZ Home Improvements",
  "url": "https://nzhomeimprovement.com",
  "telephone": "+12035247974",
  "email": "build@nzhomeimprovement.net",
  "logo": {
    "@type": "ImageObject",
    "url": "https://nzhomeimprovement.com/img/logo-color.png",
    "width": 180,
    "height": 55
  },
  "image": "https://nzhomeimprovement.com/img/full/09.jpg",
  "description": "NZ Home Improvements is a trusted general contractor in Stamford CT specializing in kitchen remodeling, bathroom renovation, basement finishing, home addition, and full home renovation services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1372 Summer St",
    "addressLocality": "Stamford",
    "addressRegion": "CT",
    "postalCode": "06905",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Stamford", "addressRegion": "CT" },
    { "@type": "City", "name": "Greenwich", "addressRegion": "CT" },
    { "@type": "City", "name": "Norwalk", "addressRegion": "CT" },
    { "@type": "City", "name": "Westport", "addressRegion": "CT" },
    { "@type": "City", "name": "Darien", "addressRegion": "CT" },
    { "@type": "AdministrativeArea", "name": "Fairfield County", "addressRegion": "CT" },
    { "@type": "AdministrativeArea", "name": "Westchester County", "addressRegion": "NY" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Remodeling Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling", "@id": "https://nzhomeimprovement.com/services/kitchen-remodeling/#service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Renovation", "@id": "https://nzhomeimprovement.com/services/bathroom-renovation/#service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Renovation", "@id": "https://nzhomeimprovement.com/services/home-renovation/#service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Remodeling", "@id": "https://nzhomeimprovement.com/services/basement-remodeling/#service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Addition", "@id": "https://nzhomeimprovement.com/services/home-addition/#service" } }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/n.z_homeimprovement",
    "https://www.facebook.com/NZHOMEIMPROVEMENT"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Robert Kerrigan" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I highly recommend NZ Home Improvements. I hired NZ to do some major roof repair work. All was done with no problems, and the whole crew was amazing to work with."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Alexander Theroux" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We hired NZ home improvements for our home remodelling project. They were very organized and extremely responsive to all of our questions. Highly recommended."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Carlos Carlin" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Nazar, you did a great job. My family really appreciates it — the house looks awesome. NZ home improvement is the best remodelling company in Greenwich."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Donald W." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We had the pleasure of working with the NZ Home Improvement team to remodel our kitchen and we couldn't be happier. Thank you for exceeding our expectations!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Patricia M." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Our bathroom renovation turned out absolutely stunning. NZ Home Improvement handled every detail professionally and completed the project on schedule."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "James R." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Outstanding work on our basement remodel. The crew was professional, clean, and communicated every step of the way. Our basement is now our favorite room in the house!"
    }
  ]
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I prepare for my remodeling consultation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Make a list of your goals, budget range, and any inspiration photos. Think about your timeline and which areas are most important. The more prepared you are, the more productive our consultation will be." }
    },
    {
      "@type": "Question",
      "name": "What should I expect during the initial consultation?",
      "acceptedAnswer": { "@type": "Answer", "text": "We'll discuss your vision, assess your space, understand your budget, and provide professional recommendations. We'll also explain our process, timelines, and answer all your questions." }
    },
    {
      "@type": "Question",
      "name": "What services does NZ Home Improvement offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "We offer comprehensive home remodeling services including kitchen remodeling, bathroom renovation, basement finishing, home additions, and full home renovation throughout Stamford, CT and surrounding areas." }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultations and estimates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! We provide free initial consultations and written estimates. Contact us today to schedule your free consultation." }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured remodeling contractors?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are fully licensed and insured remodeling contractors. We carry all necessary certifications and policies to safely operate in our service areas." }
    },
    {
      "@type": "Question",
      "name": "How long does a typical remodel take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Project duration varies by scope. A bathroom remodel typically takes 1–3 weeks, kitchen remodels 3–6 weeks, and larger projects like basement finishing or home additions can take 6–12 weeks." }
    }
  ]
};

export const metadata = {
  title: "General Contractor Stamford CT | Home Remodeling & Commercial Experts",
  description:
    "NZ Home Improvements is a trusted general contractor Stamford CT offering kitchen remodeling, bathroom renovation, basement finishing & commercial construction services.",
  alternates: { canonical: "https://nzhomeimprovement.com/" },
  openGraph: {
    url: "https://nzhomeimprovement.com/",
    title: "General Contractor Stamford CT | Home Remodeling & Commercial Experts",
  },
};

const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 11v1" />
      <path d="M12 7v1" />
    </svg>
  ),
  Cube: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <path d="M16.5 4.5l-9 5.5" />
    </svg>
  ),
  Badge: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7c0 6 6 10 6 10s6-4 6-10V2z" />
    </svg>
  ),
};

const features = [
  {
    title: "Licensed & Insured",
    desc: "We operate under CSLB License #1080 ensuring that all of our remodeling services meet professional and regulatory.",
    Icon: Icons.Shield,
    isLime: true,
  },
  {
    title: "Free 3D Design",
    desc: "We help you visualize your remodel before construction begins, allowing you to see the design and layout clearly.",
    Icon: Icons.Cube,
    isLime: false,
  },
  {
    title: "1-Year Warranty",
    desc: "We proudly stand behind craftsmanship offering a 1-year guarantee on labor and workmanship. ensuring every project.",
    Icon: Icons.Badge,
    isLime: false,
  },
  {
    title: "Licensed & Insured",
    desc: "Licensed under CSLB #1080611, with full liability insurance, workers' compensation coverage on every project.",
    Icon: Icons.Trophy,
    isLime: true,
  },
];

const steps = [
  {
    title: "Free Consultation",
    desc: "We'll kick things off with a free consultation to review the specifics of the project. We meet with each customer individually to learn more about what you want to see out of the renovation.",
    Icon: Headset,
    isHighlighted: true,
  },
  {
    title: "Brainstorming",
    desc: "We'll get to with work brainstorming some potential design options and layout possibilities. We'll let you take the lead and offer any professional advice when you need it.",
    Icon: Lightbulb,
  },
  {
    title: "3D Designs",
    desc: "After narrowing down a potential design option, our highly skilled team of designers will get to work creating a 3D mockup to give you an accurate idea of what your bathroom renovation would look like.",
    Icon: ImageIcon,
  },
  {
    title: "Shopping List",
    desc: "We'll compile an exhaustive list of everything needed to complete the renovation. You'll get access to our insider network to save tons of money on the project.",
    Icon: ShoppingBag,
  },
  {
    title: "City Permits",
    desc: "Our team will manage all the necessary paperwork and documentation required for the project. We ensure everything complies with local city permit regulations and building codes.",
    Icon: ClipboardList,
  },
  {
    title: "Execution",
    desc: "After finalizing all the paperwork, our highly skilled team of contractors will get to work to bring your home renovation vision to life.",
    Icon: Share2,
  },
];

const services = [
  {
    id: 1,
    title: "Basement Remodeling",
    subtitle: "Transform Unused Space",
    img: "/img/full/21.jpg",
    href: "/services/basement-remodeling",
    sizeClasses: "w-[180px] lg:w-[240px] xl:w-[280px] h-[340px] lg:h-[440px] xl:h-[480px] hidden md:block rounded-xl lg:rounded-2xl opacity-60 hover:opacity-100 transition-opacity",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    subtitle: "Elegant Upgrade",
    img: "/img/portfolio/28.jpg",
    href: "/services/bathroom-renovation",
    sizeClasses: "w-[240px] lg:w-[300px] xl:w-[340px] h-[400px] lg:h-[500px] xl:h-[540px] hidden sm:block rounded-2xl lg:rounded-3xl shrink-0 z-10",
  },
  {
    id: 3,
    title: "Kitchen Remodeling",
    subtitle: "Gather Together",
    img: "/img/portfolio/2.jpg",
    href: "/services/kitchen-remodeling",
    sizeClasses: "w-[300px] sm:w-[340px] lg:w-[400px] xl:w-[460px] h-[480px] lg:h-[600px] xl:h-[640px] rounded-[32px] lg:rounded-[40px] shrink-0 z-20 shadow-2xl relative bottom-1",
    isCenter: true,
  },
  {
    id: 4,
    title: "Home Renovation",
    subtitle: "Full Home Transformation",
    img: "/img/full/11.jpg",
    href: "/services/home-renovation",
    sizeClasses: "w-[240px] lg:w-[300px] xl:w-[340px] h-[400px] lg:h-[500px] xl:h-[540px] hidden sm:block rounded-2xl lg:rounded-3xl shrink-0 z-10",
  },
  {
    id: 5,
    title: "Home Addition",
    subtitle: "Custom Expansion",
    img: "/img/full/25.jpg",
    href: "/services/home-addition",
    sizeClasses: "w-[180px] lg:w-[240px] xl:w-[280px] h-[340px] lg:h-[440px] xl:h-[480px] hidden md:block rounded-xl lg:rounded-2xl opacity-60 hover:opacity-100 transition-opacity",
  },
];

const avatars = [
  { id: 1, initials: "RK", name: "Robert K",    sizeClass: "w-10 h-10 md:w-12 md:h-12 opacity-80", bg: "bg-zinc-700", hideOnMobile: true },
  { id: 2, initials: "AT", name: "Alexander T",  sizeClass: "w-10 h-10 sm:w-12 sm:h-12 md:w-[56px] md:h-[56px]", bg: "bg-zinc-600" },
  { id: 3, initials: "DW", name: "Donald W",    sizeClass: "w-14 h-14 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] shadow-2xl scale-110 shadow-black/20 z-10", bg: "bg-zinc-900", isActive: true },
  { id: 4, initials: "CC", name: "Carlos C",    sizeClass: "w-10 h-10 sm:w-12 sm:h-12 md:w-[56px] md:h-[56px]", bg: "bg-zinc-600" },
  { id: 5, initials: "JM", name: "John M",      sizeClass: "w-10 h-10 md:w-12 md:h-12 opacity-80", bg: "bg-zinc-700", hideOnMobile: true },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={businessSchema} />
      <JsonLd data={homepageFaqSchema} />

      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── About / Full Service ── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Left — Image Composition */}
          <div className="relative w-full h-[400px] md:h-[550px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
            <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
              <Image src="/img/full/21.jpg" alt="NZ Home Improvement remodeling project" fill sizes="(max-width: 1024px) 55vw, 27vw" className="object-cover object-center" />
            </div>
            <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <Image src="/img/full/09.jpg" alt="NZ Home Improvement contractor at work" fill sizes="(max-width: 1024px) 60vw, 30vw" className="object-cover object-right-top" />
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex flex-col md:pl-4">
            <h2 className="text-[28px] leading-tight md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] mb-6">
              Complete Remodeling Solutions for Your Home
            </h2>
            <div className="flex flex-col space-y-4 mb-10 pl-0">
              <div className="border-l-[3.5px] border-black pl-4 lg:pl-5 py-1 flex flex-col gap-1.5 lg:w-[95%]">
                <span className="font-bold text-sm md:text-[15px] text-gray-900 tracking-tight">NZ Home Improvement</span>
                <p className="text-gray-500 text-[13px] md:text-sm leading-[1.6]">
                  Providing complete <strong className="text-gray-800">home renovation solutions in Stamford CT</strong> — quality craftsmanship, transparent pricing, and on-time project completion.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 lg:pl-5 py-0.5 ml-[1px]">
                <span className="font-semibold text-sm md:text-[15px] text-gray-800">
                  <strong>Kitchen Remodeling in Stamford CT</strong> &amp; Bathroom Renovation
                </span>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 lg:pl-5 py-0.5 ml-[1px]">
                <span className="font-semibold text-sm md:text-[15px] text-gray-800">
                  Basement Finishing, <strong>Home Addition</strong> &amp; Full Home Renovations
                </span>
              </div>
            </div>
            <div>
              <a href="/contact" className="inline-flex justify-center items-center px-8 py-[14px] bg-[#D0956B] hover:bg-[#C4845A] text-black text-[15px] font-medium rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D0956B] focus:ring-offset-2">
                Schedule a Free Consultation
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Video Section ── */}
      <HomeVideoSection />

      {/* ── Google Reviews ── */}
      <GoogleReviews />

      {/* ── Why Choose Us ── */}
      <section id="why-choose" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl sm:mx-auto px-5">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-center tracking-tight text-zinc-900 mb-16 leading-[1.15]">
            Why choose us as your home <br className="hidden md:block" /> remodeler?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 h-[400px] lg:h-auto relative w-full overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image src="/img/full/20.jpg" alt="Bright White Minimalist Remodeled Living Space" fill className="object-cover object-center" />
            </div>
            <div className="lg:col-span-7 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] overflow-hidden flex flex-col sm:grid sm:grid-cols-2 divide-y sm:divide-y-0">
              {features.map((feature, i) => (
                <div key={i} className={`p-8 md:p-10 flex flex-col justify-start transition-colors duration-300 ${feature.isLime ? "bg-zinc-900 hover:bg-black" : "bg-zinc-50 hover:bg-white"}`}>
                  <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 ${feature.isLime ? "bg-white/10 text-white" : "bg-zinc-200/50 text-zinc-900"}`}>
                    <feature.Icon />
                  </div>
                  <h5 className={`text-[17px] font-bold mb-4 tracking-tight leading-snug ${feature.isLime ? "text-white" : "text-zinc-900"}`}>{feature.title}</h5>
                  <p className={`text-sm font-medium leading-[1.8] opacity-90 pr-2 ${feature.isLime ? "text-zinc-400" : "text-zinc-600/90"}`}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How Does It Work ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">How Does It Work?</h2>
            <p className="text-[15px] leading-relaxed text-gray-500">
              Our remodeling process is simple and efficient. We begin by understanding your vision, create a custom design plan, and manage every step from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className={`rounded-[32px] p-10 flex flex-col items-center text-center ${step.isHighlighted ? "bg-black" : "bg-[#FAFAFA]"}`}>
                <div className="bg-white w-[52px] h-[52px] rounded-[18px] flex items-center justify-center mb-6">
                  <step.Icon className="w-[22px] h-[22px] text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-4">{step.title}</h3>
                <p className="text-[14px] leading-[1.6] text-gray-600 font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Range of Services ── */}
      <section className="py-24 bg-white overflow-hidden w-full relative">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#111111] tracking-tight mb-5 md:leading-tight">
            Our Range Of Remodeling Services
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.7] text-gray-500 font-medium max-w-2xl mx-auto">
            Our range of remodeling services is designed to transform your home with style, comfort, and functionality.<br className="hidden md:block" />
            From kitchen and bathroom renovations to complete home makeovers.
          </p>
        </div>
        <div className="w-full flex items-center justify-center flex-nowrap gap-3 md:gap-5 xl:gap-6 px-4 pb-4 mx-auto">
          {services.map((item) => (
            <Link key={item.id} href={item.href} className={`relative group overflow-hidden bg-gray-200 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-2 ${item.sizeClasses}`}>
              <Image src={item.img} alt={item.title} fill sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 460px" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-black/5" />
              <div className={`absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent ${item.isCenter ? "via-black/70 opacity-95" : "opacity-80"}`} />
              <div className={`absolute left-0 bottom-0 flex flex-col p-5 md:p-6 xl:p-8 ${item.isCenter ? "lg:p-10 lg:bottom-2" : ""}`}>
                <h3 className={`font-semibold text-white tracking-wide leading-tight mb-1 lg:mb-1.5 ${item.isCenter ? "text-[22px] lg:text-[28px]" : "text-base lg:text-[20px]"}`}>{item.title}</h3>
                <p className={`font-light text-gray-300 tracking-wider font-sans uppercase ${item.isCenter ? "text-[12px] lg:text-[14px]" : "text-[11px] lg:text-[12px]"}`}>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Satisfied Clients ── */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="mb-14">
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white tracking-tight mb-5">Our Satisfied Clients</h2>
            <p className="text-[13px] md:text-[14px] leading-relaxed text-zinc-400 max-w-2xl mx-auto font-medium">
              Our satisfied clients trust us for our quality craftsmanship, reliable service, and commitment to bringing their remodeling vision to life.
            </p>
          </div>
          <div className="mb-14">
            <p className="text-[22px] md:text-[34px] lg:text-[40px] font-medium leading-[1.3] text-zinc-100 max-w-[65rem] mx-auto tracking-tight">
              We had the pleasure of working with the NZ Home Improvement team to remodel our kitchen and we couldn&apos;t be happier. Thank you for exceeding our expectations!
            </p>
          </div>
          <div className="flex items-center justify-center mb-8 gap-2 sm:gap-4 md:gap-10 w-full max-w-full px-2">
            <button className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border-[1.5px] border-white/20 text-white hover:border-white hover:bg-white hover:text-zinc-900 transition-all">
              <ArrowLeft strokeWidth={1.5} size={16} />
            </button>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
              {avatars.map((avatar) => (
                <div key={avatar.id} className={`rounded-full flex items-center justify-center shrink-0 text-white font-bold transition-all duration-300 ${avatar.sizeClass} ${avatar.bg} ${avatar.hideOnMobile ? "hidden sm:flex" : "flex"}`} title={avatar.name}>
                  <span className={avatar.isActive ? "text-xs sm:text-sm md:text-base" : "text-[10px] sm:text-xs"}>{avatar.initials}</span>
                </div>
              ))}
            </div>
            <button className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border-[1.5px] border-white/20 text-white hover:border-white hover:bg-white hover:text-zinc-900 transition-all">
              <ArrowRight strokeWidth={1.5} size={16} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[15px] font-medium text-zinc-200 tracking-wider mb-2">
              DONALD W <span className="font-normal capitalize text-zinc-400 ml-1">Houzz</span>
            </p>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} className="fill-current text-[#fcb612]" strokeWidth={0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO Rich Content ── */}
      <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto">

          {/* ── Intro ── */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-5">
              General Contractor Stamford CT for Reliable Home Remodeling and Construction Services
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              If you are searching for a dependable <strong className="text-gray-800">general contractor Stamford CT</strong>, <strong className="text-gray-800">NZ Home Improvements</strong> is your trusted partner for high-quality residential and commercial construction services. We specialize in delivering customized solutions for homeowners and businesses looking to upgrade, expand, or completely transform their spaces.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              As one of the <Link href="/services/home-renovation" className="text-[#D0956B] font-semibold hover:underline">best home renovation general contractors</Link>, we understand that every project requires attention to detail, proper planning, and expert execution. Whether you need a full home remodel, a kitchen upgrade, or commercial construction services, our experienced team ensures exceptional results tailored to your needs.
            </p>
          </div>

          {/* ── Full-Service + Home Remodel ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Full-Service General Contractor Services Near Me for Residential and Commercial Projects
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Finding reliable <strong className="text-gray-800">general contractor services near me</strong> can be challenging, but NZ Home Improvements makes it simple by offering complete solutions under one roof. We manage every aspect of your project, from design and planning to construction and finishing.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Our team is experienced in both residential and commercial construction, making us a preferred choice for clients looking for <strong className="text-gray-800">general contractors near me commercial</strong> as well as home renovation experts. We ensure that every project is completed efficiently, on time, and within budget.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                As a trusted <strong className="text-gray-800">commercial general contractor</strong>, we also handle office renovations, retail construction, and other business projects with precision and professionalism.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                General Contractor Home Remodel Services for Modern Living Spaces
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Your home should be a reflection of your lifestyle, and our <strong className="text-gray-800">general contractor home remodel</strong> services are designed to create spaces that are both functional and visually appealing. NZ Home Improvements works closely with homeowners to transform outdated spaces into modern environments that enhance comfort and usability.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                As one of the <Link href="/services/home-renovation" className="text-[#D0956B] font-semibold hover:underline">best Home Renovation general contractors</Link>, we focus on improving layout, maximizing space, and using high-quality materials that ensure durability and long-term value. Whether you want to renovate a single room or your entire home, our team delivers results that exceed expectations.
              </p>
            </div>
          </div>

          {/* ── Kitchen + Bathroom ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Professional General Contractor Kitchen Remodel and Kitchen General Contractor Services
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                The kitchen is the heart of any home, and upgrading it requires expertise and careful planning. NZ Home Improvements offers <Link href="/services/kitchen-remodeling" className="text-[#D0956B] font-semibold hover:underline">general contractor kitchen remodel</Link> services that transform kitchens into stylish and functional spaces.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                As a dedicated <strong className="text-gray-800">kitchen general contractor</strong>, we handle everything from custom cabinetry and countertops to lighting and flooring. Our goal is to create kitchens that are not only beautiful but also practical for everyday use.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We work with modern designs and high-quality materials to ensure that your kitchen becomes a central space for cooking, dining, and entertaining.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Best Bathroom Renovation General Contractors for Modern and Luxury Bathrooms
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Bathrooms play a vital role in daily comfort, and upgrading them can significantly improve your home&apos;s value. NZ Home Improvements is proud to be among the <Link href="/services/bathroom-renovation" className="text-[#D0956B] font-semibold hover:underline">best Bathroom Renovation general contractors</Link>, delivering high-quality bathroom remodeling solutions.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Our team focuses on creating modern and functional bathrooms with efficient layouts, stylish fixtures, and high-quality finishes. Whether you want a simple update or a complete transformation, we ensure that every detail is handled professionally.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                With our expertise, you can achieve a bathroom that combines comfort, style, and long-lasting quality.
              </p>
            </div>
          </div>

          {/* ── Basement + Home Additions ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Best Basement Remodeling General Contractors for Functional Living Spaces
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Basements are often underutilized, but with the right design, they can become one of the most valuable areas of your home. NZ Home Improvements is recognized as one of the <Link href="/services/basement-remodeling" className="text-[#D0956B] font-semibold hover:underline">best Basement Remodeling general contractors</Link>, offering innovative solutions for basement transformation.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Our services include converting basements into home offices, entertainment rooms, gyms, or guest suites. We focus on proper insulation, lighting, and ventilation to create comfortable and usable spaces.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                By choosing our team, you can maximize your home&apos;s potential without the need for expensive expansions.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                General Contractors for Home Additions Near Me to Expand Your Living Space
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                If your current home no longer meets your needs, expanding it can be a practical solution. NZ Home Improvements is among the most trusted <Link href="/services/home-addition" className="text-[#D0956B] font-semibold hover:underline">general contractors for home additions near me</Link>, providing customized solutions for homeowners in Stamford CT.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                We specialize in building additional rooms, second-story extensions, and other structural upgrades that blend seamlessly with your existing home. Our team ensures that every addition is designed with both functionality and aesthetics in mind.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Home additions not only provide extra space but also increase the overall value of your property.
              </p>
            </div>
          </div>

          {/* ── Commercial + Cost ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Commercial General Contractor Services for Business and Retail Construction
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                In addition to residential projects, NZ Home Improvements is a reliable <strong className="text-gray-800">commercial general contractor</strong> offering construction services for businesses in Stamford CT. We understand the unique requirements of commercial projects and deliver solutions that align with your business goals.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Our expertise includes office renovations, retail construction, and property upgrades. As professionals in <strong className="text-gray-800">general contractors near me commercial</strong>, we focus on efficiency, quality, and minimal disruption to your operations.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We ensure that every commercial project is completed on time and meets industry standards.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Understanding General Contractor Cost for Home Remodeling and Construction
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                One of the most common concerns for homeowners is understanding the <strong className="text-gray-800">general contractor cost</strong> for their project. At <strong className="text-gray-800">NZ Home Improvements</strong>, we provide transparent pricing and detailed estimates to help you plan your budget effectively.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                The cost of a project depends on several factors, including size, materials, design complexity, and labor. Our team works closely with clients to create solutions that meet their needs while staying within budget.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Investing in professional services ensures that your project is completed efficiently and avoids costly mistakes in the future.
              </p>
            </div>
          </div>

          {/* ── Why NZ + Process ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Why NZ Home Improvements is Among the Best Home Renovation General Contractors
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                Choosing the right contractor is essential for the success of your project. <Link href="/" className="text-[#D0956B] font-semibold hover:underline">NZ Home Improvements</Link> stands out as one of the <strong className="text-gray-800">best home renovation general contractors</strong> due to our commitment to quality, reliability, and customer satisfaction.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                We take a personalized approach to every project, ensuring that your vision is fully realized. Our team combines experience, innovation, and attention to detail to deliver exceptional results.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                From small renovations to large-scale construction projects, we are dedicated to exceeding expectations and building long-term relationships with our clients.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight mb-4">
                Step-by-Step Process by a Trusted General Contractor Stamford CT
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                As a leading <Link href="/blog/general-contractor-stamford-ct" className="text-[#D0956B] font-semibold hover:underline">general contractor Stamford CT</Link>, we follow a structured process to ensure successful project completion. It begins with an initial consultation where we understand your requirements, goals, and budget.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-3">
                We then create a detailed design and plan tailored to your needs. Once approved, our team handles permits, materials, and construction, ensuring that every aspect of the project is executed professionally.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Throughout the process, we maintain clear communication, keeping you informed at every stage. This approach ensures a smooth and stress-free experience for our clients.
              </p>
            </div>
          </div>

          {/* ── Contact CTA ── */}
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-black tracking-tight leading-tight mb-5">
              Contact NZ Home Improvements for General Contractor Services Near Me
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
              If you are looking for a professional <strong className="text-gray-800">general contractor Stamford CT</strong> offering reliable <Link href="/services" className="text-[#D0956B] font-semibold hover:underline">general contractor services near me</Link>, NZ Home Improvements is here to help. Whether you need home remodeling, kitchen renovation, basement finishing, or commercial construction, our team is ready to deliver high-quality results.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              <Link href="/contact" className="text-[#D0956B] font-semibold hover:underline">Contact us</Link> today to discuss your project and take the first step toward transforming your space with one of the <strong className="text-gray-800">best Home Renovation general contractors</strong> in Stamford CT.
            </p>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Latest Projects ── */}
      <HomeLatestProjects />
    </>
  );
}
