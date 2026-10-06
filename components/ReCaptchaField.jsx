"use client";

import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

export default function ReCaptchaField({ onChange, onExpired }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return (
    <div className="w-full flex justify-start">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        onExpired={onExpired}
        theme="light"
      />
    </div>
  );
}
