import { useState } from "react"
import { useAuthStore } from "@/store/authStore"
import {
  verifyMonkeytype,
  verifyTypegg,
  sendCollegeOtp,
  confirmCollegeOtp,
  deleteUser,
} from "@/api/user"
import { logout } from "@/api/auth"

type ActionButtonProps = {
  onClick: () => void
  disabled: boolean
  loading?: boolean
  loadingText?: string
  text: string
  isCancel?: boolean
}

const ActionButton = ({
  onClick,
  disabled,
  loading,
  loadingText,
  text,
  isCancel = false,
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`px-4 py-1.5 font-mono text-xs sm:text-sm border transition-all cursor-pointer ${
      isCancel
        ? "border-surface2 text-subtext0 hover:bg-surface0 hover:text-text"
        : "border-lavender/40 text-lavender hover:bg-lavender/10 disabled:opacity-50 disabled:border-overlay0 disabled:text-overlay0 disabled:cursor-not-allowed"
    }`}
  >
    {loading ? `> ${loadingText}` : `> ${text}`}
  </button>
)
export default function LinkAccounts() {
  const user = useAuthStore((s) => s.user)
  const fetchUser = useAuthStore((s) => s.fetchUser)

  const [loadingType, setLoadingType] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otp, setOtp] = useState("")

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [typeggInput, setTypeggInput] = useState("")

  if (!user) return null

  const handleVerify = async (
    type: string,
    apiCall: () => Promise<unknown>,
    onSuccess?: () => void,
  ) => {
    setLoadingType(type)
    setError(null)
    try {
      await apiCall()
      await fetchUser()
      if (onSuccess) onSuccess()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : `Failed to verify ${type}`)
    } finally {
      setLoadingType(null)
    }
  }

  const handleSendOtp = () => {
    handleVerify(
      "email_send",
      () => sendCollegeOtp(user.collegeEmail),
      () => setShowOtpInput(true),
    )
  }

  const handleConfirmOtp = () => {
    if (!otp) return
    handleVerify(
      "email_confirm",
      () => confirmCollegeOtp(otp),
      () => {
        setShowOtpInput(false)
        setOtp("")
      },
    )
  }

  const handleTypeggVerify = () => {
    if (!typeggInput.trim()) return

    handleVerify("typegg_verify", () => verifyTypegg(typeggInput.trim()))
  }

  const handleDeleteAccount = async () => {
    setDeleting(true)
    setError(null)

    try {
      await deleteUser()
      await logout()
      window.location.href = "/"
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete account")
    } finally {
      setDeleting(false)
    }
  }

  const renderMonkeytype = () => {
    if (user.mtVerified)
      return (
        <span className="text-green font-mono text-sm">
          ✓ Verified ({user.mtUrl})
        </span>
      )

    return (
      <div className="space-y-3">
        <span className="inline-block px-2 py-0.5 bg-peach/10 text-peach border border-peach/20 text-xs font-mono uppercase tracking-wider">
          ⚠ Unverified
        </span>
        <p className="text-subtext0 text-xs font-mono leading-relaxed max-w-md">
          Ensure your <a href="https://www.monkeytype.com">bio contains</a>{" "}
          <span className="text-mauve bg-surface0 px-1">[VIT]</span> before
          verifying. You may remove it after.
        </p>
        <ActionButton
          onClick={() =>
            handleVerify("monkeytype", () => verifyMonkeytype(user.mtUrl))
          }
          disabled={loadingType === "monkeytype" || !user.mtUrl}
          loadingText="verifying..."
          text="verify_monkeytype"
        />
      </div>
    )
  }

  const renderTypegg = () => {
    if (user.typeggId)
      return (
        <span className="text-green font-mono text-sm">
          ✓ Linked ({user.typeggId})
        </span>
      )

    return (
      <div className="space-y-3">
        <span className="inline-block px-2 py-0.5 bg-peach/10 text-peach border border-peach/20 text-xs font-mono uppercase tracking-wider">
          ⚠ Unlinked
        </span>
        <p className="text-subtext0 text-xs font-mono leading-relaxed max-w-md">
          Your Monkeytype Account must be linked to your TypeGG profile.
        </p>

        <div className="space-y-3 bg-crust p-3 border border-surface1 rounded-sm mt-2 max-w-lg">
          <span className="text-lavender font-mono text-xs uppercase tracking-wider block">
            Enter TypeGG Username
          </span>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="typegg_username"
              value={typeggInput}
              onChange={(e) => setTypeggInput(e.target.value)}
              className="bg-mantle border border-surface2 rounded-sm px-3 py-1.5 text-text font-mono text-sm focus:outline-none focus:border-lavender w-full sm:w-auto flex-1"
            />

            <div className="flex gap-2 shrink-0">
              <ActionButton
                onClick={handleTypeggVerify}
                disabled={
                  loadingType === "typegg_verify" || !typeggInput.trim()
                }
                loadingText="linking..."
                text="link_typegg"
              />
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
      </div>
    )
  }

  const renderEmail = () => {
    if (user.collegeVerified)
      return (
        <span className="text-green font-mono text-sm">
          ✓ Verified ({user.collegeEmail})
        </span>
      )

    if (showOtpInput) {
      return (
        <div className="space-y-3 bg-crust p-3 border border-surface1 rounded-sm mt-2">
          <span className="text-lavender font-mono text-xs uppercase tracking-wider block">
            Enter OTP Sent to Email
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-mantle border border-surface2 rounded-sm px-3 py-1.5 text-text font-mono text-sm focus:outline-none focus:border-lavender w-full sm:w-auto"
            />
            <div className="flex gap-2 shrink-0">
              <ActionButton
                onClick={handleConfirmOtp}
                disabled={loadingType === "email_confirm" || otp.length < 4}
                loadingText="verifying..."
                text="confirm_otp"
              />
              <ActionButton
                onClick={() => setShowOtpInput(false)}
                disabled={false}
                isCancel
                text="cancel"
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-3">
        <span className="inline-block px-2 py-0.5 bg-peach/10 text-peach border border-peach/20 text-xs font-mono uppercase tracking-wider">
          ⚠ Unverified
        </span>
        <div className="block">
          <ActionButton
            onClick={handleSendOtp}
            disabled={loadingType === "email_send" || !user.collegeEmail}
            loadingText="sending..."
            text="send_otp"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-base">
      <div className="bg-mantle border-strong px-3 py-1.5 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-subtext0 shrink-0">
        <span>[System_Integrations]</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6">
        {error && (
          <div className="mb-6 p-3 bg-red/10 border border-red/30 text-red font-mono text-xs">
            &gt; ERR: {"CHECK INSTRUCTIONS"}
          </div>
        )}

        <div className="space-y-6">
          <div className="pb-6 border-b border-subtle">
            <h3 className="font-mono text-sm text-text font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-mauve">#</span>
              <a href="https://www.monkeytype.com/account">
                Monkeytype Protocol
              </a>
            </h3>
            {renderMonkeytype()}
          </div>

          <div className="pb-6 border-b border-subtle">
            <h3 className="font-mono text-sm text-text font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-mauve">#</span>{" "}
              <a href="https://typegg.io/">TypeGG Protocol</a>
            </h3>
            {renderTypegg()}
          </div>

          <div className="pb-2">
            <h3 className="font-mono text-sm text-text font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-mauve">#</span> Institutional Auth
            </h3>
            {renderEmail()}
          </div>
          <div className="pt-6 border-t border-red/20">
            <h3 className="font-mono text-sm text-red font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>#</span> Danger Zone
            </h3>

            {!showDeleteConfirm ? (
              <div className="space-y-3">
                <p className="text-subtext0 text-xs font-mono max-w-md">
                  Deleting your account will permanently erase all your data.
                  This action cannot be undone.
                </p>

                <ActionButton
                  onClick={() => setShowDeleteConfirm(true)}
                  disabled={false}
                  text="delete_user"
                  isCancel
                />
              </div>
            ) : (
              <div className="space-y-3 bg-red/10 border border-red/30 p-3 rounded-sm">
                <p className="text-red text-xs font-mono">
                  CONFIRM: This will permanently delete your account.
                </p>

                <div className="flex gap-2">
                  <ActionButton
                    onClick={handleDeleteAccount}
                    disabled={deleting}
                    loadingText="deleting..."
                    text="confirm_delete"
                  />
                  <ActionButton
                    onClick={() => setShowDeleteConfirm(false)}
                    disabled={false}
                    isCancel
                    text="cancel"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
