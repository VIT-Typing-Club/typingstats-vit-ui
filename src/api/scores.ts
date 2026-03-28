import { apiClient } from "@/api/client"
import type { DailyLeaderboardResponse, MonkeytypeLeaderboardEntry, TestType } from "./types"

export const fetchDailyCompetition = () =>
  apiClient<DailyLeaderboardResponse | null>("/api/scores/typegg/daily")

export const syncTypeggScore = () =>
  apiClient<{ message: string }>("/api/users/@me/typegg/sync", {
    method: "POST",
  })

export const fetchMonkeytypeLeaderboard = (testType: TestType, limit: number = 50) => {
  const params = new URLSearchParams({
    testType,
    limit: limit.toString(),
  });

  return apiClient<MonkeytypeLeaderboardEntry[]>(`/api/scores/leaderboard?${params.toString()}`);
};

export const syncMonkeytypeScore = () =>
  apiClient<{ message: string }>("/api/users/@me/sync", { method: "POST" });