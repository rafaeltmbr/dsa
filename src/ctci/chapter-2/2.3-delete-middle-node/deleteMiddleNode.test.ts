import { LinkedList, ListNode } from "../../../data-structures";

import { deleteMiddleNode } from ".";

describe("deleteMiddleNode test suite", () => {
  test("it should not work on last node", () => {
    const list = new LinkedList<string>();
    const values = ["a", "b", "c", "d", "e"];
    values.forEach((e) => list.addToTail(e));

    let node = list.head as ListNode<string>;
    while (node?.next) node = node.next;

    deleteMiddleNode(node);

    for (let n = list.head, i = 0; n; n = n.next, i += 1)
      expect(n.data).toEqual(values[i]);
  });

  test("it should remove te middle node", () => {
    const list = new LinkedList<string>();
    const values = ["a", "b", "c", "d", "e"];
    values.forEach((e) => list.addToTail(e));

    let node = list.head as ListNode<string>;
    while (node?.next && node.data !== "c") node = node.next;

    deleteMiddleNode(node);

    const newValues = ["a", "b", "d", "e"];
    let i = 0;
    for (let n = list.head; n; n = n.next, i += 1)
      expect(n.data).toEqual(newValues[i]);

    expect(i).toEqual(newValues.length);
  });
});
