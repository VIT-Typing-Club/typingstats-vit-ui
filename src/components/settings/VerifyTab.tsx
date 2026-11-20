import { useAuthStore } from "@/store/authStore"
import MonkeytypeStep from "./MonkeytypeStep"
import TypeggStep from "./TypeggStep"
import CollegeEmailStep from "./CollegeEmailStep"

export default function VerifyTab() {
  const user = useAuthStore((s) => s.user)
  if (!user)
    return <div className="p-4 text-subtext0">&gt; ERR: NO_SESSION</div>

  const completed = [
    user.mtVerified,
    !!user.typeggId,
    user.collegeVerified,
  ].filter(Boolean).length

  return (
    <div>
      <p className="px-4 py-3 text-overlay0 italic border-b border-surface0/60">
        {completed}/3 complete
        {completed === 3
          ? " — you're on the daily leaderboard"
          : " — finish to join the daily leaderboard"}
      </p>
      <MonkeytypeStep user={user} />
      <TypeggStep user={user} />
      <CollegeEmailStep user={user} />
    </div>
  )
}
