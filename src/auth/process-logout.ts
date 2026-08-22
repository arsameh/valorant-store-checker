import CookieManager from "@preeternal/react-native-cookie-manager";

export async function processLogout() {
    await fetch('https://auth.riotgames.com/logout', {
      method: 'GET',
    });

    await CookieManager.clearAll(true);
    
}