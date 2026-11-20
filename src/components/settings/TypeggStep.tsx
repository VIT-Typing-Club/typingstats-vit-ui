import { useState } from "react"
import { verifyTypegg } from "@/api/user"
import type { User } from "@/api/types"
import { useAction } from "@/hooks/useAction"
import { Button, Hint, Input, Step, StepError } from "./ui"

export default function TypeggStep({ user }: { user: User }) {
  const [username, setUsername] = useState("")
  const { busy, error, run } = useAction()

  return (
    <Step n={2} title="typegg" done={!!user.typeggId} summary={user.typeggId}>
      {!user.mtVerified ? (
        <p className="text-overlay0">" complete step 1 first</p>
      ) : (
        <>
          <Hint>
            Link the same Monkeytype account on your{" "}
            <a
              className="underline"
              href="https://typegg.io"
              target="_blank"
              rel="noreferrer"
            >
              typegg.io
            </a>{" "}
            profile, then enter your TypeGG username.
          </Hint>
          <Input
            placeholder="typegg username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            busy={busy}
            disabled={!username.trim()}
            onClick={() => run(() => verifyTypegg(username.trim()))}
          >
            link
          </Button>
          <StepError message={error} />
        </>
      )}
    </Step>
  )
}
