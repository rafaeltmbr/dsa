import { HashMap } from ".";

import { getRandomValues } from "../../util";

describe("HashMap class test suite", () => {
  test("it should initialize an empty hash map", () => {
    const map = new HashMap();

    expect(map.entries().length).toBe(0);
  });

  test("it should insert and retrive elements", () => {
    const VALUES_SIZE = 1_000;
    const map = new HashMap();
    const values = getRandomValues(VALUES_SIZE);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      map.insert(i.toString(), values[i]);

    expect(map.entries().length).toBe(VALUES_SIZE);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      expect(map.retrieve(i.toString())).toBe(values[i]);
  });

  test("it should check if element exists", () => {
    const map = new HashMap();

    map.insert("a", Math.random());

    expect(map.has("a")).toBeTruthy();

    expect(map.has("b")).toBeFalsy();
  });

  test("it should delete elements", () => {
    const VALUES_SIZE = 1_000;
    const map = new HashMap();
    const values = getRandomValues(VALUES_SIZE);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      map.insert(i.toString(), values[i]);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      expect(map.has(i.toString())).toBeTruthy();

    map.delete("10");
    expect(map.has("10")).toBeFalsy();
  });

  test("it should clear elements", () => {
    const VALUES_SIZE = 1_000;
    const map = new HashMap();
    const values = getRandomValues(VALUES_SIZE);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      map.insert(i.toString(), values[i]);

    expect(map.entries().length).toBe(VALUES_SIZE);

    map.clear();
    expect(map.entries().length).toBe(0);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      expect(map.has(i.toString())).toBeFalsy();
  });

  test("it should get the entries", () => {
    const VALUES_SIZE = 1_000;
    const map = new HashMap();
    const values = getRandomValues(VALUES_SIZE).sort((a, b) => a - b);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      map.insert(i.toString(), values[i]);

    const entries = map
      .entries()
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

    expect(entries.length).toBe(VALUES_SIZE);

    for (let i = 0; i < VALUES_SIZE; i += 1)
      expect(entries[i]).toBe(i.toString());
  });
});
