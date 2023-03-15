import { LinkedList } from "../../../data-structures";

import { kthToLast } from ".";

describe("kthToLast test suite", () => {
  test("it should return undefined for invalid indexes", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(kthToLast(list, -1)).toBeUndefined();
    expect(kthToLast(list, 5)).toBeUndefined();
  });

  test("it should return undefined on empty list", () => {
    expect(kthToLast(new LinkedList<number>(), 1)).toBeUndefined();
  });

  test("it should return kth to last element", () => {
    const list = new LinkedList<string>();

    list
      .addToTail("a")
      .addToTail("b")
      .addToTail("c")
      .addToTail("d")
      .addToTail("e");

    expect(kthToLast(list, 0)).toEqual("e");
    expect(kthToLast(list, 1)).toEqual("d");
    expect(kthToLast(list, 2)).toEqual("c");
    expect(kthToLast(list, 3)).toEqual("b");
    expect(kthToLast(list, 4)).toEqual("a");
    expect(kthToLast(list, 5)).toBeUndefined();
  });
});
