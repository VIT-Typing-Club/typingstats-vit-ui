import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { fetchPublicProfile } from "@/api/user";
import type { PublicProfile } from "@/api/types";

interface FetchRowProps {
    label: string;
    value?: string | null;
    isLink?: boolean;
    linkUrl?: string;
    verified?: boolean;
}

const DEFAULT_ASCII_ART = `
      .------------------------.
      |                        |
      |   >_typing_stats_vit   |
      |                        |
      |   [||||||||||||||||]   |
      |                        |
      '------------------------'
          |                |
        --'                '--
`;

const ASCII_DENSITY = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];

const FetchRow = memo(({ label, value, isLink = false, linkUrl = "", verified = false }: FetchRowProps) => {
    if (!value) return null;

    return (
        <div className="flex items-center text-sm font-mono whitespace-nowrap">
            <span className="text-lavender font-bold w-24 shrink-0">{label}</span>
            <span className="text-overlay0 mr-2">~</span>
            {isLink ? (
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text hover:text-mauve hover:underline transition-colors truncate max-w-[200px] sm:max-w-xs"
                >
                    {value}
                </a>
            ) : (
                <span className="text-text truncate max-w-[200px] sm:max-w-xs">{value}</span>
            )}

            {verified && (
                <span className="ml-2 text-[10px] text-green uppercase tracking-widest border border-green/30 bg-green/10 px-1 rounded-sm">
                    ✓ Verified
                </span>
            )}
        </div>
    );
});
FetchRow.displayName = "FetchRow";

export default function PublicProfilePage() {
    const { username } = useParams<{ username: string }>();

    const [profile, setProfile] = useState<PublicProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [asciiAvatar, setAsciiAvatar] = useState<string | null>(null);

    useEffect(() => {
        if (!username) return;

        let isMounted = true;

        (async () => {
            try {
                const data = await fetchPublicProfile(username);
                if (!isMounted) return;

                setProfile(data);
                setError(null);
            } catch (err: unknown) {
                if (!isMounted) return;

                setError(
                    err instanceof Error ? err.message : "User not found"
                );
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [username]);

    useEffect(() => {
        if (!profile?.avatarUrl) return;

        let isActive = true;

        const convertToAscii = () => {
            const img = new Image();
            img.crossOrigin = "Anonymous";

            img.onload = () => {
                if (!isActive) return;

                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d", { willReadFrequently: true });
                if (!ctx) return;
                const width = 40;
                const height = Math.floor((img.height / img.width) * width * 0.5);

                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(img, 0, 0, width, height);
                const imageData = ctx.getImageData(0, 0, width, height);
                const pixels = imageData.data;

                let asciiString = "";

                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];

                    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

                    const charIndex = Math.floor((luminance / 255) * (ASCII_DENSITY.length - 1));
                    asciiString += ASCII_DENSITY[charIndex];

                    if ((i / 4 + 1) % width === 0) {
                        asciiString += "\n";
                    }
                }

                setAsciiAvatar(asciiString);
            };

            img.onerror = () => {
                console.warn("Could not load image for ASCII conversion due to CORS or bad URL.");
            };

            img.src = profile.avatarUrl ? profile.avatarUrl : '';
        };

        convertToAscii();

        return () => { isActive = false; };
    }, [profile?.avatarUrl]);

    if (loading) {
        return (
            <div className="flex h-full bg-base p-6 font-mono text-sm text-subtext0">
                <span className="animate-pulse">&gt; fetching user_data for '{username}'...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-full bg-base p-6 font-mono text-sm text-red">
                &gt; ERR 404: {error}
            </div>
        );
    }

    if (!profile) return null;

    return (
        <div className="flex flex-col h-full bg-base overflow-y-auto custom-scrollbar p-4 sm:p-8">
            <div className="max-w-3xl w-full mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 mt-4 sm:mt-12">

                {/* Left Column: ASCII Art & Avatar */}
                <div className="flex flex-col items-center shrink-0">
                    <pre className="text-mauve font-mono text-[10px] sm:text-xs leading-tight select-none drop-shadow-md whitespace-pre">
                        {asciiAvatar || DEFAULT_ASCII_ART}
                    </pre>

                    {profile.avatarUrl && (
                        <div className="mt-4 flex items-center gap-2 border border-surface1 bg-crust px-3 py-1.5 rounded-full shadow-glow">
                            <img src={profile.avatarUrl} alt="Avatar" className="w-5 h-5 rounded-full" />
                            <span className="font-mono text-xs text-subtext0">img_backend_active</span>
                        </div>
                    )}
                </div>

                {/* Right Column: Neofetch Output */}
                <div className="flex flex-col w-full min-w-0">
                    <div className="font-mono text-base sm:text-lg font-bold mb-1 truncate">
                        <span className="text-lavender">{profile.discordUsername}</span>
                        <span className="text-overlay0">@</span>
                        <span className="text-mauve">typing-stats-vit</span>
                    </div>

                    <div className="text-surface2 font-mono mb-4 select-none">
                        ------------------------------------
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <FetchRow label="Display" value={profile.displayName || profile.discordUsername} />
                        <FetchRow label="Discord" value={profile.discordUsername} />
                        <FetchRow
                            label="Monkeytype"
                            value={profile.mtUrl || "None"}
                            isLink={!!profile.mtUrl}
                            linkUrl={profile.mtUrl ? `https://monkeytype.com/profile/${profile.mtUrl}` : undefined}
                            verified={profile.mtVerified}
                        />
                        <FetchRow
                            label="TypeGG"
                            value={profile.typeggUsername || "None"}
                            verified={!!profile.typeggUsername}
                        />

                        <div className="h-2" aria-hidden="true"></div>

                        <FetchRow label="GitHub" value={profile.githubUrl} isLink linkUrl={`https://github.com/${profile.githubUrl}`} />
                        <FetchRow label="LinkedIn" value={profile.linkedinUrl} isLink linkUrl={`https://linkedin.com/in/${profile.linkedinUrl}`} />
                        <FetchRow label="X" value={profile.xUrl} isLink linkUrl={`https://x.com/${profile.xUrl}`} />
                        <FetchRow label="Instagram" value={profile.instagramUrl} isLink linkUrl={`https://instagram.com/${profile.instagramUrl}`} />
                    </div>

                    <div className="mt-6 flex space-x-0 cursor-default select-none" aria-hidden="true">
                        <span className="text-surface1">███</span>
                        <span className="text-red">███</span>
                        <span className="text-green">███</span>
                        <span className="text-yellow">███</span>
                        <span className="text-blue">███</span>
                        <span className="text-mauve">███</span>
                        <span className="text-teal">███</span>
                        <span className="text-text">███</span>
                    </div>
                </div>
            </div>
        </div>
    );
}