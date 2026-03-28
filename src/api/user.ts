import { apiClient } from "@/api/client";
import type { PublicProfile, User, UserUpdateRequest } from "./types";

export const updateProfile = (data: UserUpdateRequest) =>
    apiClient<User>("/api/users/@me", {
        method: "PATCH",
        body: JSON.stringify(data),
    });

export const verifyMonkeytype = (username: string) =>
    apiClient<{ message: string }>("/api/verify/monkeytype", {
        method: "POST",
        body: JSON.stringify({ username })
    });

export const verifyTypegg = () =>
    apiClient<{ message: string }>("/api/verify/typegg", { method: "POST" });

export const sendCollegeOtp = (email: string) =>
    apiClient<{ message: string }>("/api/verify/college/send", {
        method: "POST",
        body: JSON.stringify({ email })
    });

export const confirmCollegeOtp = (code: string) =>
    apiClient<{ message: string }>("/api/verify/college/confirm", {
        method: "POST",
        body: JSON.stringify({ code })
    });

export const fetchPublicProfile = (username: string) =>
    apiClient<PublicProfile>(`/api/users/${username}`, { method: "GET" });