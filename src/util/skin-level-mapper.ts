let cachedSkinMap: Record<string, string> | null = null;

async function buildSkinMap(): Promise<void> {
  const response = await fetch('https://valorant-api.com/v1/weapons/skins');
  const json = await response.json();

  const map: Record<string, string> = {};

  for (const skin of json.data) {
    if (skin.levels && skin.levels.length > 0) {
      const level1Uuid = skin.levels[0].uuid;
      map[level1Uuid] = skin.uuid;
    }
  }

  cachedSkinMap = map;
}

export async function getSkinUuidFromLevel(levelUuid: string): Promise<string | null> {
    if (!cachedSkinMap) {
        await buildSkinMap();
    }

    return cachedSkinMap?.[levelUuid] || null;
}