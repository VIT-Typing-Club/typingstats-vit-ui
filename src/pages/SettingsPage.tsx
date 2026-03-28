import LinkAccounts from "@/components/LinkAccounts"
import ProfileForm from "@/components/ProfileForm"

export default function SettingsPage() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 h-full overflow-y-auto lg:overflow-hidden bg-base">
      {/* Left Pane: User Config */}
      <div className="flex flex-col h-auto lg:h-full border-b lg:border-b-0 lg:border-r border-strong lg:min-h-0">
        <ProfileForm />
      </div>

      {/* Right Pane: Integrations */}
      <div className="flex flex-col h-auto lg:h-full lg:min-h-0">
        <LinkAccounts />
      </div>
    </div>
  )
}
