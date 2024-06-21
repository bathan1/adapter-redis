import redisAdapter from "../src/index.js";
import { describe, it, expect, beforeEach ,afterEach } from "vitest";
import { createClient } from "redis";

describe("basic string operations", () => {
  let client = createClient();
  let adapter;

  beforeEach(async () => {
    adapter = redisAdapter(client);
    await client.connect();
  });
  afterEach(async () => {
    await client.del("key")
    await client.disconnect();
  });

  it("returns 0 after successfully writing to its database", async () => {
    const rc = await adapter.set_kv("key", "value");
    expect(rc).toEqual(0);
  });

  it("returns 1 after unsuccessfully writing to its database", async () => {
    // client unexpectedly disconnects..
    await client.disconnect();
    const rc = await adapter.set_kv("key", "value");
    expect(rc).toEqual(1);
    await client.connect();
  });
});

