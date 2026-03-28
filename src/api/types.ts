export type User = {
  username: string
  avatarUrl: string
  displayName: string
  collegeEmail: string
  mtUrl: string
  linkedinUrl: string
  githubUrl: string
  lastTypeggAutoSync: Date
  lastTypeggManualSync: Date
  collegeVerified: boolean
  mtVerified: boolean
  typeggId: string
  xUrl: string
  instagramUrl: string
  lastManualSync: string | null
  lastAutoSync: string | null
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
  displayName: string
  avatarUrl: string
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

export type TestType =
  | "TIME_15"
  | "TIME_30"
  | "TIME_60"
  | "TIME_120"
  | "WORDS_10"
  | "WORDS_25"
  | "WORDS_50"
  | "WORDS_100"

export type MonkeytypeLeaderboardEntry = {
  discordId: string
  username: string
  displayName: string
  avatarUrl: string
  wpm: number
  accuracy: number
  raw: number
  testType: TestType
  createdAt: Date
}

export type UserUpdateRequest = {
  displayName?: string
  collegeEmail?: string
  mtUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  xUrl?: string
  instagramUrl?: string
}

export type PublicProfile = {
  displayName: string | null
  discordUsername: string
  avatarUrl: string | null
  mtUrl: string | null
  mtVerified: boolean
  typeggUsername: string | null
  linkedinUrl: string | null
  githubUrl: string | null
  xUrl: string | null
  instagramUrl: string | null
}
