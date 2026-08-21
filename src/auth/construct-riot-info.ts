import { RiotInfo } from "../types/riot-info";
import { getEntitlement } from "./get-entitlement";
import { getShard } from "./get-shard";
import { parseSessionCookies } from "./parse-session-cookies";
import promptAndParseLogin from "./prompt-and-parse-login.native";

export function constructRiotInfo(): Promise<RiotInfo> {
    const { authTokens, sessionCookies } = promptAndParseLogin();
    const entitlementToken = await getEntitlement(authTokens);
    const shard = await getShard(authTokens);

    const riotInfo: RiotInfo = {
        authTokens,
        entitlementToken,
        shard,
        sessionCookies
    };
    return riotInfo;
}