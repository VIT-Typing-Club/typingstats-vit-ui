import { useAuthStore } from "@/store/authStore";
import DailyCompetitionPage from "./DailyCompetitionPage";
import MonkeytypeLeaderboardsPage from "./MonkeytypeLeaderboardsPage";
import UserRanksCard from "@/components/UserRanksCard";

export default function HomePage() {
    const user = useAuthStore((s) => s.user)
    return (
        <>
            <DailyCompetitionPage />
            {user ? <UserRanksCard /> : <></>}
            <MonkeytypeLeaderboardsPage />
        </>
    )
}