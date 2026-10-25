"use client";

import { X } from "lucide-react";
import SimpleCaptcha from "./SimpleCaptcha";

export default function CaptchaModal({ open, onClose, onSolved }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-zinc-900">Quick security check</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <SimpleCaptcha onSolved={onSolved} />
        <p className="mt-3 text-xs text-zinc-400">Answer correctly and your message will send automatically.</p>
      </div>
    </div>
  );
}
