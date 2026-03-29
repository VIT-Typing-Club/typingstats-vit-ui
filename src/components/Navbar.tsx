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
      className={`px-2 sm:px-3 py-0.5 sm:py-1 transition-colors duration-150 whitespace-nowrap ${isActive
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
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="flex items-center space-x-3 sm:space-x-4 text-subtext0 shrink-0 ml-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <Link
              to={`/profile/${user.username}`}
              className="flex items-center space-x-2 text-lavender hover:text-mauve transition-colors group max-w-24 sm:max-w-50"
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
              className="hover:text-red transition-colors hidden sm:block"
            >
              logout
            </button>
            {/* Show a compact logout on mobile to save space */}
            <button
              onClick={signOut}
              className="hover:text-red transition-colors sm:hidden text-lg leading-none"
              title="Logout"
            >
              ×
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

        <span className="text-overlay0">|</span>

        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/vit-typing-club"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtext0 hover:text-text transition-colors flex items-center"
            title="View Source"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <span className="text-text text-xs sm:text-sm">
            {config.VERSION}
          </span>
        </div>

      </div>
    </nav>
  )
}