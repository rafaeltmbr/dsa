import { LinkedList } from "../../../data-structures";

import { removeDups } from ".";

describe("removeDups test suite", () => {
  test("it should remove nothing from an empty list", () => {
    const list = new LinkedList<number>();

    removeDups(list);
    expect(list.head).toEqual(null);
  });

  test("it should remove nothing from non duplicated items list", () => {
    const list = new LinkedList<string>();

    const values = ["a", "b", "c", "d", "e"];
    for (const value of values) list.addToTail(value);

    removeDups(list);

    let i = 0;
    for (let n = list.head; n; n = n.next, i += 1)
      if (n.data !== values[i]) throw new Error("values don't match");

    expect(i).toEqual(values.length);
  });

  test("it should remove duplicate elements", () => {
    const list = new LinkedList<string>();

    const values = ["a", "b", "c", "d", "c", "a", "e"];
    for (const value of values) list.addToTail(value);

    removeDups(list);

    const set = new Set<string>();
    for (let n = list.head; n; n = n.next) {
      if (set.has(n.data)) throw new Error("found duplicate number");

      set.add(n.data);
    }

    expect(set.size).toEqual(5);
  });

  test("it should be case sensitive", () => {
    const list = new LinkedList<string>();

    const values = ["a", "b", "c", "d", "e", "A", "B", "C", "D", "e"];
    for (const value of values) list.addToTail(value);

    removeDups(list);

    let i = 0;
    for (let n = list.head; n; n = n.next, i += 1)
      if (n.data !== values[i]) throw new Error("values don't match");

    expect(i).toEqual(values.length - 1);
  });
});
