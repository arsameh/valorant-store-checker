import { SkinOffer } from "../types/skin-offer";
import { getVpUuid } from "./get-vp-uuid";

export async function parseSkinOffers(skinOffers: unknown[]): Promise<SkinOffer[]> {
    const skinOffersArray: {uuid: string, price: number}[] = [];
    const vpUuid = await getVpUuid();

    for(const rawOffer of skinOffers) {
        const offer = rawOffer as any;
        skinOffersArray.push({
            uuid: offer.OfferID,
            price: offer.Cost[vpUuid],
        });
    }
    return skinOffersArray;
}