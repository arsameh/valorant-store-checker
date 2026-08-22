import CookieManager, { Cookies } from '@preeternal/react-native-cookie-manager';
import { throwExpression } from '../util/throw-expression';

export async function parseSessionCookies(): Promise<Cookies> {
    try {
        const cookies = await CookieManager.get('https://auth.riotgames.com');
        return cookies;
    } catch (error) {
        throwExpression('Error parsing session cookies:' + error);
    }
}