import type { TypeggLeaderboardEntry } from "@/api/types"

type Props = {
  leaderboard: TypeggLeaderboardEntry[]
}

export default function LeaderboardTable({ leaderboard }: Props) {
  if (leaderboard.length === 0) {
    return (
      <div className="p-4 font-mono text-sm text-subtext0 italic">
        &gt; No scores yet for today. Be the first to execute.
      </div>
    )
  }

  return (
    // Takes full height of parent flex-1, scrolls internally
    <div className="w-full h-full overflow-y-auto overflow-x-auto custom-scrollbar relative">
      <table className="w-full text-left border-collapse whitespace-nowrap min-w-[350px]">
        {/* Sticky header so it stays put while ranks scroll */}
        <thead className="sticky top-0 bg-mantle font-mono text-xs uppercase tracking-widest text-subtext0 border-b border-strong z-10 shadow-sm">
          <tr>
            <th className="py-2 px-2 sm:px-3 font-normal w-12 text-center">Rnk</th>
            <th className="py-2 px-2 sm:px-3 font-normal">User</th>
            <th className="py-2 px-2 sm:px-3 font-normal text-right">WPM</th>
            <th className="py-2 px-2 sm:px-3 font-normal text-right">Acc</th>
            <th className="py-2 px-2 sm:px-3 font-normal text-right">PP</th>
          </tr>
        </thead>

        <tbody className="font-mono text-sm bg-base">
          {leaderboard.map((entry, index) => {
            let rankColor = "text-subtext0";
            if (index === 0) rankColor = "text-yellow font-bold";
            else if (index === 1) rankColor = "text-peach font-bold";
            else if (index === 2) rankColor = "text-text font-bold";

            return (
              <tr
                key={entry.discordId}
                className="border-b border-subtle hover:bg-surface0 transition-colors"
              >
                <td className={`py-1.5 px-2 sm:px-3 text-center ${rankColor}`}>
                  {index + 1}
                </td>

                {/* Adjusted max-width for mobile */}
                <td className="py-1.5 px-2 sm:px-3 text-text truncate max-w-[100px] sm:max-w-[150px]">
                  {entry.discordUsername}
                </td>

                <td className="py-1.5 px-2 sm:px-3 text-right text-lavender font-semibold tabular-nums">
                  {entry.wpm.toFixed(2)}
                </td>

                <td className="py-1.5 px-2 sm:px-3 text-right text-subtext1 tabular-nums">
                  {(entry.accuracy * 100).toFixed(2)}%
                </td>

                <td className="py-1.5 px-2 sm:px-3 text-right text-teal tabular-nums">
                  {entry.pp.toFixed(2)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}