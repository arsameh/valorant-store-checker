export async function getClientVersion(): Promise<string> {
    const response = await fetch("https://valorant-api.com/v1/version");
    const data = await response.json();
    return data.data.riotClientVersion;
}