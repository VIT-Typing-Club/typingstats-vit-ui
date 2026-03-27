import { useEffect } from "react";
import { useTypeggStore } from "@/store/typeggStore";
import { useAuthStore } from "@/store/authStore";

import DailyQuoteCard from "@/components/DailyQuoteCard";
import LeaderboardTable from "@/components/LeaderboardTable";
import LiveTimers from "@/components/LiveTimers";
import { useNow } from "@/hooks/useNow";

export default function DailyCompetitionPage() {
    const user = useAuthStore((s) => s.user);

    const quote = useTypeggStore((s) => s.quote);
    const leaderboard = useTypeggStore((s) => s.leaderboard);
    const loading = useTypeggStore((s) => s.loading);
    const syncing = useTypeggStore((s) => s.syncing);
    const error = useTypeggStore((s) => s.error);

    const fetchDaily = useTypeggStore((s) => s.fetchDaily);
    const syncScore = useTypeggStore((s) => s.syncScore);

    const SYNC_COOLDOWN = 60 * 1000;
    const AUTO_SYNC_INTERVAL = 60 * 60 * 1000;

    useEffect(() => {
        fetchDaily();
    }, [fetchDaily]);

    useEffect(() => {
        if (!user) return;

        const interval = setInterval(() => {
            useAuthStore.getState().fetchUser();
        }, 10 * 1000);

        console.log(user);
        return () => clearInterval(interval);
    }, [user]);

    const now = useNow();

    const lastManualSync = user?.lastTypeggManualSync
        ? new Date(user.lastTypeggManualSync).getTime()
        : 0;

    const lastAutoSync = user?.lastTypeggAutoSync
        ? new Date(user.lastTypeggAutoSync).getTime()
        : 0;

    const nextManualSyncTime = lastManualSync + SYNC_COOLDOWN;
    const nextAutoSyncTime = lastAutoSync + AUTO_SYNC_INTERVAL;
    const nextQuoteTime = quote
        ? new Date(quote.endDate).getTime()
        : 0;

    const canManualSync = now >= nextManualSyncTime;

    let syncButtonText = "Sync My Score";
    if (syncing) syncButtonText = "Syncing...";
    else if (!canManualSync) syncButtonText = "Cooldown active";

    if (loading) {
        return <div>Loading daily competition...</div>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
                <button onClick={fetchDaily}>Retry</button>
            </div>
        );
    }

    if (!quote) {
        return (
            <div>No active quote for today yet. Check back later!</div>
        );
    }

    return (
        <div>
            <h1>Daily Competition</h1>

            <LiveTimers
                label="Next Quote In:"
                targetTime={nextQuoteTime}
            />

            {user && (
                <>
                    <LiveTimers
                        label="Next Auto Sync In:"
                        targetTime={nextAutoSyncTime}
                    />

                    {!canManualSync && (
                        <LiveTimers
                            label="Manual Sync Available In:"
                            targetTime={nextManualSyncTime}
                        />
                    )}
                </>
            )}

            <DailyQuoteCard quote={quote} />

            <div>
                {user ? (
                    <button
                        onClick={syncScore}
                        disabled={syncing || !canManualSync}
                    >
                        {syncButtonText}
                    </button>
                ) : (
                    <p>Sign in to manually sync your score</p>
                )}
            </div>

            <LeaderboardTable leaderboard={leaderboard} />
        </div>
    );
}