import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { updateProfile } from "@/api/user";
import type { UserUpdateRequest } from "@/api/types";

export default function ProfileForm() {
    const user = useAuthStore((s) => s.user);
    const fetchUser = useAuthStore((s) => s.fetchUser);

    const [formData, setFormData] = useState<UserUpdateRequest>({
        displayName: "",
        collegeEmail: "",
        mtUrl: "",
        linkedinUrl: "",
        githubUrl: "",
    });

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || "",
                collegeEmail: user.collegeEmail || "",
                mtUrl: user.mtUrl || "",
                linkedinUrl: user.linkedinUrl || "",
                githubUrl: user.githubUrl || "",
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setSuccess(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        setSuccess(false);

        try {
            await updateProfile(formData);
            await fetchUser();
            setSuccess(true);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Failed to update profile");
        } finally {
            setSaving(false);
        }
    };

    if (!user) return <p>login to view profile</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>

            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>Profile updated successfully!</div>}

            <div>
                <label htmlFor="displayName">Display Name</label>
                <input id="displayName" name="displayName" value={formData.displayName} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="collegeEmail">College Email (@vitstudent.ac.in)</label>
                <input id="collegeEmail" name="collegeEmail" type="email" value={formData.collegeEmail} onChange={handleChange} />
                {user.collegeVerified && formData.collegeEmail === user.collegeEmail && (
                    <small style={{ color: "green", marginLeft: "10px" }}>✓ Verified</small>
                )}
            </div>

            <div>
                <label htmlFor="mtUrl">Monkeytype Profile URL</label>
                <input id="mtUrl" name="mtUrl" value={formData.mtUrl} onChange={handleChange} />
                {user.mtVerified && formData.mtUrl === user.mtUrl && (
                    <small style={{ color: "green", marginLeft: "10px" }}>✓ Verified</small>
                )}
            </div>

            <div>
                <label htmlFor="linkedinUrl">LinkedIn URL</label>
                <input id="linkedinUrl" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="githubUrl">GitHub URL</label>
                <input id="githubUrl" name="githubUrl" value={formData.githubUrl} onChange={handleChange} />
            </div>

            <button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
            </button>
        </form>
    );
}