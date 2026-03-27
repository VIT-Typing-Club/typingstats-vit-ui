import { apiClient } from "@/api/client"
import type { DailyLeaderboardResponse } from "./types"

export const fetchDailyCompetition = () =>
  apiClient<DailyLeaderboardResponse | null>("/api/scores/typegg/daily")

export const syncTypeggScore = () =>
  apiClient<{ message: string }>("/api/users/@me/typegg/sync", {
    method: "POST",
  })
