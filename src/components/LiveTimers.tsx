import { useCountdown } from "@/hooks/useCountDown";

type Props = {
    targetTime: number;
    label: string;
};

const formatTime = (seconds: number) => {
    if (seconds <= 0) return "00:00";

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const parts =
        h > 0
            ? [h, m, s]
            : [m, s];

    return parts
        .map((v) => String(v).padStart(2, "0"))
        .join(":");
};

export default function LiveTimers({ targetTime, label }: Props) {
    const seconds = useCountdown(targetTime);

    return (
        <div>
            <strong>{label}</strong> {formatTime(seconds)}
        </div>
    );
}