import { create } from "zustand";
import { fetchMonkeytypeLeaderboard } from "@/api/scores";
import type { MonkeytypeLeaderboardEntry, TestType } from "@/api/types";

type MonkeytypeState = {
    currentTestType: TestType;
    leaderboard: MonkeytypeLeaderboardEntry[];
    loading: boolean;
    error: string | null;

    setTestTypeAndFetch: (type: TestType) => Promise<void>;
    refreshCurrentLeaderboard: () => Promise<void>;
};

export const useMonkeytypeStore = create<MonkeytypeState>((set, get) => ({
    currentTestType: "TIME_60",
    leaderboard: [],
    loading: false,
    error: null,

    setTestTypeAndFetch: async (type: TestType) => {
        set({ currentTestType: type, loading: true, error: null });
        try {
            const data = await fetchMonkeytypeLeaderboard(type);
            set({ leaderboard: data || [] });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to load leaderboard.";
            set({ error: message, leaderboard: [] });
        } finally {
            set({ loading: false });
        }
    },

    refreshCurrentLeaderboard: async () => {
        const { currentTestType } = get();
        try {
            const data = await fetchMonkeytypeLeaderboard(currentTestType);
            set({ leaderboard: data || [] });
        } catch (err: unknown) {
            console.error("Silent refresh failed:", err);
        }
    }
}));