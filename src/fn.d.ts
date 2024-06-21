import { createClient } from "redis";

export type RedisClient = ReturnType<typeof createClient>;
export function make_set_kv(l2client: RedisClient): (k: string, v: string) => Promise<number>;
export function make_get_key(l2client: RedisClient): (k: string) => Promise<string | null>;
export function make_del_key(l2client: RedisClient): (k: string) => Promise<number>;
