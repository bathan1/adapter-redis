import type { RedisClient } from "./fn.js";

type DecacheAdapter = {
  set_kv: (k: string, v: string) => Promise<number>;
  get_key: (k: string) => Promise<string | null>;
  del_key: (k: string) => Promise<number>;
}

export default function redisAdapter(l2Client: RedisClient): DecacheAdapter;
