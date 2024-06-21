import { createClient } from "redis";

type DecacheAdapter = {
  set_kv: (k: string, v: string) => Promise<number>;
  get_key: (k: string) => Promise<string | null>;
  del_key: (k: string) => Promise<number>;
}

type RedisClient = ReturnType<typeof createClient>;
export default function redisAdapter(l2Client: RedisClient): DecacheAdapter;
