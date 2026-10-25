"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

export default function SimpleCaptcha({ onSolved }) {
  const [challenge, setChallenge] = useState(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  const loadChallenge = async () => {
    try {
      const res = await fetch("/api/captcha");
      const data = await res.json();
      setChallenge(data);
    } catch {
      setChallenge(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch-on-mount, not a render-triggered state sync
    loadChallenge();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setAnswer("");
    loadChallenge();
  };

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
    if (challenge && value !== "" && Number(value) === challenge.a + challenge.b) {
      onSolved({ ...challenge, answer: value });
    }
  };

  return (
    <div className="w-full flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-700 whitespace-nowrap select-none">
        {loading || !challenge ? "Loading security question…" : `What is ${challenge.a} + ${challenge.b}?`}
      </span>
      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        autoFocus
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Answer"
        disabled={loading || !challenge}
        className="w-20 bg-zinc-50 border border-gray-200 rounded-full px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-[#D0956B]/50 disabled:opacity-60"
      />
      <button
        type="button"
        onClick={handleRefresh}
        aria-label="Get a new question"
        className="text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
      >
        <RefreshCw size={15} />
      </button>
    </div>
  );
}
