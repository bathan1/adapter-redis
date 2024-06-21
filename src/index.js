import { make_set_kv, make_del_key, make_get_key } from "./fn.js";

export default function redisAdapter(l2client) {
  let adapted = {};
  adapted.set_kv = make_set_kv(l2client);
  adapted.get_key = make_get_key(l2client);
  adapted.del_key = make_del_key(l2client);
  return adapted;
}

