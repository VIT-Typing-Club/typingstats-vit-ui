import { useState } from "react"
import { useAuthStore } from "@/store/authStore"
import { updateProfile } from "@/api/user"
import type { User, UserUpdateRequest } from "@/api/types"
import { useAction } from "@/hooks/useAction"
import { Button, Input } from "./ui"

type FieldKey = keyof UserUpdateRequest
type VerifiedKey = "mtVerified" | "collegeVerified"

type Field = {
  key: FieldKey
  label: string
  placeholder: string
  type?: string
  verifiedKey?: VerifiedKey
}

const SECTIONS: { title: string; fields: Field[] }[] = [
  {
    title: "identity",
    fields: [
      { key: "displayName", label: "display name", placeholder: "Your name" },
      {
        key: "mtUrl",
        label: "monkeytype username",
        placeholder: "username",
        verifiedKey: "mtVerified",
      },
      {
        key: "collegeEmail",
        label: "college email",
        placeholder: "you@college.edu",
        type: "email",
        verifiedKey: "collegeVerified",
      },
    ],
  },
  {
    title: "social links",
    fields: [
      {
        key: "linkedinUrl",
        label: "linkedin",
        placeholder: "LinkedIn username",
      },
      { key: "githubUrl", label: "github", placeholder: "GitHub username" },
      { key: "xUrl", label: "x", placeholder: "X username" },
      {
        key: "instagramUrl",
        label: "instagram",
        placeholder: "Instagram Username",
      },
    ],
  },
]

const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields)

type FormValues = Record<FieldKey, string>

const toFormValues = (user: User): FormValues =>
  Object.fromEntries(
    ALL_FIELDS.map(({ key }) => [key, user[key] ?? ""]),
  ) as FormValues

const toChanges = (values: FormValues, user: User): UserUpdateRequest =>
  Object.fromEntries(
    ALL_FIELDS.map(({ key }) => [key, values[key].trim()] as const).filter(
      ([key, value]) => value !== (user[key] ?? ""),
    ), // maybe make this send null if empty, if backend is changed later to accept null correctly
  )

type Note = { text: string; className: string }

function verificationNote(
  field: Field,
  values: FormValues,
  user: User,
): Note | null {
  if (!field.verifiedKey) return null
  const verified = user[field.verifiedKey]
  const edited = values[field.key].trim() !== (user[field.key] ?? "")

  if (edited) {
    return verified
      ? { text: "changing this will unverify", className: "text-peach" }
      : null
  }
  return verified
    ? { text: "✓ verified", className: "text-green" }
    : { text: "unverified", className: "text-peach" }
}

type FieldRowProps = {
  field: Field
  value: string
  note: Note | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FieldRow({ field, value, note, onChange }: FieldRowProps) {
  return (
    <label className="block space-y-1">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-subtext0">{field.label}</span>
        {note && (
          <span className={`text-xs ${note.className}`}>{note.text}</span>
        )}
      </span>
      <Input
        name={field.key}
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

function Form({ user }: { user: User }) {
  const [values, setValues] = useState(() => toFormValues(user))
  const [saved, setSaved] = useState(false)
  const { busy, error, run } = useAction()

  const changes = toChanges(values, user)
  const dirty = Object.keys(changes).length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setSaved(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(await run(() => updateProfile(changes)))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-8 font-mono text-xs sm:text-sm"
    >
      {SECTIONS.map((section) => (
        <section key={section.title} className="space-y-4">
          <h3 className="font-bold uppercase tracking-wider text-text">
            {section.title}
          </h3>
          {section.fields.map((field) => (
            <FieldRow
              key={field.key}
              field={field}
              value={values[field.key]}
              note={verificationNote(field, values, user)}
              onChange={handleChange}
            />
          ))}
        </section>
      ))}

      <div className="flex items-center gap-4">
        <Button type="submit" busy={busy} disabled={!dirty}>
          save
        </Button>
        {saved && <span className="text-green">saved</span>}
        {error && <span className="text-red">{error}</span>}
      </div>
    </form>
  )
}

export default function ProfileForm() {
  const user = useAuthStore((s) => s.user)
  if (!user)
    return (
      <div className="p-4 font-mono text-subtext0">&gt; ERR: NO_SESSION</div>
    )
  return <Form user={user} />
}
