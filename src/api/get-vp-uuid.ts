// helper cause the cost of a skin is tied to the currency uuid, I don't wanna risk hardcoding it

export async function getVpUuid(): Promise<string> {
    const response = await fetch("https://valorant-api.com/v1/currencies");
    const data = await response.json();
    return data.data.find((currency: any) => currency.displayName === "VALORANT POINTS").uuid;
}