import { create } from "zustand"
import { fetchCurrentUser, fetchUserRanks, logout } from "@/api/auth"
import type { User, UserRanks } from "@/api/types"

type AuthState = {
  user: User | null
  ranks: UserRanks | null

  loading: boolean

  fetchUser: () => Promise<void>
  signOut: () => Promise<void>
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  ranks: null,
  loading: false,

  fetchUser: async () => {
    set({ loading: true })

    try {
      const user = await fetchCurrentUser()
      set({ user })

      try {
        const ranks = await fetchUserRanks()
        set({ ranks })
      } catch {
        set({ ranks: null })
      }
    } catch {
      set({
        user: null,
        ranks: null,
      })
    } finally {
      set({ loading: false })
    }
  },

  signOut: async () => {
    try {
      await logout()
    } finally {
      set({
        user: null,
        ranks: null,
      })
    }
  },

  clearAuth: () =>
    set({
      user: null,
      ranks: null,
    }),
}))
