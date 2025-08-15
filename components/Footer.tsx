"use client";

import {useState, useEffect} from "react";
import {Eye} from "lucide-react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track this visitor when page loads
    const trackVisitor = async () => {
      try {
        // Call API to track visitor and get count
        const response = await fetch("/api/visitors", {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.count);
        } else {
          // If API fails, show a default number
          setVisitorCount(1000);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
        // If API fails, show a default number
        setVisitorCount(1000);
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return (
    <>
      {/* Visitor Counter */}
      <div className="text-right mb-2">
        <span className="text-xs text-zinc-400 flex items-center justify-end gap-1">
          <Eye
            className={`w-3 h-3 text-[#ffdb70] ${
              loading ? "animate-pulse" : ""
            }`}
          />
          <span>
            {loading
              ? "Loading..."
              : `${visitorCount.toLocaleString()} total visitors`}
          </span>
        </span>
      </div>

      {/* Author Credit */}
      <footer className="py-5 border-t-2 border-[#ffdb70]">
        <p className="text-center text-sm">
          Designed and Developed by :{" "}
          <a
            className="text-[#ffdb70] hover:opacity-80"
            href="https://x.com/hiarun01"
            target="_blank"
            rel="noopener noreferrer"
          >
            hiarun01
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
