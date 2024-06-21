export function make_set_kv(l2client) {
  return async (k, v) => {
    try {
      await l2client.set(k, v);
      return 0;
    } catch (error) {
      return 1;
    }
  }
}

export function make_get_key(l2client) {
  return async (k) => {
    try {
      const value = await l2client.get(k);
      if (!value)
        return null;
      return value;
    } catch (error) {
      return null;
    }
  }
}

export function make_del_key(l2client) {
  return async (k) => {
    try {
      const rc = await l2client.del(k);
      if (rc === 1)
        return 0;
      return 1;
    } catch (error) {
      return 1;
    }
  }
}
