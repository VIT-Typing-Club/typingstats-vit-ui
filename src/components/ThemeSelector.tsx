import { useState, useEffect, useRef } from "react"
import { useTheme } from "@/theme/useTheme"

export function ThemeSelector() {
  const { activeTheme, setTheme, themes } = useTheme()
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!showThemeMenu) return
    const handler = (e: KeyboardEvent | MouseEvent) => {
      if (e instanceof KeyboardEvent && e.key === "Escape")
        setShowThemeMenu(false)
    }
    document.addEventListener("keydown", handler)
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("keydown", handler)
      document.removeEventListener("mousedown", handler)
    }
  }, [showThemeMenu])

  const handleOpen = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setMenuPos({ x: rect.left, y: rect.top })
    }
    setShowThemeMenu((o) => !o)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className="flex items-center gap-1.5 text-subtext0 hover:text-text transition-colors"
        aria-expanded={showThemeMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M12 2.75a9.25 9.25 0 1 0 0 18.5h.33a2.42 2.42 0 0 0 2.13-3.57 1.9 1.9 0 0 1 1.67-2.8h1.23a4.89 4.89 0 0 0 4.89-4.88A7.25 7.25 0 0 0 12 2.75Z" />
          <circle cx="7.75" cy="10" r="1.1" fill="currentColor" />
          <circle cx="10.75" cy="7.25" r="1.1" fill="currentColor" />
          <circle cx="14.75" cy="7.75" r="1.1" fill="currentColor" />
          <circle cx="16.75" cy="11.5" r="1.1" fill="currentColor" />
        </svg>
        <span className="hidden md:inline text-xs sm:text-sm">
          {activeTheme.name}
        </span>
      </button>

      {showThemeMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onMouseDown={() => setShowThemeMenu(false)}
          />
          <div
            className="fixed z-50 bg-crust border border-surface1 flex flex-col min-w-max max-h-72 overflow-auto shadow-lg rounded-md custom-scrollbar"
            style={{ left: menuPos.x, bottom: `calc(100vh - ${menuPos.y}px)` }}
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id)
                  setShowThemeMenu(false)
                }}
                className={`px-3 py-0.5 text-left text-xs sm:text-sm transition-colors ${
                  theme.id === activeTheme.id
                    ? "text-lavender bg-surface1"
                    : "text-subtext0 hover:text-text hover:bg-surface0"
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}
