import type { MonkeytypeLeaderboardEntry } from "@/api/types";

type Props = {
    leaderboard: MonkeytypeLeaderboardEntry[];
};

export default function MonkeytypeTable({ leaderboard }: Props) {
    if (!leaderboard || leaderboard.length === 0) {
        return <p>No scores found for this category yet.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Avatar</th>
                    <th>User</th>
                    <th>WPM</th>
                    <th>Accuracy</th>
                    <th>Raw WPM</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard.map((entry, index) => (
                    <tr key={entry.discordId}>
                        <td>{index + 1}</td>
                        <td>{entry.avatarUrl}</td>
                        <td>{entry.displayName ? entry.displayName : entry.username}</td>
                        <td>{entry.wpm}</td>
                        <td>{entry.accuracy}%</td>
                        <td>{entry.raw}</td>
                        <td>{entry.createdAt.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}