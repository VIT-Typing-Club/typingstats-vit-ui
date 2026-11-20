import type { UserRanks } from "@/api/types"
import { TEST_TYPES, useTypingStats } from "@/hooks/useTypingStats"

const LABELS: Record<(typeof TEST_TYPES)[number], string> = {
  TIME_15: "15s",
  TIME_30: "30s",
  TIME_60: "60s",
}

const GRID = "grid grid-cols-[2.5rem_repeat(4,minmax(0,1fr))] gap-x-3 max-w-xs"

type Props = {
  userId?: string
  ranks?: UserRanks
}

export default function TypingStats({ userId }: Props) {
  const { stats, loading } = useTypingStats(userId)

  if (loading) {
    return (
      <p className="font-mono text-sm text-subtext0 animate-pulse">
        &gt; fetching stats...
      </p>
    )
  }
  if (Object.keys(stats).length === 0) return null

  return (
    <div className="font-mono text-sm space-y-1">
      <div className={`${GRID} text-xs uppercase tracking-wider text-overlay0`}>
        <span>mode</span>
        <span>wpm</span>
        <span>acc</span>
        <span>raw</span>
      </div>

      {TEST_TYPES.map((type) => {
        const entry = stats[type]
        if (!entry) return null

        return (
          <div key={type} className={GRID}>
            <span className="text-lavender font-bold">{LABELS[type]}</span>
            <span className="text-text font-bold">{Math.round(entry.wpm)}</span>
            <span className="text-text">{entry.accuracy.toFixed(1)}%</span>
            <span className="text-subtext0">{Math.round(entry.raw)}</span>
          </div>
        )
      })}
    </div>
  )
}
