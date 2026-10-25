"use client";

export default function HoneypotField({ value, onChange }) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-9999px", top: 0, width: 0, height: 0, overflow: "hidden" }}
    >
      <label htmlFor="hp_website">Website</label>
      <input
        id="hp_website"
        name="hp_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
