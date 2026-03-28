import { useAuthStore } from "@/store/authStore";

export default function UserRanksCard() {
    const ranks = useAuthStore((s) => s.ranks);
    const user = useAuthStore((s) => s.user);

    if (!user) {
        return null;
    }

    return (
        <div>
            <h3>My Global Ranks</h3>

            {!ranks ? (
                <p>No ranks found. Complete a Monkeytype test to get placed!</p>
            ) : (
                <ul>
                    <li>
                        <span>15 Seconds</span>
                        <strong>{ranks.TIME_15 ? `#${ranks.TIME_15}` : "Unranked"}</strong>
                    </li>
                    <li>
                        <span>30 Seconds</span>
                        <strong>{ranks.TIME_30 ? `#${ranks.TIME_30}` : "Unranked"}</strong>
                    </li>
                    <li>
                        <span>60 Seconds</span>
                        <strong>{ranks.TIME_60 ? `#${ranks.TIME_60}` : "Unranked"}</strong>
                    </li>
                </ul>
            )}
        </div>
    );
}