import { LinkedList, ListNode } from "../../../data-structures";

/**
 * return the kth element to last.
 *
 * e.g.:
 * list = a -> b -> c -> d -> e
 * kth = 2
 * Return 'c', as 'e' is the last element itself (index 0)
 * and 'd' is the 1st element from the last (index 1).
 *
 * @param list a linked list
 * @param kth the kth index (0 based)
 * @returns the kth to last
 */

export const kthToLast = <T>(
  list: LinkedList<T>,
  kth: number
): T | undefined => {
  if (kth < 0) return undefined;

  let p1: ListNode<T> | null = list.head;
  let p2: ListNode<T> | null = null;

  for (let i = 0; p1; i += 1, p1 = p1.next)
    if (i === kth) p2 = list.head;
    else if (p2) p2 = p2.next;

  return p2?.data;
};
