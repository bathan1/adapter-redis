import { createClient } from "redis";

type RedisClient = ReturnType<typeof createClient>;

interface DecacheAdapter {
  set_kv: (k: string, v: string) => Promise<number>;
  get_key: (k: string) => Promise<string | null>;
  del_key: (k: string) => Promise<number>;
}

export default function redisAdapter(l2client: RedisClient): DecacheAdapter;
