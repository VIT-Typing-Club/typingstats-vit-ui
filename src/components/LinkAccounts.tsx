import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { verifyMonkeytype, verifyTypegg, sendCollegeOtp, confirmCollegeOtp } from "@/api/user";

export default function LinkAccounts() {
    const user = useAuthStore((s) => s.user);
    const fetchUser = useAuthStore((s) => s.fetchUser);

    const [loadingType, setLoadingType] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");

    if (!user) return null;

    const handleVerify = async (
        type: string,
        apiCall: () => Promise<unknown>,
        onSuccess?: () => void
    ) => {
        setLoadingType(type);
        setError(null);
        try {
            await apiCall();
            await fetchUser();
            if (onSuccess) onSuccess();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : `Failed to verify ${type}`);
        } finally {
            setLoadingType(null);
        }
    };

    const handleSendOtp = () => {
        handleVerify("email_send", () => sendCollegeOtp(user.collegeEmail), () => setShowOtpInput(true));
    };

    const handleConfirmOtp = () => {
        if (!otp) return;
        handleVerify("email_confirm", () => confirmCollegeOtp(otp), () => {
            setShowOtpInput(false);
            setOtp("");
        });
    };

    const handleMonkeytypeVerify = () => {
        handleVerify("monkeytype", () => verifyMonkeytype(user.mtUrl));
    };

    const renderMonkeytype = () => {
        if (user.mtVerified) {
            return <span style={{ color: "green" }}>✓ Verified ({user.mtUrl})</span>;
        }

        return (
            <>
                <span style={{ color: "orange", display: "block" }}>⚠ Not Verified</span>
                <p style={{ margin: "0.5rem 0" }}><small>Ensure your Monkeytype bio contains [VIT] before verifying. You may remove that after verification.</small></p>
                <button
                    onClick={handleMonkeytypeVerify}
                    disabled={loadingType !== null || !user.mtUrl}
                >
                    {loadingType === "monkeytype" ? "Verifying..." : "Verify Monkeytype"}
                </button>
            </>
        );
    };

    const renderTypegg = () => {
        if (user.typeggId) {
            return <span style={{ color: "green" }}>✓ Linked ({user.typeggId})</span>;
        }

        return (
            <>
                <span style={{ color: "orange", display: "block" }}>⚠ Not Linked</span>
                <p style={{ margin: "0.5rem 0" }}><small>Your Discord account must be linked to your TypeGG profile.</small></p>
                <button
                    onClick={() => handleVerify("typegg", verifyTypegg)}
                    disabled={loadingType !== null}
                >
                    {loadingType === "typegg" ? "Linking..." : "Link TypeGG"}
                </button>
            </>
        );
    };

    const renderEmail = () => {
        if (user.collegeVerified) {
            return <span style={{ color: "green" }}>✓ Verified ({user.collegeEmail})</span>;
        }

        if (showOtpInput) {
            return (
                <div style={{ marginTop: "0.5rem" }}>
                    <span style={{ color: "orange", display: "block", marginBottom: "0.5rem" }}>⚠ OTP Sent</span>
                    <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        style={{ marginRight: "0.5rem" }}
                    />
                    <button
                        onClick={handleConfirmOtp}
                        disabled={loadingType === "email_confirm" || otp.length < 4}
                    >
                        {loadingType === "email_confirm" ? "Verifying..." : "Confirm OTP"}
                    </button>
                    <button onClick={() => setShowOtpInput(false)} style={{ marginLeft: "0.5rem" }}>Cancel</button>
                </div>
            );
        }

        return (
            <>
                <span style={{ color: "orange", display: "block", marginBottom: "0.5rem" }}>⚠ Not Verified</span>
                <button
                    onClick={handleSendOtp}
                    disabled={loadingType !== null || !user.collegeEmail}
                >
                    {loadingType === "email_send" ? "Sending..." : "Send OTP to Email"}
                </button>
            </>
        );
    };

    const liStyle = { marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid #eee" };

    return (
        <div>
            <h2>Linked Accounts & Verification</h2>
            {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}

            <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={liStyle}>
                    <strong style={{ display: "block", marginBottom: "0.5rem" }}>Monkeytype Account</strong>
                    <div>{renderMonkeytype()}</div>
                </li>

                <li style={liStyle}>
                    <strong style={{ display: "block", marginBottom: "0.5rem" }}>TypeGG Account</strong>
                    <div>{renderTypegg()}</div>
                </li>

                <li style={liStyle}>
                    <strong style={{ display: "block", marginBottom: "0.5rem" }}>VIT Student Email</strong>
                    <div>{renderEmail()}</div>
                </li>
            </ul>
        </div>
    );
}