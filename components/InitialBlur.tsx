"use client";

import {useEffect, useState} from "react";

export default function InitialBlur() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Remove the overlay after 1000ms (matches a short entrance animation)
    const t = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="initial-blur fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 bg-[rgba(17,16,16,0.65)] backdrop-blur-lg animate-fade-out" />
    </div>
  );
}
