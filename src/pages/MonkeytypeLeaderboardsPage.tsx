import { useEffect } from "react";
import { useMonkeytypeStore } from "@/store/monkeytypeStore";
import type { TestType } from "@/api/types";
import MonkeytypeTable from "@/components/MonkeytypeTable";
import { useAuthStore } from "@/store/authStore";
import { useNow } from "@/hooks/useNow";

const TEST_TYPES: { value: TestType; label: string }[] = [
    { value: "TIME_15", label: "Time: 15s" },
    { value: "TIME_30", label: "Time: 30s" },
    { value: "TIME_60", label: "Time: 60s" },
    // we finna do this later
    // { value: "TIME_120", label: "Time: 120s" },
    // { value: "WORDS_10", label: "Words: 10" },
    // { value: "WORDS_25", label: "Words: 25" },
    // { value: "WORDS_50", label: "Words: 50" },
    // { value: "WORDS_100", label: "Words: 100" },
];

export default function MonkeytypeLeaderboardsPage() {
    const user = useAuthStore((s) => s.user);

    const currentTestType = useMonkeytypeStore((s) => s.currentTestType);
    const leaderboard = useMonkeytypeStore((s) => s.leaderboard);
    const loading = useMonkeytypeStore((s) => s.loading);
    const syncing = useMonkeytypeStore((s) => s.syncing);
    const error = useMonkeytypeStore((s) => s.error);

    const setTestTypeAndFetch = useMonkeytypeStore((s) => s.setTestTypeAndFetch);
    const syncScore = useMonkeytypeStore((s) => s.syncScore);

    const now = useNow();

    const SYNC_COOLDOWN = 60 * 1000;

    const lastSyncTime = user?.lastManualSync ? new Date(user.lastManualSync).getTime() : 0;
    const nextSyncTime = lastSyncTime + SYNC_COOLDOWN;
    const canSync = now >= nextSyncTime;

    useEffect(() => {
        setTestTypeAndFetch(currentTestType);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTestTypeAndFetch(e.target.value as TestType);
    };

    let syncButtonText = "Sync My Scores";
    if (syncing) syncButtonText = "Syncing...";
    else if (!canSync) syncButtonText = "Cooldown active";

    return (
        <div>
            <div>
                <h1>Ranked Leaderboards</h1>

                {user && user.mtVerified && user.collegeVerified && (
                    <button
                        onClick={syncScore}
                        disabled={syncing || !canSync}
                    >
                        {syncButtonText}
                    </button>
                )}
            </div>

            <div>
                <label htmlFor="testTypeSelect" style={{ marginRight: "1rem" }}>
                    Select Category:
                </label>
                <select
                    id="testTypeSelect"
                    value={currentTestType}
                    onChange={handleTypeChange}
                    disabled={loading || syncing}
                >
                    {TEST_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                </select>
            </div>

            {error && (
                <div style={{ color: "red", marginBottom: "1rem" }}>
                    <p>Error: {error}</p>
                </div>
            )}

            {loading && !syncing ? (
                <div>Loading scores...</div>
            ) : (
                <MonkeytypeTable leaderboard={leaderboard} />
            )}
        </div>
    );
}