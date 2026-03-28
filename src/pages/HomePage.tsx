import { useAuthStore } from "@/store/authStore"
import DailyCompetitionPage from "./DailyCompetitionPage"
import MonkeytypeLeaderboardsPage from "./MonkeytypeLeaderboardsPage"
import UserRanksCard from "@/components/UserRanksCard"

export default function HomePage() {
  const user = useAuthStore((s) => s.user)

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 h-full overflow-y-auto lg:overflow-hidden">
      {/* Left Pane (Tmux Pane 1) */}
      <div className="lg:col-span-4 flex flex-col min-h-125 lg:min-h-0 lg:h-full border-b lg:border-b-0 lg:border-r border-strong">
        {/* Daily Comp Container */}
        <div className="flex-1 min-h-0 flex flex-col overflow-y-auto custom-scrollbar">
          <DailyCompetitionPage />
        </div>

        {/* User Ranks Container (Fixed at bottom of left pane) */}
        {user && (
          <div className="shrink-0 border-t border-strong bg-mantle">
            <UserRanksCard />
          </div>
        )}
      </div>

      {/* Right Pane (Tmux Pane 2) */}
      <div className="lg:col-span-8 flex flex-col min-h-150 lg:min-h-0 lg:h-full">
        <div className="flex-1 min-h-0 flex flex-col overflow-y-auto custom-scrollbar">
          <MonkeytypeLeaderboardsPage />
        </div>
      </div>
    </div>
  )
}
