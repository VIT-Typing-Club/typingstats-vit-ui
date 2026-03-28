import Navbar from "./components/Navbar"
import UserRanksCard from "./components/UserRanksCard"
import DailyCompetitionPage from "./pages/DailyCompetitionPage"
import MonkeytypeLeaderboardsPage from "./pages/MonkeytypeLeaderboardsPage"
import Settings from "./pages/SettingsPage"

function App() {
  return (
    <>
      <Navbar />
      <DailyCompetitionPage />
      <UserRanksCard />
      <MonkeytypeLeaderboardsPage />
      <Settings />
    </>
  )
}

export default App
