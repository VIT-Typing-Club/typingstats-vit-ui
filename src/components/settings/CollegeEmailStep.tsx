import { useState } from "react"
import { confirmCollegeOtp, sendCollegeOtp, updateProfile } from "@/api/user"
import type { User } from "@/api/types"
import { useAction } from "@/hooks/useAction"
import { Button, Input, Step, StepError } from "./ui"

export default function CollegeEmailStep({ user }: { user: User }) {
  const [email, setEmail] = useState(user.collegeEmail ?? "")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)

  const send = useAction()
  const confirm = useAction()

  const sendCode = async () => {
    const address = email.trim()
    const ok = await send.run(async () => {
      if (address !== user.collegeEmail)
        await updateProfile({ collegeEmail: address })
      await sendCollegeOtp(address)
    })
    if (ok) setOtpSent(true)
  }

  const changeEmail = (value: string) => {
    setEmail(value)
    setOtpSent(false)
  }

  return (
    <Step
      n={3}
      title="college email"
      done={user.collegeVerified}
      summary={user.collegeEmail}
    >
      <Input
        type="email"
        placeholder="you@college.edu"
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
      />
      <Button busy={send.busy} disabled={!email.trim()} onClick={sendCode}>
        {otpSent ? "resend code" : "send code"}
      </Button>
      <StepError message={send.error} />

      {otpSent && (
        <>
          <Input
            inputMode="numeric"
            placeholder="code from your inbox"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button
            busy={confirm.busy}
            disabled={otp.length < 4}
            onClick={() => confirm.run(() => confirmCollegeOtp(otp))}
          >
            confirm
          </Button>
          <StepError message={confirm.error} />
        </>
      )}
    </Step>
  )
}
