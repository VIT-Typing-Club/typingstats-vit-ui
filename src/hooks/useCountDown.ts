import { useEffect, useState } from "react";

export function useCountdown(targetTime: number) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const update = () => {
            const diff = Math.max(
                0,
                Math.floor((targetTime - Date.now()) / 1000)
            );
            setSeconds(diff);
        };

        update();

        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [targetTime]);

    return seconds;
}