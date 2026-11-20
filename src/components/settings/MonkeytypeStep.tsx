import { useState } from "react"
import { updateProfile, verifyMonkeytype } from "@/api/user"
import type { User } from "@/api/types"
import { useAction } from "@/hooks/useAction"
import { Button, Hint, Input, Step, StepError } from "./ui"

export default function MonkeytypeStep({ user }: { user: User }) {
  const [username, setUsername] = useState(user.mtUrl ?? "")
  const { busy, error, run } = useAction()

  const verify = () =>
    run(async () => {
      const name = username.trim()
      // Save what's typed first so verify never runs against stale data
      if (name !== user.mtUrl) await updateProfile({ mtUrl: name })
      await verifyMonkeytype(name)
    })

  return (
    <Step n={1} title="monkeytype" done={user.mtVerified} summary={user.mtUrl}>
      <Hint>
        Add <span className="text-mauve bg-surface0 px-1">[VIT]</span> to your{" "}
        <a
          className="underline"
          href="https://monkeytype.com/account"
          target="_blank"
          rel="noreferrer"
        >
          Monkeytype bio
        </a>
        , then verify. You can remove it afterwards.
      </Hint>
      <Input
        placeholder="monkeytype username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button busy={busy} disabled={!username.trim()} onClick={verify}>
        verify
      </Button>
      <StepError message={error} />
    </Step>
  )
}
