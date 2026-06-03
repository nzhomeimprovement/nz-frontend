import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import CounterSection from "@/components/CounterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeVideoSection from "@/components/HomeVideoSection";
import HomeLatestProjects from "@/components/HomeLatestProjects";
import FAQSection from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, ClipboardList, Headset, ImageIcon, Lightbulb, Share2, ShoppingBag, Star } from "lucide-react";

export const metadata = {
  title: "NZ Home Improvement | Renovation & Remodeling Stamford CT",
  description:
    "NZ Home Improvement offers professional home renovation and remodeling services in Stamford, CT. Kitchen, bathroom, basement remodeling. Get free estimates.",
  alternates: { canonical: "https://nzhomeimprovement.com" },
  openGraph: {
    url: "https://nzhomeimprovement.com",
    title: "NZ Home Improvement | Renovation & Remodeling Stamford CT",
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
      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── About / Full Service ── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Content - Image Composition */}
        <div className="relative w-full h-[400px] md:h-[550px] mx-auto md:max-w-2xl lg:max-w-none isolate flex items-center justify-center pt-8 pr-12 lg:pr-16">
          
          {/* Taller background/right image */}
          <div className="absolute top-0 right-0 w-[55%] h-[85%] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100 z-0">
            <Image
              src="/img/full/21.jpg"
              alt="NZ Home Improvement remodeling project"
              fill
              sizes="(max-width: 1024px) 55vw, 27vw"
              className="object-cover object-center"
            />
          </div>

          {/* Wider foreground/left image */}
          <div className="absolute bottom-[5%] left-[2%] w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] bg-gray-200 z-10 border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/img/full/09.jpg"
              alt="NZ Home Improvement contractor at work"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover object-right-top"
            />
          </div>

        </div>

        {/* Right Content - Text & Information */}
        <div className="flex flex-col md:pl-4">
          
          {/* Heading */}
          <h2 className="text-[28px] leading-tight md:text-4xl lg:text-[2.75rem] font-bold text-black tracking-[-0.02em] mb-6">
            Full Service Home Remodeling in Stamford, CT – Book Now
          </h2>

          {/* Main Description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 lg:w-11/12 pr-4">
            NZ Home Improvement handles every phase of your project — from free consultation and 3D design to permitting, construction, and final walkthrough. From kitchen and bathroom remodeling to basement finishing, home additions, and whole-home renovations in Stamford, CT.
          </p>

          {/* Value Propositions / List Box */}
          <div className="flex flex-col space-y-4 mb-10 pl-0">

            {/* Active Item Block */}
            <div className="border-l-[3.5px] border-black pl-4 lg:pl-5 py-1 flex flex-col gap-1.5 lg:w-[95%]">
              <span className="font-bold text-sm md:text-[15px] text-gray-900 tracking-tight">
                NZ Home Improvement
              </span>
              <p className="text-gray-500 text-[13px] md:text-sm leading-[1.6]">
                Expert remodeling contractor serving Stamford, CT — quality craftsmanship, transparent pricing, and on-time project completion.
              </p>
            </div>

            {/* Inactive Line 1 */}
            <div className="border-l-2 border-gray-300 pl-4 lg:pl-5 py-0.5 ml-[1px]">
               <span className="font-semibold text-sm md:text-[15px] text-gray-800">
                 Kitchen, Bathroom & Basement Remodeling
               </span>
            </div>

            {/* Inactive Line 2 */}
            <div className="border-l-2 border-gray-300 pl-4 lg:pl-5 py-0.5 ml-[1px]">
               <span className="font-semibold text-sm md:text-[15px] text-gray-800">
                 Home Additions & Full Home Renovations
               </span>
            </div>
            
          </div>

          {/* CTA Button */}
          <div>
            <a href="#consultation" className="inline-flex justify-center items-center px-8 py-[14px] bg-[#D0956B] hover:bg-[#C4845A] text-black text-[15px] font-medium rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D0956B] focus:ring-offset-2">
              Schedule a Free Consultation
            </a>
          </div>

        </div>
      </div>
    </section>

      {/* ── Video Section ── */}
      <HomeVideoSection />

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Why Choose Us ── */}
     <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl sm:mx-auto px-5">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-center tracking-tight text-zinc-900 mb-16 leading-[1.15]">
          Why choose us as your home <br className="hidden md:block" /> remodeler?
        </h2>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Image Block */}
          <div className="lg:col-span-5 h-[400px] lg:h-auto relative w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image
              src="/img/full/20.jpg" // Add your desired white living space remodeling image here
              alt="Bright White Minimalist Remodeled Living Space"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* 4 Feature Cards Block (2x2 Flex Matrix flush against each other) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] overflow-hidden flex flex-col sm:grid sm:grid-cols-2 divide-y sm:divide-y-0 ">
            
            {features.map((feature, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 flex flex-col justify-start transition-colors duration-300 ${
                  feature.isLime
                  ? "bg-zinc-900 hover:bg-black"
                  : "bg-zinc-50 hover:bg-white"
                }`}
              >
                <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 ${feature.isLime ? 'bg-white/10 text-white' : 'bg-zinc-200/50 text-zinc-900'}`}>
                  <feature.Icon />
                </div>
                <h5 className={`text-[17px] font-bold mb-4 tracking-tight leading-snug ${feature.isLime ? 'text-white' : 'text-zinc-900'}`}>
                  {feature.title}
                </h5>
                <p className={`text-sm font-medium leading-[1.8] opacity-90 pr-2 ${feature.isLime ? 'text-zinc-400' : 'text-zinc-600/90'}`}>
                  {feature.desc}
                </p>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    </section>

      {/* ── How Does It Work ── */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            How Does It Work?
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500">
            Our remodeling process is simple and efficient. We begin by understanding your vision, 
            create a custom design plan, and manage every step from
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className={`
                  rounded-[32px] p-10 flex flex-col items-center text-center
                  ${step.isHighlighted ? 'bg-black' : 'bg-[#FAFAFA]'}
                `}
              >
                {/* Icon Box */}
                <div className="bg-white w-[52px] h-[52px] rounded-[18px] flex items-center justify-center mb-6">
                  <step.Icon 
                    className="w-[22px] h-[22px] text-gray-900" 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-400 mb-4">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-gray-600 font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

      {/* ── Our Range of Services (image grid) ── */}
       <section className="py-24 bg-white overflow-hidden w-full relative">
      
      {/* ── Heading Content ── */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#111111] tracking-tight mb-5 md:leading-tight">
          Our Range Of Remodeling Services
        </h2>
        <p className="text-[14px] md:text-[15px] leading-[1.7] text-gray-500 font-medium max-w-2xl mx-auto">
          Our range of remodeling services is designed to transform your home with style, comfort, and functionality.<br className="hidden md:block" />
          From kitchen and bathroom renovations to complete home makeovers.
        </p>
      </div>

      {/* ── Stepped Image Row / Mock Coverflow ── */}
      {/* 
        Container forces centering, wraps tight gaps, and uses fixed custom sizes 
        per-child element logic from above array to recreate layout arc 
      */}
      <div className="w-full flex items-center justify-center flex-nowrap gap-3 md:gap-5 xl:gap-6 px-4 pb-4 mx-auto">
        {services.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`
              relative group overflow-hidden bg-gray-200 cursor-pointer
              transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              hover:-translate-y-2
              ${item.sizeClasses}
            `}
          >
            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 460px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Base bottom gradient mask for text visibility */}
            <div className={`absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent ${item.isCenter ? 'via-black/70 opacity-95' : 'opacity-80'}`} />

            {/* Overlay Text Details positioned nicely bottom left */}
            <div className={`absolute left-0 bottom-0 flex flex-col p-5 md:p-6 xl:p-8 ${item.isCenter ? 'lg:p-10 lg:bottom-2' : ''}`}>
              <h3 className={`font-semibold text-white tracking-wide leading-tight mb-1 lg:mb-1.5 ${item.isCenter ? 'text-[22px] lg:text-[28px]' : 'text-base lg:text-[20px]'}`}>
                {item.title}
              </h3>
              <p className={`font-light text-gray-300 tracking-wider font-sans uppercase ${item.isCenter ? 'text-[12px] lg:text-[14px]' : 'text-[11px] lg:text-[12px]'}`}>
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>

      {/* ── Satisfied Clients (dark section) ── */}
     <section className="py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Headings */}
        <div className="mb-14">
          <h2 className="text-[32px] md:text-[44px] font-semibold text-white tracking-tight mb-5">
            Our Satisfied Clients
          </h2>
          <p className="text-[13px] md:text-[14px] leading-relaxed text-zinc-400 max-w-2xl mx-auto font-medium">
            Our satisfied clients trust us for our quality craftsmanship, reliable service, and
            commitment to bringing their remodeling vision to life.
          </p>
        </div>

        {/* Large Main Quote */}
        <div className="mb-14">
          <p className="text-[22px] md:text-[34px] lg:text-[40px] font-medium leading-[1.3] text-zinc-100 max-w-[65rem] mx-auto tracking-tight">
            We had the pleasure of working with the NZ Home Improvement
            team to remodel our kitchen and we couldn't be happier.
            Thank you for exceeding our expectations!
          </p>
        </div>

        {/* Navigation & Avatars */}
        <div className="flex items-center justify-center mb-8 gap-2 sm:gap-4 md:gap-10 w-full max-w-full px-2">

          {/* Previous Arrow */}
          <button className="w-9 h-9 sm:w-10.5 sm:h-10.5 shrink-0 flex items-center justify-center rounded-full border-[1.5px] border-white/20 text-white hover:border-white hover:bg-white hover:text-zinc-900 transition-all">
            <ArrowLeft strokeWidth={1.5} size={16} />
          </button>

          {/* Avatars Carousel Display */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`rounded-full flex items-center justify-center shrink-0 text-white font-bold transition-all duration-300 ${avatar.sizeClass} ${avatar.bg} ${avatar.hideOnMobile ? "hidden sm:flex" : "flex"}`}
                title={avatar.name}
              >
                <span className={avatar.isActive ? "text-xs sm:text-sm md:text-base" : "text-[10px] sm:text-xs"}>
                  {avatar.initials}
                </span>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button className="w-9 h-9 sm:w-10.5 sm:h-10.5 shrink-0 flex items-center justify-center rounded-full border-[1.5px] border-white/20 text-white hover:border-white hover:bg-white hover:text-zinc-900 transition-all">
            <ArrowRight strokeWidth={1.5} size={16} />
          </button>

        </div>

        {/* Author info and Star Rating */}
        <div className="flex flex-col items-center">
          <p className="text-[15px] font-medium text-zinc-200 tracking-wider mb-2">
            DONALD W <span className="font-normal capitalize text-zinc-400 ml-1">Houzz</span>
          </p>
          <div className="flex gap-1.5 text-[#fcb612]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star} 
                size={18} 
                className="fill-current text-[#fcb612]" 
                strokeWidth={0} 
              />
            ))}
          </div>
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
