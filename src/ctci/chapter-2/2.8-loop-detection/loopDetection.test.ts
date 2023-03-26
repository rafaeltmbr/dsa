import { LinkedList } from "../../../data-structures";

import { getLoopStart } from ".";

describe("loop detection test suite", () => {
  test("it should accept empty linked lists", () => {
    const list = new LinkedList<number>();
    expect(getLoopStart(list)).toBeNull();
  });

  test("it should return null for noncircular lists", () => {
    expect(getLoopStart(new LinkedList().addArrayToTail([1]))).toBeNull();
    expect(getLoopStart(new LinkedList().addArrayToTail([1, 2, 3]))).toBeNull();
    expect(getLoopStart(new LinkedList().addArrayToTail([1, 2, 1]))).toBeNull();
  });

  test("it should return the begginning of the loop", () => {
    const list1 = new LinkedList<number>().addArrayToTail([1]);
    if (!list1.head) throw new Error("Head should not be null");
    list1.head.next = list1.head;
    expect(getLoopStart(list1)).toBe(list1.head);

    const list2 = new LinkedList<number>().addArrayToTail([1, 2, 3]);
    if (!list2.head?.next?.next) throw new Error("Tail should not be null");
    list2.head.next.next.next = list2.head.next;
    expect(getLoopStart(list2)).toBe(list2.head.next);

    const list3 = new LinkedList<string>();
    list3.addArrayToTail(["A", "B", "C", "D", "E"]);
    const tail3 = list3.head?.next?.next?.next?.next;
    if (!tail3) throw new Error("Tail should not be null");
    tail3.next = list3.head?.next?.next || null;
    expect(getLoopStart(list3)).toBe(list3.head?.next?.next);
  });
});
