import { LinkedList } from "../../../data-structures";

import { sumLists } from ".";

describe("sumLists test suite", () => {
  test("it should accept empty lists", () => {
    const a = new LinkedList<number>();
    const b = new LinkedList<number>();
    b.addArrayToTail([1, 2]);

    expect(sumLists(a, b).toArray()).toEqual([1, 2]);
  });

  test("it should add lists of different lengths", () => {
    const a = new LinkedList<number>();
    const b = new LinkedList<number>();

    a.addArrayToTail([1, 2, 3, 4]);
    b.addArrayToTail([5, 2, 2]);
    expect(sumLists(a, b).toArray()).toEqual([1, 7, 5, 6]);
  });

  test("it should take care of overflow", () => {
    const a = new LinkedList<number>();
    const b = new LinkedList<number>();

    a.addArrayToTail([6]);
    b.addArrayToTail([9, 9, 9, 4]);
    expect(sumLists(a, b).toArray()).toEqual([1, 0, 0, 0, 0]);
  });

  test("it should trail start zeros", () => {
    const a = new LinkedList<number>();
    const b = new LinkedList<number>();

    a.addArrayToTail([0, 0, 5]);
    b.addArrayToTail([0, 0, 8, 0]);
    expect(sumLists(a, b).toArray()).toEqual([8, 5]);
  });
});
