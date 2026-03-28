import { useEffect, useRef } from "react"
import { useTypeggStore } from "@/store/typeggStore"
import { useAuthStore } from "@/store/authStore"

import DailyQuoteCard from "@/components/DailyQuoteCard"
import LeaderboardTable from "@/components/LeaderboardTable"
import LiveTimers from "@/components/LiveTimers"
import { useNow } from "@/hooks/useNow"

export default function DailyCompetitionPage() {
  const user = useAuthStore((s) => s.user)

  const quote = useTypeggStore((s) => s.quote)
  const leaderboard = useTypeggStore((s) => s.leaderboard)
  const loading = useTypeggStore((s) => s.loading)
  const syncing = useTypeggStore((s) => s.syncing)
  const error = useTypeggStore((s) => s.error)

  const fetchDaily = useTypeggStore((s) => s.fetchDaily)
  const syncScore = useTypeggStore((s) => s.syncScore)

  const SYNC_COOLDOWN = 60 * 1000
  const AUTO_SYNC_INTERVAL = 60 * 60 * 1000

  useEffect(() => {
    fetchDaily()
  }, [fetchDaily])

  const now = useNow()

  const lastManualSync = user?.lastTypeggManualSync
    ? new Date(user.lastTypeggManualSync).getTime()
    : 0
  const lastAutoSync = user?.lastTypeggAutoSync
    ? new Date(user.lastTypeggAutoSync).getTime()
    : 0

  const nextManualSyncTime = lastManualSync + SYNC_COOLDOWN
  const nextAutoSyncTime = lastAutoSync + AUTO_SYNC_INTERVAL
  const nextQuoteTime = quote ? new Date(quote.endDate).getTime() : 0

  const hasTriggeredAutoFetch = useRef(false)

  useEffect(() => {
    if (!user) return
    if (now >= nextAutoSyncTime && !hasTriggeredAutoFetch.current) {
      hasTriggeredAutoFetch.current = true
      useAuthStore.getState().fetchUser()
      fetchDaily()
    } else if (now < nextAutoSyncTime) {
      hasTriggeredAutoFetch.current = false
    }
  }, [now, nextAutoSyncTime, user, fetchDaily])

  const canManualSync = now >= nextManualSyncTime

  let syncButtonText = "> ./sync_score.sh"
  if (syncing) syncButtonText = "> syncing..."
  else if (!canManualSync) syncButtonText = "> ERR: COOLDOWN_ACTIVE"

  if (loading && !quote)
    return <div className="p-4 font-mono text-subtext0">Loading pane...</div>

  return (
    <div className="flex flex-col h-full bg-base overflow-hidden">
      {/* Tmux Pane Header - Fixed */}
      <div className="bg-mantle border-strong px-3 py-1.5 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-subtext0 shrink-0">
        <span>[Daily Competition]</span>
        {error && <span className="text-red">Error</span>}
      </div>

      {error ? (
        <div className="p-4 text-red text-sm font-mono shrink-0">
          <p>ERR: {error}</p>
          <button
            onClick={fetchDaily}
            className="mt-2 text-lavender hover:underline"
          >
            Retry Connection
          </button>
        </div>
      ) : !quote ? (
        <div className="p-4 text-subtext0 italic font-mono shrink-0">
          No active quote for today yet. Check back later.
        </div>
      ) : (
        <>
          {/* META BLOCK - Fixed at top, no scrolling */}
          <div className="bg-crust border-b border-strong p-3 sm:p-4 shrink-0">
            <div className="font-mono text-xs text-subtext0 space-y-1">
              <LiveTimers label="next_quote_in  :" targetTime={nextQuoteTime} />
              {user && (
                <>
                  <LiveTimers
                    label="next_auto_sync :"
                    targetTime={nextAutoSyncTime}
                  />
                  {!canManualSync && (
                    <LiveTimers
                      label="manual_sync_in :"
                      targetTime={nextManualSyncTime}
                    />
                  )}
                </>
              )}
            </div>
            <DailyQuoteCard quote={quote} />
          </div>

          {/* SYNC BUTTON - Fixed below meta block */}
          <div className="p-3 sm:p-4 shrink-0 border-b border-strong bg-base">
            {user ? (
              <button
                onClick={syncScore}
                disabled={syncing || !canManualSync}
                className="w-full py-1.5 font-mono text-sm border border-lavender/40 text-lavender hover:bg-lavender/10 disabled:opacity-50 disabled:border-overlay0 disabled:text-overlay0 disabled:cursor-not-allowed transition-all"
              >
                {syncButtonText}
              </button>
            ) : (
              <p className="text-center text-subtext0 text-xs italic font-mono border border-subtle py-1.5">
                &gt; authenticate to manual sync
              </p>
            )}
          </div>

          {/* TABLE WRAPPER */}
          <div className="flex-1 min-h-0 bg-base">
            <LeaderboardTable leaderboard={leaderboard} />
          </div>
        </>
      )}
    </div>
  )
}
