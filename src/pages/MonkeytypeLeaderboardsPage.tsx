import { useEffect } from "react"
import { useMonkeytypeStore } from "@/store/monkeytypeStore"
import type { TestType } from "@/api/types"
import MonkeytypeTable from "@/components/MonkeytypeTable"
import { useAuthStore } from "@/store/authStore"
import { useNow } from "@/hooks/useNow"

const TEST_TYPES: { value: TestType; label: string }[] = [
  { value: "TIME_15", label: "Time: 15s" },
  { value: "TIME_30", label: "Time: 30s" },
  { value: "TIME_60", label: "Time: 60s" },
]

export default function MonkeytypeLeaderboardsPage() {
  const user = useAuthStore((s) => s.user)

  const currentTestType = useMonkeytypeStore((s) => s.currentTestType)
  const leaderboard = useMonkeytypeStore((s) => s.leaderboard)
  const loading = useMonkeytypeStore((s) => s.loading)
  const syncing = useMonkeytypeStore((s) => s.syncing)
  const error = useMonkeytypeStore((s) => s.error)

  const setTestTypeAndFetch = useMonkeytypeStore((s) => s.setTestTypeAndFetch)
  const syncScore = useMonkeytypeStore((s) => s.syncScore)

  const now = useNow()

  const SYNC_COOLDOWN = 60 * 1000

  const lastSyncTime = user?.lastManualSync
    ? new Date(user.lastManualSync).getTime()
    : 0
  const nextSyncTime = lastSyncTime + SYNC_COOLDOWN
  const canSync = now >= nextSyncTime

  useEffect(() => {
    setTestTypeAndFetch(currentTestType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTestTypeAndFetch(e.target.value as TestType)
  }

  let syncButtonText = "> ./sync_ranks.sh"
  if (syncing) syncButtonText = "> syncing..."
  else if (!canSync) syncButtonText = "> ERR: COOLDOWN"

  return (
    <div className="flex flex-col h-full bg-base overflow-hidden">
      {/* Tmux Pane Header */}
      <div className="bg-mantle border-strong px-3 py-1.5 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-subtext0 shrink-0">
        <span>[Ranked Leaderboards]</span>
        {error && <span className="text-red">Error</span>}
      </div>

      {/* Toolbar: Category Select & Sync Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 bg-crust border-b border-strong shrink-0 gap-3">
        <div className="flex items-center space-x-2 font-mono text-sm w-full sm:w-auto">
          <span className="text-subtext0 hidden sm:inline-block">
            &gt; Mode
          </span>
          <select
            id="testTypeSelect"
            value={currentTestType}
            onChange={handleTypeChange}
            disabled={loading || syncing}
            className="bg-surface0 text-text border border-surface1 rounded-sm px-2 py-1 outline-none focus:border-lavender transition-colors cursor-pointer w-full sm:w-auto appearance-none"
          >
            {TEST_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {user && user.mtVerified && user.collegeVerified && (
          <button
            onClick={syncScore}
            disabled={syncing || !canSync}
            className="w-full sm:w-auto px-4 py-1.5 font-mono text-sm border border-lavender/40 text-lavender hover:bg-lavender/10 disabled:opacity-50 disabled:border-overlay0 disabled:text-overlay0 disabled:cursor-not-allowed transition-all shrink-0"
          >
            {syncButtonText}
          </button>
        )}
      </div>

      {/* Error State */}
      {error && (
        <div className="p-4 text-red text-sm font-mono shrink-0">
          <p>ERR: {error}</p>
        </div>
      )}

      {/* Table Area (The only part that scrolls) */}
      <div className="flex-1 min-h-0 bg-base relative">
        {loading && !syncing ? (
          <div className="p-4 font-mono text-subtext0 text-sm absolute inset-0 flex items-center justify-center">
            <span className="animate-pulse-dot">Fetching metrics...</span>
          </div>
        ) : (
          <MonkeytypeTable leaderboard={leaderboard} />
        )}
      </div>
    </div>
  )
}
