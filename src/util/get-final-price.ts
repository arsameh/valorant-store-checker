// I know regular skins don't have discounts, I'm just doing this cause it's probably gonna make it easier when I add nightmarekt support

export function getFinalPrice(basePrice: number, discount: number): number {
    if (discount) {
        return Math.floor(basePrice * (1 - discount / 100));
    }
    return basePrice;
}