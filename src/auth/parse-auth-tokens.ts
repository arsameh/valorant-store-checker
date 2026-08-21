import { AuthTokens } from "../types/auth-tokens";
import { throwExpression } from "../util/throw-expression"; 

export async function parseAuthTokens(url: string): Promise<AuthTokens> {

    const searchParams = new URLSearchParams((new URL(url)).hash.slice(1));
    const accessToken = searchParams.get("access_token") ?? throwExpression("access_token param missing");
    const idToken = searchParams.get("id_token") ?? throwExpression("id_token param missing");
    const expiresIn = parseInt(searchParams.get("expires_in") ?? throwExpression("expires_in param missing"));
    
    const accessTokenParts = accessToken.split('.');
    
    if(accessTokenParts.length !== 3) {
        throwExpression("access_token is not a valid JWT");
    }

    const puuid = JSON.parse(atob(accessTokenParts[1])).sub;

    if(!puuid) {
        throwExpression("puuid does not exist");
    }

    return {
        accessToken: accessToken,
        idToken: idToken,
        expiresIn: expiresIn,
        puuid: puuid,
    };
}