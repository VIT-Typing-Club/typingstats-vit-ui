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
      const [user, ranks] = await Promise.all([
        fetchCurrentUser(),
        fetchUserRanks().catch(() => null),
      ])

      set({ user, ranks })
    } catch {
      set({ user: null, ranks: null })
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
