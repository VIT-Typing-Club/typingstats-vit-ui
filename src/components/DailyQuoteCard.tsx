import { useState } from "react";
import type { DailyQuote } from "@/api/types";

export default function DailyQuoteCard({ quote }: { quote: DailyQuote }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="font-mono mt-4">
      <div className="relative">
        <p className={`text-text leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
          <span className="text-mauve mr-2">❯</span>
          "{quote.text}"
        </p>
        <p className="text-subtext1 text-xs mt-2 italic">
          — {quote.sourceTitle} <span className="text-overlay0 ml-2">[difficulty: {quote.difficulty}]</span>
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-xs text-lavender hover:text-mauve transition-colors"
      >
        [{isExpanded ? "collapse" : "expand"}]
      </button>
    </div>
  );
}