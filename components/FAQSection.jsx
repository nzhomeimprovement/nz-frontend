"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I prepare for my remodeling consultation?",
    a: "Make a list of your goals, budget range, and any inspiration photos. Think about your timeline and which areas are most important. The more prepared you are, the more productive our consultation will be.",
  },
  {
    q: "What should I expect during the initial consultation?",
    a: "We'll discuss your vision, assess your space, understand your budget, and provide professional recommendations. We'll also explain our process, timelines, and answer all your questions.",
  },
  {
    q: "What services does USA Home Remodeling offer?",
    a: "We offer comprehensive home remodeling services including kitchen remodeling, bathroom renovation, basement finishing, home additions, drywall installation, and exterior remodeling throughout the surrounding areas.",
  },
  {
    q: "Do you offer free consultations and estimates?",
    a: "Yes! We provide free initial consultations and written estimates. Contact us today to schedule your free consultation.",
  },
  {
    q: "Are you licensed and insured remodeling contractors?",
    a: "Yes, we are fully licensed and insured remodeling contractors. We carry all necessary certifications and policies to safely operate in our service areas.",
  },
  {
    q: "How long does a typical remodel take?",
    a: "Project duration varies by scope. A bathroom remodel typically takes 1–3 weeks, kitchen remodels 3–6 weeks, and larger projects like basement finishing or home additions can take 6–12 weeks.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white font-sans text-gray-900">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#111111] leading-tight mb-5 tracking-tight max-w-xl mx-auto">
            Helpful Questions About Our Remodeling Services
          </h2>
          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#666666] max-w-2xl mx-auto">
            Find quick answers to common questions about our home remodeling services, process, 
            timelines, and costs to help you plan your project with confidence.
          </p>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div 
                key={i} 
                className="bg-[#FAFAFA] rounded-xl transition-all duration-300 border border-transparent hover:bg-gray-100"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 md:px-6 md:py-[22px] text-left cursor-pointer focus:outline-none rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] md:text-base text-gray-800 font-medium pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    strokeWidth={2}
                  />
                </button>
                
                {/* Animated Answer Body Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? "grid-rows-[1fr] opacity-100" 
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6 pt-1 text-[15px] text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}