import { Cookies } from "@preeternal/react-native-cookie-manager";
import { AuthTokens } from "./auth-tokens";

export interface RiotInfo {
    authTokens: AuthTokens;
    entitlementToken: string;
    shard: string;
    sessionCookies: Cookies;
}