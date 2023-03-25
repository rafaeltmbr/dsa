import { LinkedList, ListNode } from "../../../data-structures";

export const getIntersection = <T>(
  l1: LinkedList<T>,
  l2: LinkedList<T>
): ListNode<T> | null => {
  const l2Set = new Set<ListNode<T>>();

  for (let n = l2.head; n; n = n.next) l2Set.add(n);

  for (let n = l1.head; n; n = n.next) if (l2Set.has(n)) return n;

  return null;
};
