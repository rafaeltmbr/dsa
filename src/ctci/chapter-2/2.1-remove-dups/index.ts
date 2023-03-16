import { LinkedList, ListNode } from "../../../data-structures";

/**
 * Remove duplicate elements from the given linked list
 * @param list instace of LinkedList class
 */

export const removeDups = <T>(list: LinkedList<T>): void => {
  const set = new Set<T>();

  if (!list.head) return;

  set.add(list.head.data);

  for (let prev: ListNode<T> = list.head; prev.next; ) {
    if (set.has(prev.next.data)) {
      prev.next = prev.next.next;
      continue;
    }

    set.add(prev.next.data);
    prev = prev.next;
  }
};
