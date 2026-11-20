import { useState } from "react"
import { deleteUser } from "@/api/user"
import { logout } from "@/api/auth"
import { useAction } from "@/hooks/useAction"
import { Button, StepError } from "./ui"

export default function AccountTab() {
  const [confirming, setConfirming] = useState(false)
  const { busy, error, run } = useAction({ refreshUser: false })

  const deleteAccount = async () => {
    const ok = await run(async () => {
      await deleteUser()
      await logout()
    })
    if (ok) window.location.href = "/"
  }

  return (
    <div className="p-4 space-y-8">
      <section className="space-y-3">
        <h3 className="font-bold uppercase tracking-wider text-text">
          Session
        </h3>
        <Button
          variant="ghost"
          onClick={async () => {
            await logout()
            window.location.href = "/"
          }}
        >
          logout
        </Button>
      </section>

      <section className="space-y-3 pt-6 border-t border-red/20">
        <h3 className="font-bold uppercase tracking-wider text-red">
          Danger zone
        </h3>
        <p className="text-subtext0 max-w-md">
          Deleting your account permanently erases all your data. This can't be
          undone.
        </p>

        {confirming ? (
          <div className="flex gap-2">
            <Button variant="danger" busy={busy} onClick={deleteAccount}>
              confirm delete
            </Button>
            <Button variant="ghost" onClick={() => setConfirming(false)}>
              cancel
            </Button>
          </div>
        ) : (
          <Button variant="danger" onClick={() => setConfirming(true)}>
            delete account
          </Button>
        )}
        <StepError message={error} />
      </section>
    </div>
  )
}
