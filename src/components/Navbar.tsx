import { Link, useLocation } from "react-router-dom"
import { useAuthStore } from "@/store/authStore"
import { config } from "@/config"

const Tab = ({
  path,
  index,
  label,
  currentPath,
}: {
  path: string
  index: number
  label: string
  currentPath: string
}) => {
  const isActive = currentPath === path
  return (
    <Link
      to={path}
      className={`px-2 sm:px-3 py-0.5 sm:py-1 transition-colors duration-150 whitespace-nowrap ${
        isActive
          ? "bg-surface1 text-green font-semibold"
          : "text-subtext0 hover:text-text hover:bg-surface0"
      }`}
    >
      {index}:{label}
      {isActive ? "*" : "-"}
    </Link>
  )
}

export default function Navbar() {
  const user = useAuthStore((s) => s.user)
  const signOut = useAuthStore((s) => s.signOut)
  const location = useLocation()

  const handleLogin = () => {
    window.location.href = config.AUTH_LOGIN_URL
  }

  return (
    <nav className="flex items-center justify-between w-full px-2 py-1 bg-crust border-strong font-mono text-xs sm:text-sm select-none overflow-x-auto custom-scrollbar">
      <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
        <span className="hidden sm:inline-block text-mauve font-bold tracking-widest uppercase text-xs">
          [typing-stats-vit]
        </span>

        <div className="flex items-center space-x-1">
          <Tab
            path="/"
            index={0}
            label="ranks"
            currentPath={location.pathname}
          />
          {user && (
            <Tab
              path="/settings"
              index={1}
              label="config"
              currentPath={location.pathname}
            />
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3 text-subtext0 shrink-0 ml-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <Link
              to={`/profile/${user.username}`}
              className="flex items-center space-x-2 text-lavender hover:text-mauve transition-colors group max-w-27.5 sm:max-w-50"
            >
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt="avatar"
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full ring-1 ring-surface2 opacity-90 group-hover:opacity-100 transition-opacity shrink-0"
                />
              ) : (
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-surface2 ring-1 ring-surface1 shrink-0" />
              )}
              <span className="truncate">
                @{user.displayName || user.username}
              </span>
            </Link>

            <span className="text-overlay0 hidden sm:inline-block">|</span>
            <button
              onClick={signOut}
              className="hover:text-red transition-colors"
            >
              logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="text-lavender hover:text-mauve transition-colors whitespace-nowrap"
          >
            &lt;login_discord&gt;
          </button>
        )}

        <span className="text-base">{config.VERSION}</span>
      </div>
    </nav>
  )
}
