"use client";

import {useState, useEffect} from "react";
import {Eye} from "lucide-react";

// Types
interface VisitorData {
  count: number;
  success: boolean;
}

interface VisitorCounterProps {
  count: number;
  loading: boolean;
}

// Constants
const FOOTER_CONFIG = {
  author: {
    name: "hiarun01",
    url: "https://x.com/hiarun01",
  },
  api: {
    endpoint: "/api/visitors",
    fallbackRange: {min: 100, max: 1000},
  },
  styles: {
    primaryColor: "text-[#ffdb70]",
    borderColor: "border-[#ffdb70]",
    secondaryColor: "text-zinc-400",
  },
} as const;

// Custom Hook for Visitor Tracking
const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        setError(null);
        const response = await fetch(FOOTER_CONFIG.api.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: VisitorData = await response.json();

        if (data.success) {
          setVisitorCount(data.count);
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        console.error("Error tracking visitor:", errorMessage);
        setError(errorMessage);

        // Fallback to random number for demo
        const {min, max} = FOOTER_CONFIG.api.fallbackRange;
        setVisitorCount(Math.floor(Math.random() * (max - min)) + min);
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return {visitorCount, loading, error};
};

// Visitor Counter Component
const VisitorCounter: React.FC<VisitorCounterProps> = ({count, loading}) => {
  const displayText = loading ? "Loading..." : `${count} visitors`;

  return (
    <div className="text-right mb-2">
      <span
        className={`text-xs ${FOOTER_CONFIG.styles.secondaryColor} flex items-center justify-end gap-1`}
      >
        <Eye
          className={`w-3 h-3 ${FOOTER_CONFIG.styles.primaryColor} animate-pulse hover:animate-bounce transition-all duration-300`}
          aria-label="Visitor count icon"
        />
        <span aria-live="polite">{displayText}</span>
      </span>
    </div>
  );
};

// Author Credit Component
const AuthorCredit: React.FC = () => (
  <footer className={`py-5 border-t-2 ${FOOTER_CONFIG.styles.borderColor}`}>
    <p className="text-center text-sm">
      Designed and Developed by :{" "}
      <a
        className={`${FOOTER_CONFIG.styles.primaryColor} hover:opacity-80 transition-opacity duration-200`}
        href={FOOTER_CONFIG.author.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${FOOTER_CONFIG.author.name}'s profile`}
      >
        {FOOTER_CONFIG.author.name}
      </a>
    </p>
  </footer>
);

// Main Footer Component
const Footer: React.FC = () => {
  const {visitorCount, loading, error} = useVisitorCounter();

  // Log errors in development
  if (process.env.NODE_ENV === "development" && error) {
    console.warn("Footer visitor counter error:", error);
  }

  return (
    <>
      <VisitorCounter count={visitorCount} loading={loading} />
      <AuthorCredit />
    </>
  );
};

export default Footer;
