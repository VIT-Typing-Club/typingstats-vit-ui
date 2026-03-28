import type { MonkeytypeLeaderboardEntry } from "@/api/types"

type Props = {
  leaderboard: MonkeytypeLeaderboardEntry[]
}

export default function MonkeytypeTable({ leaderboard }: Props) {
  if (!leaderboard || leaderboard.length === 0) {
    return (
      <div className="p-4 font-mono text-sm text-subtext0 italic">
        &gt; No records found in this category.
      </div>
    )
  }

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-auto custom-scrollbar relative">
      <table className="w-full text-left border-collapse whitespace-nowrap min-w-150">
        {/* Sticky Header */}
        <thead className="sticky top-0 bg-mantle font-mono text-xs uppercase tracking-widest text-subtext0 border-b border-strong z-10 shadow-sm">
          <tr>
            <th className="py-2 px-3 font-normal w-12 text-center">Rnk</th>
            <th className="py-2 px-3 font-normal">User</th>
            <th className="py-2 px-3 font-normal text-right">WPM</th>
            <th className="py-2 px-3 font-normal text-right">Raw</th>
            <th className="py-2 px-3 font-normal text-right">Acc</th>
            <th className="py-2 px-3 font-normal text-right">Date</th>
          </tr>
        </thead>

        <tbody className="font-mono text-sm bg-base">
          {leaderboard.map((entry, index) => {
            // Color the top 3 ranks
            let rankColor = "text-subtext0"
            if (index === 0) rankColor = "text-yellow font-bold"
            else if (index === 1) rankColor = "text-peach font-bold"
            else if (index === 2) rankColor = "text-text font-bold"

            const dateObj = new Date(entry.createdAt)
            const formattedDate = dateObj.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "2-digit",
            })

            return (
              <tr
                key={entry.discordId}
                className="border-b border-subtle hover:bg-surface0 transition-colors"
              >
                {/* Rank */}
                <td className={`py-2 px-3 text-center ${rankColor}`}>
                  {index + 1}
                </td>

                {/* User & Avatar */}
                <td className="py-2 px-3 text-text">
                  <div className="flex items-center space-x-3">
                    {entry.avatarUrl ? (
                      <img
                        src={entry.avatarUrl}
                        alt={entry.username}
                        className="w-5 h-5 rounded-full ring-1 ring-surface2 shrink-0"
                      />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-surface2 ring-1 ring-surface1 shrink-0" />
                    )}
                    <span className="truncate max-w-30 sm:max-w-50">
                      {entry.displayName || entry.username}
                    </span>
                  </div>
                </td>

                {/* Main WPM */}
                <td className="py-2 px-3 text-right text-lavender font-semibold tabular-nums">
                  {entry.wpm.toFixed(2)}
                </td>

                {/* Raw WPM */}
                <td className="py-2 px-3 text-right text-overlay0 tabular-nums">
                  {entry.raw.toFixed(2)}
                </td>

                {/* Accuracy */}
                <td className="py-2 px-3 text-right text-subtext1 tabular-nums">
                  {entry.accuracy}%
                </td>

                {/* Created At */}
                <td className="py-2 px-3 text-right text-surface2 text-xs tabular-nums">
                  {formattedDate}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
