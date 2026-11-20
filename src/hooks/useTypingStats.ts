import { useEffect, useState } from "react"
import { fetchMonkeytypeLeaderboard } from "@/api/scores"
import type { MonkeytypeLeaderboardEntry, TestType } from "@/api/types"

export const TEST_TYPES = [
  "TIME_15",
  "TIME_30",
  "TIME_60",
] as const satisfies readonly TestType[]

type Stats = Partial<Record<TestType, MonkeytypeLeaderboardEntry>>

export function useTypingStats(userId?: string) {
  const [stats, setStats] = useState<Stats>({})
  const [loading, setLoading] = useState(!!userId)

  useEffect(() => {
    if (!userId) return
    let active = true

    Promise.allSettled(
      TEST_TYPES.map((type) => fetchMonkeytypeLeaderboard(type, 1, userId)),
    ).then((results) => {
      if (!active) return
      const next: Stats = {}
      results.forEach((result, i) => {
        if (result.status === "fulfilled" && result.value[0]) {
          next[TEST_TYPES[i]] = result.value[0]
        }
      })
      setStats(next)
      setLoading(false)
    })

    return () => {
      active = false
    }
  }, [userId])

  return { stats, loading }
}
