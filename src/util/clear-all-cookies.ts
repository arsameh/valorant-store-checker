import CookieManager from '@preeternal/react-native-cookie-manager'
import {throwExpression} from '../util/throw-expression'

export async function clearAllCookies(): Promise<void> {
    try {
        await CookieManager.clearAll(true);
    } catch (error) {
        throwExpression('Error clearing cookies:' + error);
    }
}