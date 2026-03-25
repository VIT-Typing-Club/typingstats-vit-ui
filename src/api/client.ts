import { config } from "@/config"
import { useAuthStore } from "@/store/authStore"

export const apiClient = async <T>(
  path: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(`${config.API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  })

  if (res.status === 401) {
    useAuthStore.getState().clearAuth();
    throw new Error("Unauthorized")
  }

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  return res.json()
}
