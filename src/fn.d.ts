/**
 * @param {ReturnType<typeof import("redis").createClient>} l2client
 */
export function make_set_kv(l2client: ReturnType<typeof import("redis").createClient>): (k: string, v: string) => Promise<0 | 1>;
/**
 * @param {ReturnType<typeof import("redis").createClient>} l2client
 */
export function make_get_key(l2client: ReturnType<typeof import("redis").createClient>): (k: string) => Promise<string>;
/**
 * @param {ReturnType<typeof import("redis").createClient>} l2client
 */
export function make_del_key(l2client: ReturnType<typeof import("redis").createClient>): (k: string) => Promise<0 | 1>;
