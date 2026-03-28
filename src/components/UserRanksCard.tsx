import { useAuthStore } from "@/store/authStore"

const RankBlock = ({
  time,
  rank,
}: {
  time: string
  rank: number | null | undefined
}) => {
  const isRanked = rank && rank > 0

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-crust border border-surface0 rounded-sm">
      <span className="text-[10px] sm:text-xs text-subtext0 uppercase tracking-wider mb-1">
        {time}
      </span>
      <span
        className={`font-mono font-bold ${isRanked ? "text-lavender text-sm sm:text-text" : "text-overlay0 text-xs sm:text-sm"}`}
      >
        {isRanked ? `#${rank.toLocaleString()}` : "---"}
      </span>
    </div>
  )
}

export default function UserRanksCard() {
  const ranks = useAuthStore((s) => s.ranks)
  const user = useAuthStore((s) => s.user)

  if (!user) {
    return null
  }

  return (
    <div className="p-3 sm:p-4 bg-mantle font-mono w-full">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="text-subtext1 tracking-widest uppercase">
          &gt; My_Rankings
        </span>
        <span className="text-overlay0">
          usr: <span className="text-teal">{user.username}</span>
        </span>
      </div>

      {!ranks ? (
        <div className="p-3 border border-dashed border-surface1 text-center text-xs text-subtext0 italic">
          No rank data found. Execute a valid test to initialize.
        </div>
      ) : (
        /* 3-Column Grid for the stats */
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <RankBlock time="15 sec" rank={ranks.TIME_15} />
          <RankBlock time="30 sec" rank={ranks.TIME_30} />
          <RankBlock time="60 sec" rank={ranks.TIME_60} />
        </div>
      )}
    </div>
  )
}
