import { useState, useEffect } from "react"
import { useAuthStore } from "@/store/authStore"
import { updateProfile } from "@/api/user"
import type { UserUpdateRequest } from "@/api/types"

type ConfigLineProps = {
  num: number
  label?: string
  id?: keyof UserUpdateRequest
  type?: string
  value?: string
  verified?: boolean
  showVerified?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isComment?: boolean
  commentText?: string
  isEmpty?: boolean
}

const ConfigLine = ({
  num,
  label,
  id,
  type = "text",
  value,
  verified,
  showVerified,
  onChange,
  isComment,
  commentText,
  isEmpty,
}: ConfigLineProps) => {
  return (
    <div className="flex group hover:bg-surface0/40 transition-colors">
      {/* Line Number Column */}
      <div className="w-10 sm:w-12 text-right pr-3 sm:pr-4 text-surface2 select-none shrink-0 py-1 border-r border-surface0/50 group-hover:text-overlay0 transition-colors">
        {num}
      </div>

      {/* Code Column */}
      <div className="flex-1 flex items-center py-1 pl-3 sm:pl-4 overflow-hidden">
        {isEmpty ? (
          <span className="h-5"></span> // Spacer for empty lines
        ) : isComment ? (
          <span className="text-overlay0 italic whitespace-nowrap">
            "{commentText}"
          </span>
        ) : (
          <>
            {/* Syntax Highlighting */}
            <span className="text-mauve mr-2 shrink-0">let</span>
            <span className="text-sapphire mr-2 shrink-0">g:{label}</span>
            <span className="text-text mr-2 shrink-0">=</span>
            <span className="text-overlay0 mr-1 shrink-0">"</span>

            {/* The actual input, stripped of all borders and backgrounds */}
            <input
              id={id}
              name={id}
              type={type}
              value={value || ""}
              onChange={onChange}
              className="bg-transparent border-none outline-none text-green focus:ring-0 p-0 w-full min-w-25"
              spellCheck="false"
              autoComplete="off"
            />

            <span className="text-overlay0 ml-1 shrink-0">"</span>

            {/* Inline Comments for Verification */}
            {showVerified && verified && (
              <span className="text-overlay0 italic ml-4 text-xs whitespace-nowrap shrink-0">
                " ✓ Verified
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function ProfileForm() {
  const user = useAuthStore((s) => s.user)
  const fetchUser = useAuthStore((s) => s.fetchUser)

  const [formData, setFormData] = useState<UserUpdateRequest>({
    displayName: "",
    collegeEmail: "",
    mtUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    xUrl: "",
    instagramUrl: "",
  })

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        collegeEmail: user.collegeEmail || "",
        mtUrl: user.mtUrl || "",
        linkedinUrl: user.linkedinUrl || "",
        githubUrl: user.githubUrl || "",
        xUrl: user.xUrl || "",
        instagramUrl: user.instagramUrl || "",
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSuccess(false)
    setError(null)
  }

  const sanitize = (data: UserUpdateRequest): UserUpdateRequest => {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === "" ? null : value,
      ]),
    ) as UserUpdateRequest
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      await updateProfile(sanitize(formData))
      await fetchUser()
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to write buffer")
    } finally {
      setSaving(false)
    }
  }

  if (!user)
    return (
      <div className="p-4 font-mono text-subtext0">&gt; ERR: NO_SESSION</div>
    )

  return (
    <div className="flex flex-col h-full bg-crust font-mono text-xs sm:text-sm">
      {/* Tmux Pane Header */}
      <div className="bg-mantle border-strong px-3 py-1.5 flex justify-between items-center uppercase tracking-widest text-subtext0 shrink-0">
        <span>[~/.config/typing-stats/.profilerc]</span>
      </div>

      {/* The Text Buffer Area */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 custom-scrollbar flex flex-col min-h-0"
      >
        <div className="py-2 overflow-y-auto custom-scrollbar flex-1">
          <ConfigLine
            num={1}
            isComment
            commentText=" User Identity Configuration"
          />
          <ConfigLine num={2} isEmpty />

          <ConfigLine
            num={3}
            label="display_name"
            id="displayName"
            value={formData.displayName ? formData.displayName : ""}
            onChange={handleChange}
          />

          <ConfigLine
            num={4}
            label="college_email"
            id="collegeEmail"
            type="email"
            value={formData.collegeEmail ? formData.collegeEmail : ""}
            onChange={handleChange}
            verified={user.collegeVerified}
            showVerified={formData.collegeEmail === user.collegeEmail}
          />

          <ConfigLine
            num={5}
            label="monkeytype_username"
            id="mtUrl"
            value={formData.mtUrl ? formData.mtUrl : ""}
            onChange={handleChange}
            verified={user.mtVerified}
            showVerified={formData.mtUrl === user.mtUrl}
          />
          <ConfigLine num={6} isEmpty />
          <ConfigLine num={7} isComment commentText=" Social Integrations" />
          <ConfigLine num={8} isEmpty />

          <ConfigLine
            num={9}
            label="linkedin_url"
            id="linkedinUrl"
            value={formData.linkedinUrl ? formData.linkedinUrl : ""}
            onChange={handleChange}
          />
          <ConfigLine
            num={10}
            label="github_url"
            id="githubUrl"
            value={formData.githubUrl ? formData.githubUrl : ""}
            onChange={handleChange}
          />
          <ConfigLine
            num={11}
            label="x_url"
            id="xUrl"
            value={formData.xUrl ? formData.xUrl : ""}
            onChange={handleChange}
          />
          <ConfigLine
            num={12}
            label="instagram_url"
            id="instagramUrl"
            value={formData.instagramUrl ? formData.instagramUrl : ""}
            onChange={handleChange}
          />

          <ConfigLine num={13} isEmpty />

          <ConfigLine num={14} isComment commentText=" Daily Competition Verification Guide" />
          <ConfigLine num={15} isEmpty />

          <ConfigLine
            num={16}
            isComment
            commentText=" Step 1: Link your Monkeytype account (line 5, Monkeytype Protocol)"
          />
          <ConfigLine
            num={17}
            isComment
            commentText=" → Add [VIT] to your Monkeytype Bio, and click verify_monkeytype on the right pane"
          />

          <ConfigLine num={18} isEmpty />

          <ConfigLine
            num={19}
            isComment
            commentText=" Step 2: Connect Monkeytype to TypeGG"
          />
          <ConfigLine
            num={20}
            isComment
            commentText=" → Ensure the same Monkeytype account is used for VIT Typing Stats"
          />
          <ConfigLine
            num={21}
            isComment
            commentText=" → Link that account to your typegg.io profile"
          />

          <ConfigLine num={22} isEmpty />

          <ConfigLine
            num={23}
            isComment
            commentText=" Step 3: Verify TypeGG"
          />
          <ConfigLine
            num={24}
            isComment
            commentText=" → Enter your TypeGG username in the right pane under the TypeGG protocol"
          />
          <ConfigLine
            num={25}
            isComment
            commentText=" → Click 'link_typegg' on the to complete setup"
          />

          <ConfigLine num={26} isEmpty />

          <ConfigLine
            num={27}
            isComment
            commentText=" ✔ Once verified, you can participate in the daily leaderboard"
          />
        </div>

        {/* Vim Command Line / Status Line (Acts as the Submit Button) */}
        <div className="shrink-0 mt-auto">
          {/* Feedback Messages rendered like Vim echomsg */}
          {error && (
            <div className="px-4 py-1 text-red bg-red/10 border-t border-red/20 text-xs">
              E484: {error}
            </div>
          )}
          {success && (
            <div className="px-4 py-1 text-green bg-green/10 border-t border-green/20 text-xs">
              ".profilerc" written
            </div>
          )}

          {/* The Command Bar */}
          <div className="flex items-center bg-mantle border-t border-strong px-3 py-2 text-text">
            <span className="text-overlay0 mr-2 shrink-0">:</span>
            <button
              type="submit"
              disabled={saving}
              className="bg-transparent border-none outline-none text-lavender hover:text-mauve transition-colors font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex-1 text-left"
            >
              {saving ? "w (writing...)" : "w (click or press enter to save)"}
            </button>
            <span className="text-surface2 text-xs shrink-0 ml-4 hidden sm:block">
              utf-8[unix]
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
