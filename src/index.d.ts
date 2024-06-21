export default function redisAdapter(l2client: any): {
    set_kv: (k: string, v: string) => Promise<0 | 1>;
    get_key: (k: string) => Promise<string>;
    del_key: (k: string) => Promise<0 | 1>;
};
