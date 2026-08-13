import { RiotInfo } from "../types/riot-info";
import { getEntitlement } from "./get-entitlement";
import { getShard } from "./get-shard";
import { parseSessionCookies } from "./parse-session-cookies";
import { promptLogin } from "./prompt-login";

export async function constructRiotInfo(): Promise<RiotInfo> {
    const { authTokens, sessionCookies } = await promptLogin();
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