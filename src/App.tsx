import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"
import SettingsPage from "@/pages/SettingsPage"
import HomePage from "./pages/HomePage"
import PublicProfilePage from "./pages/ProfilePage"

function RootLayout() {
  return (
    <div className="flex flex-col h-dvh w-full bg-base text-text overflow-hidden font-sans selection:bg-surface2">
      <main className="flex-1 min-h-0 overflow-hidden w-full">
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/profile/:username",
        element: <PublicProfilePage />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
