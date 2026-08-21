import CookieManager from '@preeternal/react-native-cookie-manager';

export async function parseSessionCookies(): Promise<Record<string, string>> {
    const cookies = await CookieManager.get('https://auth.riotgames.com');
    
    const cookieMap: Record<string, string> = {};
    
    Object.entries(cookies).forEach(([key, cookie]) => {
    cookieMap[key] = cookie.value;
  });
    
    return cookieMap;
}