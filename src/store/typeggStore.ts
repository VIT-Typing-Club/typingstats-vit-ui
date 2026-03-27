import { create } from "zustand"
import { fetchDailyCompetition, syncTypeggScore } from "@/api/scores"
import type { DailyQuote, TypeggLeaderboardEntry } from "@/api/types"
import { useAuthStore } from "./authStore"

type TypeggState = {
  quote: DailyQuote | null
  leaderboard: TypeggLeaderboardEntry[]

  loading: boolean
  syncing: boolean
  error: string | null

  fetchDaily: () => Promise<void>
  syncScore: () => Promise<void>
}

export const useTypeggStore = create<TypeggState>((set) => ({
  quote: null,
  leaderboard: [],
  loading: false,
  syncing: false,
  error: null,

  fetchDaily: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchDailyCompetition()
      if (data) {
        set({ quote: data.quote, leaderboard: data.leaderboard })
      } else {
        set({ quote: null, leaderboard: [] })
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to load the daily competition."
      set({ error: message })
    } finally {
      set({ loading: false })
    }
  },

  syncScore: async () => {
    set({ syncing: true, error: null })
    try {
      await syncTypeggScore()

      const data = await fetchDailyCompetition()
      if (data) {
        set({ quote: data.quote, leaderboard: data.leaderboard })
      }
      await useAuthStore.getState().fetchUser();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to sync your TypeGG score. Are you linked?"
      set({ error: message })
    } finally {
      set({ syncing: false })
    }
  },
}))
