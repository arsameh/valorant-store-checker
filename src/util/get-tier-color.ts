export async function getTierColor(tierUuid: string): Promise<string> {
    const response = await fetch(`https://valorant-api.com/v1/contenttiers/${tierUuid}`);
    const data = await response.json();
    const rawHex: string = data.data.highlightColor;

    const rgbHex = rawHex.substring(0, 6);

    return `#${rgbHex}`;
}