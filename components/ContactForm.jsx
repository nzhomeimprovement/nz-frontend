"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import { CheckCircle, AlertCircle } from "lucide-react";

const inputCls =
  "w-full bg-white border border-gray-200 text-gray-800 text-sm px-5 py-3.5 rounded-xl outline-none transition-colors duration-200 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 appearance-none";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const recaptchaContainerRef = useRef(null);
  const recaptchaWidgetId = useRef(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const renderRecaptcha = () => {
    if (recaptchaWidgetId.current !== null || !window.grecaptcha || !recaptchaContainerRef.current) return;
    recaptchaWidgetId.current = window.grecaptcha.render(recaptchaContainerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const recaptchaToken = window.grecaptcha?.getResponse(recaptchaWidgetId.current ?? undefined);
    if (!recaptchaToken) {
      setStatus("recaptcha");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", recaptchaToken, ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      window.grecaptcha?.reset(recaptchaWidgetId.current ?? undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        onLoad={renderRecaptcha}
      />
      {status === "success" && (
        <p className="text-green-600 text-sm flex items-center gap-2">
          <CheckCircle size={15} />
          Your message has been sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm flex items-center gap-2">
          <AlertCircle size={15} />
          There was a problem sending your message. Please try again.
        </p>
      )}
      {status === "recaptcha" && (
        <p className="text-red-500 text-sm flex items-center gap-2">
          <AlertCircle size={15} />
          Please confirm you&apos;re not a robot.
        </p>
      )}

      <input
        className={inputCls}
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className={inputCls}
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className={inputCls}
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />
      <textarea
        className={`${inputCls} h-36 resize-y`}
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <div ref={recaptchaContainerRef} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-[#D0956B] hover:text-black transition-colors duration-300 disabled:opacity-70 cursor-pointer border-none"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
