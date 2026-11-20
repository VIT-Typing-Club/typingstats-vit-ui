import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react"

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      spellCheck={false}
      autoComplete="off"
      {...props}
      className="w-full bg-mantle border border-surface2 px-3 py-2 text-text focus:outline-none focus:border-lavender"
    />
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  busy?: boolean
  variant?: "primary" | "danger" | "ghost"
}

const VARIANTS = {
  primary: "border-lavender/40 text-lavender hover:bg-lavender/10",
  danger: "border-red/40 text-red hover:bg-red/10",
  ghost: "border-surface2 text-subtext0 hover:bg-surface0 hover:text-text",
}

export function Button({
  busy,
  variant = "primary",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={busy || disabled}
      {...props}
      className={`px-4 py-2 border cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]}`}
    >
      {busy ? "> working..." : `> ${children}`}
    </button>
  )
}

type StepProps = {
  n: number
  title: string
  done: boolean
  summary?: string | null
  children: ReactNode
}

/** A checklist row. The form (children) only shows while the step is incomplete. */
export function Step({ n, title, done, summary, children }: StepProps) {
  return (
    <section className="border-b border-surface0/60 px-4 py-3">
      <header className="flex items-center gap-3">
        <span className={done ? "text-green" : "text-peach"}>
          {done ? "[x]" : "[ ]"}
        </span>
        <h3 className="font-bold text-text">
          {n}. {title}
        </h3>
        {done && summary && (
          <span className="ml-auto truncate text-xs text-overlay0">
            {summary}
          </span>
        )}
      </header>
      {!done && <div className="mt-3 space-y-3 pl-9">{children}</div>}
    </section>
  )
}

export function StepError({ message }: { message: string | null }) {
  return message ? <p className="text-xs text-red">E484: {message}</p> : null
}

export function Hint({ children }: { children: ReactNode }) {
  return <p className="text-subtext0 leading-relaxed">{children}</p>
}
