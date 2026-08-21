import { AuthTokens } from "./auth-tokens";

export interface RiotInfo {
    authTokens: AuthTokens;
    entitlementToken: string;
    shard: string;
    sessionCookies: Record<string, string>;
}