import type { DailyQuote } from "@/api/types"

type Props = {
  quote: DailyQuote
}

export default function DailyQuoteCard({ quote }: Props) {
  return (
    <div>
      <h2>Today's Quote</h2>
      <blockquote>
        <p>{quote.text}</p>
        <footer>
          — {quote.sourceTitle} (Difficulty: {quote.difficulty})
        </footer>
      </blockquote>
    </div>
  )
}
