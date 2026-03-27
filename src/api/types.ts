export type User = {
  username: string
  displayName: string
  collegeEmail: string
  mtUrl: string
  linkedinUrl: string
  githubUrl: string
  lastTypeggAutoSync: Date
  lastTypeggManualSync: Date
}

export type UserRanks = {
  TIME_15: number
  TIME_30: number
  TIME_60: number
}

export type DailyQuote = {
  text: string
  sourceTitle: string
  difficulty: number
  endDate: Date
}

export type TypeggLeaderboardEntry = {
  discordId: string
  discordUsername: string
  typeggUsername: string
  wpm: number
  accuracy: number
  raw: number
  pp: number
}

export type DailyLeaderboardResponse = {
  quote: DailyQuote
  leaderboard: TypeggLeaderboardEntry[]
}
