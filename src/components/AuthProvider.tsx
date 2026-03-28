import { useEffect } from "react"
import { useAuthStore } from "@/store/authStore"

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const fetchUser = useAuthStore((s) => s.fetchUser)

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return <>{children}</>
}
