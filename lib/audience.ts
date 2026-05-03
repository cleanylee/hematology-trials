export const AUDIENCE_COOKIE = "audience";
export const AUDIENCE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type Audience = "hcp" | "public";

export function readAudience(): Audience | null {
    if (typeof document === "undefined") return null;
    const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${AUDIENCE_COOKIE}=([^;]+)`));
    if (!m) return null;
    const v = decodeURIComponent(m[1]);
    return v === "hcp" || v === "public" ? v : null;
}

export function writeAudience(v: Audience) {
    document.cookie = `${AUDIENCE_COOKIE}=${v}; path=/; max-age=${AUDIENCE_MAX_AGE_SECONDS}; samesite=lax`;
}
