"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const inputCls =
  "w-full bg-white border border-gray-200 text-gray-800 text-sm px-5 py-3.5 rounded-xl outline-none transition-colors duration-200 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 appearance-none";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
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

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-[#e3fb4b] hover:text-black transition-colors duration-300 disabled:opacity-70 cursor-pointer border-none"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
