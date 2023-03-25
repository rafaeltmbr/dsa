import { LinkedList } from "../../../data-structures";

import { getIntersection } from ".";

describe("intersection test suite", () => {
  test("it should return null for empty lists", () => {
    const list1 = new LinkedList<number>();
    list1.addArrayToTail([1, 2, 3]);

    const list2 = new LinkedList<number>();
    const list3 = new LinkedList<number>();

    expect(getIntersection(list2, list1)).toBe(null);
    expect(getIntersection(list1, list2)).toBe(null);
    expect(getIntersection(list2, list3)).toBe(null);
  });

  test("it should return the head for the same lists", () => {
    const list1 = new LinkedList<number>();
    list1.addArrayToTail([1, 2, 3]);

    const list2 = new LinkedList<number>();

    expect(getIntersection(list1, list1)).toBe(list1.head);
    expect(getIntersection(list2, list2)).toBe(null);
  });

  test("it should return null for nonintersecting lists", () => {
    const list1 = new LinkedList<number>();
    list1.addArrayToTail([1, 2, 3]);

    const list2 = new LinkedList<number>();
    list2.addArrayToTail([1, 2, 3]);

    expect(getIntersection(list1, list2)).toBe(null);
    expect(getIntersection(list2, list1)).toBe(null);
  });

  test("it should return the intersection node", () => {
    const list1 = new LinkedList<number>();
    list1.addArrayToTail([1, 2, 3]);
    const secondNode = list1.head?.next;

    if (!secondNode) throw Error("Second node expected");

    const list2 = new LinkedList<number>();
    list2.head = secondNode;

    const list3 = new LinkedList<number>();
    list3.addArrayToTail([1, 2]);

    const tail = list3.head?.next;
    if (!tail) throw new Error("Tail node expected");

    tail.next = list2.head;

    const list4 = new LinkedList<number>();
    list4.addToHead(1);
    if (!list4.head)
      throw new Error("Element should be addded to the list head");

    list4.head.next = secondNode;

    expect(getIntersection(list1, list2)).toBe(secondNode);
    expect(getIntersection(list2, list1)).toBe(secondNode);

    expect(getIntersection(list2, list3)).toBe(list2.head);
    expect(getIntersection(list3, list2)).toBe(list2.head);

    expect(getIntersection(list1, list3)).toBe(secondNode);
    expect(getIntersection(list3, list1)).toBe(secondNode);

    expect(getIntersection(list1, list4)).toBe(secondNode);
    expect(getIntersection(list4, list1)).toBe(secondNode);
  });
});
