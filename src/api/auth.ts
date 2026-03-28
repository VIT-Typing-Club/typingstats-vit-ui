import { apiClient } from "@/api/client"
import type { User, UserRanks } from "./types"

export const fetchCurrentUser = () => apiClient<User>("/api/users/@me")

export const fetchUserRanks = () => apiClient<UserRanks>("/api/users/@me/ranks")

export const logout = () =>
  apiClient<void>("/api/auth/logout", { method: "POST" })
