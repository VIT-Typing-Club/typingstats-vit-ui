import type { TypeggLeaderboardEntry } from "@/api/types"

type Props = {
  leaderboard: TypeggLeaderboardEntry[]
}

export default function LeaderboardTable({ leaderboard }: Props) {
  if (leaderboard.length === 0) {
    return <p>No scores yet for today. Be the first to type it!</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>WPM</th>
          <th>Accuracy</th>
          <th>PP</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((entry, index) => (
          <tr key={entry.discordId}>
            <td>{index + 1}</td>
            <td>{entry.discordUsername}</td>
            <td>{entry.wpm}</td>
            <td>{entry.accuracy * 100}%</td>
            <td>{entry.pp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
