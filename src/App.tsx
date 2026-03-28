import Navbar from "./components/Navbar"
import UserRanksCard from "./components/UserRanksCard"
import DailyCompetitionPage from "./pages/DailyCompetitionPage"
import MonkeytypeLeaderboardsPage from "./pages/MonkeytypeLeaderboardsPage"

function App() {
  return (
    <>
      <Navbar />
      <DailyCompetitionPage />
      <UserRanksCard />
      <MonkeytypeLeaderboardsPage />
    </>
  )
}

export default App
