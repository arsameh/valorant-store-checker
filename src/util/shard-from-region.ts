import { throwExpression } from "./throw-expression";

const shardFromRegion = new Map<string, string>([
    ["eu", "eu"],
    ["pbe", "na"],
    ["ap", "ap"],
    ["kr", "kr"],
    ["latam", "na"],
    ["na", "na"],
    ["br", "na"],
]);

export function getShardFromRegion(region: string): string {
    const shard = shardFromRegion.get(region);
    if (!shard) {
        throwExpression(`No shard found for region: ${region}`);
    }
    return shard;
}
