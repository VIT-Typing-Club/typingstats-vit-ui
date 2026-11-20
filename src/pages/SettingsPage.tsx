import { useSearchParams } from "react-router-dom"
import { useAuthStore } from "@/store/authStore"
import VerifyTab from "@/components/settings/VerifyTab"
import ProfileForm from "@/components/settings/ProfileForm"
import AccountTab from "@/components/settings/AccountTab"

const TABS = [
  { id: "verify", label: "verify" },
  { id: "profile", label: "profile" },
  { id: "account", label: "account" },
] as const
type TabId = (typeof TABS)[number]["id"]

export default function SettingsPage() {
  const user = useAuthStore((s) => s.user)
  const [params, setParams] = useSearchParams()

  const allVerified =
    !!user && user.mtVerified && !!user.typeggId && user.collegeVerified
  const requested = params.get("tab") as TabId | null
  const tab: TabId =
    requested && TABS.some((t) => t.id === requested)
      ? requested
      : allVerified
        ? "profile"
        : "verify"

  return (
    <div className="flex flex-col h-full bg-base font-mono text-xs sm:text-sm">
      {/* tmux-style window list */}
      <div className="flex bg-mantle border-b border-strong shrink-0 overflow-x-auto">
        {TABS.map((t, i) => {
          const active = t.id === tab
          return (
            <button
              key={t.id}
              onClick={() => setParams({ tab: t.id }, { replace: true })}
              className={`px-4 py-2 whitespace-nowrap cursor-pointer transition-colors ${
                active
                  ? "bg-lavender text-crust font-bold"
                  : "text-subtext0 hover:text-text"
              }`}
            >
              {i + 1}:{t.label}
              {active && "*"}
              {t.id === "verify" && !allVerified && !active && (
                <span className="text-peach ml-1">!</span>
              )}
            </button>
          )
        })}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
        <div className="max-w-2xl mx-auto w-full h-full">
          {tab === "verify" && <VerifyTab />}
          {tab === "profile" && <ProfileForm />}
          {tab === "account" && <AccountTab />}
        </div>
      </div>
    </div>
  )
}
