import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPublicProfile } from "@/api/user";
import type { PublicProfile } from "@/api/types";

export default function PublicProfilePage() {
    const { username } = useParams<{ username: string }>();

    const [profile, setProfile] = useState<PublicProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    if (loading) return <div>Loading profile for {username}...</div>;
    if (error) return <div>{error}</div>;
    if (!profile) return <div>Profile not found.</div>;

    return (
        <div>
            <div>
                {profile.avatarUrl ? (
                    <img src={profile.avatarUrl} alt="Avatar" />
                ) : (
                    <div />
                )}

                <div>
                    <h1>
                        {profile.displayName || profile.discordUsername}
                    </h1>
                    <p>@{profile.discordUsername}</p>
                </div>
            </div>

            <ul>
                <li>
                    <strong>Monkeytype: </strong>
                    {profile.mtVerified ? (
                        <a
                            href={`https://monkeytype.com/profile/${profile.mtUrl}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {profile.mtUrl} ✓ Verified
                        </a>
                    ) : (
                        <span>Not verified</span>
                    )}
                </li>

                <li>
                    <strong>TypeGG: </strong>
                    {profile.typeggUsername ? (
                        <span>
                            {profile.typeggUsername} ✓ Linked
                        </span>
                    ) : (
                        <span>Not linked</span>
                    )}
                </li>

                {(profile.githubUrl || profile.linkedinUrl) && (
                    <li>
                        <strong>Links: </strong>
                        <div>
                            {profile.githubUrl && (
                                <a
                                    href={`https://github.com/${profile.githubUrl}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            )}
                            {profile.linkedinUrl && (
                                <a
                                    href={`https://linkedin.com/in/${profile.linkedinUrl}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            )}
                            {profile.xUrl && (
                                <a
                                    href={`https://x.com/${profile.xUrl}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    X
                                </a>
                            )}
                            {profile.instagramUrl && (
                                <a
                                    href={`https://instagram.com/${profile.instagramUrl}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            )}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}