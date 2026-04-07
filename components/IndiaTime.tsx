"use client";

import {useState, useEffect} from "react";

interface IndiaTimeProps {
  className?: string;
}

export default function IndiaTime({
  className = "text-zinc-400 text-xs",
}: IndiaTimeProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Indian Time
      const indianTime = now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(indianTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className={className}>{time || "Loading..."} in India</p>;
}
