import { Skin } from "../types/skin";
import { getFinalPrice } from "../util/get-final-price";

export async function getSkinInfo(skinOffer: {uuid: string, price: number}[]): Promise<Skin[]> {
    const skinArray: Skin[] = [];
    for(const offer of skinOffer) {
        const response = await fetch(`https://valorant-api.com/v1/weapons/skinlevels/${offer.uuid}`);
        const data = await response.json();
        skinArray.push({
            uuid: data.data.uuid,
            name: data.data.displayName,
            price: offer.price,
            picture: data.data.displayIcon
        });
    }
    return skinArray;
}