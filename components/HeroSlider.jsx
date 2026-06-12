"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

const INITIAL = { name: "", phone: "", zip: "", interest: "", referral: "" };

export default function HeroSection() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "lead", ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full h-auto min-h-screen flex flex-col justify-between overflow-hidden bg-zinc-900 pb-10">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/full/11.jpg"
          alt="Luxury Home Remodeling NZ Home Improvement"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6">
            Dream &bull; Design &bull; Build
          </p>
          <h1 className="text-2xl sm:text-5xl  font-semibold text-white tracking-tight leading-tight mb-8">
            Home Renovation Contractor in Stamford CT |<br className="hidden md:block" /> Complete Remodeling Solutions for Your Home
          </h1>
          <p className="text-zinc-200 text-xs max-w-3xl mx-auto leading-relaxed font-light">
            If you are searching for a trusted and experienced home renovation contractor in Stamford CT, NZ Home Improvement is your reliable partner for high-quality remodeling services. We specialize in transforming outdated homes into modern, functional, and beautiful living spaces through expert craftsmanship and customized design solutions. Whether you need a full home renovation, a modern kitchen upgrade, bathroom remodeling, basement finishing, or a complete home addition, our team delivers results that improve comfort, functionality, and property value.


          </p>
        </div>
      </div>

      {/* Lead capture form */}
      <div className="relative z-20 px-4 max-w-7xl mx-auto w-full -mt-20">
        <div className="relative bg-white rounded-4xl p-4 shadow-2xl overflow-hidden">

          {/* Success overlay */}
          {status === "success" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white rounded-4xl z-10">
              <div className="w-14 h-14 rounded-full bg-[#D0956B] flex items-center justify-center">
                <CheckCircle size={28} className="text-black" />
              </div>
              <p className="text-zinc-900 font-bold text-lg tracking-tight">Thank you!</p>
              <p className="text-gray-500 text-sm">We&apos;ll be in touch with you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-semibold text-gray-400 hover:text-black underline underline-offset-2 transition-colors"
              >
                Submit another request
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:flex items-end gap-3 w-full">

            {/* Name */}
            <div className="flex-1 w-full flex flex-col px-2">
              <label htmlFor="hero-name" className="text-xs font-semibold text-zinc-800 mb-1.5 px-1">
                Full Name
              </label>
              <input
                id="hero-name"
                name="name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-zinc-50 border-none rounded-full px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#D0956B]/50"
              />
            </div>

            {/* Phone */}
            <div className="flex-1 w-full flex flex-col px-2">
              <label htmlFor="hero-phone" className="text-xs font-semibold text-zinc-800 mb-1.5 px-1">
                Phone Number
              </label>
              <input
                id="hero-phone"
                name="phone"
                type="tel"
                placeholder="+1"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-zinc-50 border-none rounded-full px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#D0956B]/50"
              />
            </div>

            {/* Zip */}
            <div className="flex-[0.7] w-full flex flex-col px-2">
              <label htmlFor="hero-zip" className="text-xs font-semibold text-zinc-800 mb-1.5 px-1">
                Zip Code
              </label>
              <input
                id="hero-zip"
                name="zip"
                type="text"
                placeholder="06905"
                value={form.zip}
                onChange={handleChange}
                className="w-full bg-zinc-50 border-none rounded-full px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#D0956B]/50"
              />
            </div>

            {/* Interest */}
            <div className="flex-[1.2] w-full flex flex-col px-2">
              <label htmlFor="hero-interest" className="text-xs font-semibold text-zinc-800 mb-1.5 px-1">
                Remodeling Interest
              </label>
              <select
                id="hero-interest"
                name="interest"
                required
                value={form.interest}
                onChange={handleChange}
                className="w-full bg-zinc-50 border-none rounded-full px-4 py-3.5 text-sm text-zinc-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#D0956B]/50 cursor-pointer"
              >
                <option value="">Select Interest</option>
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                <option value="Full Home Remodel">Full Home Remodel</option>
              </select>
            </div>

            {/* Referral */}
            <div className="flex-[1.2] w-full flex flex-col px-2">
              <label htmlFor="hero-referral" className="text-xs font-semibold text-zinc-800 mb-1.5 px-1">
                How did you hear about us?
              </label>
              <select
                id="hero-referral"
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full bg-zinc-50 border-none rounded-full px-4 py-3.5 text-sm text-zinc-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#D0956B]/50 cursor-pointer"
              >
                <option value="">How did you hear about us?</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend / Family">Friend / Family</option>
              </select>
            </div>

            {/* Submit */}
            <div className="w-full lg:w-auto px-2 mt-4 lg:mt-0 lg:mb-[1px]">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full lg:w-auto bg-[#D0956B] hover:bg-[#C4845A] disabled:opacity-70 text-zinc-900 font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-105 whitespace-nowrap shadow-sm flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader size={14} className="animate-spin" />
                    Sending…
                  </>
                ) : "Get Free Estimate"}
              </button>
            </div>

          </form>

          {/* Inline error message */}
          {status === "error" && (
            <p className="flex items-center gap-2 text-red-500 text-xs font-medium mt-3 px-3">
              <AlertCircle size={13} />
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
