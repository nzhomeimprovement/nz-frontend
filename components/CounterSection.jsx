"use client";

import { useState, useEffect, useRef } from "react";

const counters = [
  { end: 7, label: "Awards" },
  { end: 211, label: "Clients" },
  { end: 22, label: "Team" },
  { end: 245, label: "Projects" },
];

function useCountUp(end, started, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setValue(current);
      if (current >= end) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return value;
}

function CounterItem({ end, label, started }) {
  const value = useCountUp(end, started);
  return (
    <div className="text-center px-4">
      <span className="block text-5xl md:text-6xl font-bold text-white mb-2">{value}</span>
      <p className="text-white uppercase tracking-widest text-xs font-semibold m-0">{label}</p>
    </div>
  );
}

export default function CounterSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="counter"
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/img/full/23.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
