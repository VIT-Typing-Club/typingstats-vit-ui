import { useState } from "react"

import { useAuthStore } from "@/store/authStore"

import DailyCompetitionPage from "./DailyCompetitionPage"
import MonkeytypeLeaderboardsPage from "./MonkeytypeLeaderboardsPage"

import UserRanksCard from "@/components/UserRanksCard"

export default function HomePage() {
  const user = useAuthStore((s) => s.user)

  const [activeTab, setActiveTab] = useState<"daily" | "leaderboards">("daily")

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col h-full lg:hidden">
        <div className="flex shrink-0 border-b border-strong bg-mantle font-mono text-xs uppercase tracking-widest">
          <button
            onClick={() => setActiveTab("daily")}
            className={`
              flex-1 py-3 transition-colors
              ${
                activeTab === "daily"
                  ? "bg-base text-lavender"
                  : "text-subtext0"
              }
            `}
          >
            Daily
          </button>

          <button
            onClick={() => setActiveTab("leaderboards")}
            className={`
              flex-1 py-3 transition-colors border-l border-strong
              ${
                activeTab === "leaderboards"
                  ? "bg-base text-lavender"
                  : "text-subtext0"
              }
            `}
          >
            Ranked
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {activeTab === "daily" ? (
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0">
                <DailyCompetitionPage />
              </div>

              {user && (
                <div className="shrink-0 border-t border-strong bg-mantle">
                  <UserRanksCard />
                </div>
              )}
            </div>
          ) : (
            <MonkeytypeLeaderboardsPage />
          )}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid lg:grid-cols-12 h-full overflow-hidden">
        <div className="lg:col-span-4 flex flex-col min-h-0 border-r border-strong">
          <div className="flex-1 min-h-0 flex flex-col overflow-y-auto custom-scrollbar">
            <DailyCompetitionPage />
          </div>

          {user && (
            <div className="shrink-0 border-t border-strong bg-mantle">
              <UserRanksCard />
            </div>
          )}
        </div>

        <div className="lg:col-span-8 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 flex flex-col overflow-y-auto custom-scrollbar">
            <MonkeytypeLeaderboardsPage />
          </div>
        </div>
      </div>
    </>
  )
}
