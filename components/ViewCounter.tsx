"use client";

import {useEffect, useState} from "react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to register visit and get view count
    const registerVisit = async () => {
      try {
        const response = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setViews(data.totalViews);
        }
      } catch (error) {
        console.error("Error registering visit:", error);
        // Fallback: just get current views without incrementing
        try {
          const response = await fetch("/api/views");
          if (response.ok) {
            const data = await response.json();
            setViews(data.totalViews);
          }
        } catch (fallbackError) {
          console.error("Error getting views:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    // Always try to register the visit (IP-based deduplication happens server-side)
    registerVisit();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-zinc-500 text-xs">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-zinc-500"
        >
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            className="animate-ping"
          />
        </svg>
        <span>Loading views...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-zinc-500 text-xs">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#ffdb70]"
      >
        <path
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="currentColor"
          className=""
          style={{
            animationDuration: "2s",
            animationIterationCount: "infinite",
          }}
        />
        <circle cx="12" cy="12" r="1.5" fill="black" />
      </svg>
      <span>
        {views !== null ? (
          <>
            <span className="font-mono text-[#ffdb70]">
              {views.toLocaleString()}
            </span>{" "}
            <span>visitors</span>
          </>
        ) : (
          "Views unavailable"
        )}
      </span>
    </div>
  );
}
