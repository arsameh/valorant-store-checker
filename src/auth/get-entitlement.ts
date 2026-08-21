import { AuthTokens } from "../types/auth-tokens";

export async function getEntitlement(authTokens: AuthTokens): Promise<string> {
    const response = await fetch("https://entitlements.auth.riotgames.com/api/token/v1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authTokens.accessToken}`,
            "User-Agent": ""
        }
    });
    const data = await response.json();
    return data.entitlements_token;
}