import { RiotInfo } from "../types/riot-info";
import { getClientVersion } from "../api/get-client-version";
import { Skin } from "../types/skin";

export async function getStore(riotInfo: RiotInfo): Promise<Skin[]> {
    const response = await fetch(`https://pd.${riotInfo.shard}.a.pvp.net/store/v3/storefront/${riotInfo.authTokens.puuid}`, {
        method: "POST",
        headers: {
            "X-Riot-ClientPlatform": "ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9",
            "X-Riot-ClientVersion": await getClientVersion(),
            "X-Riot-Entitlements-JWT": riotInfo.entitlementToken,
            "Authorization": `Bearer ${riotInfo.authTokens.accessToken}`,
            "User-Agent": "",
        
        },

        body: JSON.stringify({}),
    });

    const data = await response.json();

    return data.SkinsPanelLayout.SingleItemStoreOffers;
}