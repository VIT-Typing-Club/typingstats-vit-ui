import { useState } from "react"
import { useAuthStore } from "@/store/authStore"

type Options = { refreshUser?: boolean }

export function useAction({ refreshUser = true }: Options = {}) {
  const fetchUser = useAuthStore((s) => s.fetchUser)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const run = async (action: () => Promise<unknown>): Promise<boolean> => {
    setBusy(true)
    setError(null)
    try {
      await action()
      if (refreshUser) await fetchUser()
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      return false
    } finally {
      setBusy(false)
    }
  }

  return { busy, error, run }
}
