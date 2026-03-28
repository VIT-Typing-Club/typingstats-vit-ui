import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SettingsPage from "@/pages/SettingsPage";
import HomePage from "./pages/HomePage";
import PublicProfilePage from "./pages/ProfilePage";

function RootLayout() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1 min-h-0 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}