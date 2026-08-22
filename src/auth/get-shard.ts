import { getShardFromRegion } from "../util/shard-from-region";
import { AuthTokens } from "../types/auth-tokens";

export async function getShard(authTokens: AuthTokens): Promise<string> {


    const response = await fetch("https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant", {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${authTokens.accessToken}`,
            "Content-Type": "application/json",
            'Accept': '*/*'
        },
        body: JSON.stringify({
            id_token: authTokens.idToken
        })
    });

    const data = await response.json();

    return getShardFromRegion(data.affinities.live);
}