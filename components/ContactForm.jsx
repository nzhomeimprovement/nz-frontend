"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import CaptchaModal from "./CaptchaModal";
import HoneypotField from "./HoneypotField";

const inputCls =
  "w-full bg-white border border-gray-200 text-gray-800 text-sm px-5 py-3.5 rounded-xl outline-none transition-colors duration-200 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 appearance-none";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formRenderedAt] = useState(() => Date.now());
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setShowCaptcha(true);
  };

  const sendForm = async (challenge) => {
    setShowCaptcha(false);
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", challenge, honeypot, formRenderedAt, ...form }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.error || "There was a problem sending your message. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("There was a problem sending your message. Please try again.");
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
          {errorMessage || "There was a problem sending your message. Please try again."}
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

      <HoneypotField value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-[#D0956B] hover:text-black transition-colors duration-300 disabled:opacity-70 cursor-pointer border-none"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <CaptchaModal
        open={showCaptcha}
        onClose={() => setShowCaptcha(false)}
        onSolved={sendForm}
      />
    </form>
  );
}
