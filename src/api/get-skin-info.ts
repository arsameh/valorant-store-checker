import { Skin } from "../types/skin";
import { getSkinUuidFromLevel } from "../util/skin-level-mapper";
import { getFinalPrice } from "../util/get-final-price";

export async function getSkinInfo(skinOffer: {uuid: string, price: number}[]): Promise<Skin[]> {
    const skinArray: Skin[] = [];
    for(const offer of skinOffer) {
        const skinUuid = await getSkinUuidFromLevel(offer.uuid);
        if (!skinUuid) continue;

        const response = await fetch(`https://valorant-api.com/v1/weapons/skins/${skinUuid}`);
        const data = await response.json();
        skinArray.push({
            uuid: data.data.uuid,
            name: data.data.displayName,
            price: offer.price,
            picture: data.data.displayIcon,
            tierUuid: data.data.contentTierUuid,
        });
    }
    return skinArray;
}