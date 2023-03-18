import { LinkedList } from "../../../data-structures";

import { partition } from ".";

const isPartitionValid = (list: LinkedList<number>, x: number): boolean => {
  let isRightPartitionSide = false;

  for (let n = list.head; n; n = n.next) {
    if (isRightPartitionSide && n.data < x) return false;
    else if (n.data >= x) isRightPartitionSide = true;
  }

  return true;
};

describe("partition test suite", () => {
  test("it should work on an empty string", () => {
    const list = new LinkedList<number>();

    let x = Math.random();
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);

    x = Math.random();
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);

    x = Math.random();
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);
  });

  test("it should partition elements less than x", () => {
    const list = new LinkedList<number>();

    list.addToTail(1).addToTail(5).addToTail(3).addToTail(2).addToTail(4);

    const x = 6;
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);
  });

  test("it should partition elements greater than x", () => {
    const list = new LinkedList<number>();

    list.addToTail(7).addToTail(5).addToTail(3).addToTail(8).addToTail(4);

    const x = 2;
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);
  });

  test("it should partition elements around x", () => {
    const list = new LinkedList<number>();

    list
      .addToTail(3)
      .addToTail(5)
      .addToTail(8)
      .addToTail(5)
      .addToTail(10)
      .addToTail(2)
      .addToTail(1);

    const x = 5;
    partition(list, x);
    expect(isPartitionValid(list, x)).toBe(true);

    const list2 = new LinkedList<number>();

    list
      .addToTail(3)
      .addToTail(5)
      .addToTail(8)
      .addToTail(5)
      .addToTail(10)
      .addToTail(2)
      .addToTail(1);

    const x2 = 7;
    partition(list, x2);
    expect(isPartitionValid(list2, x)).toBe(true);
  });
});
