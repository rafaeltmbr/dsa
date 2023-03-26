import { LinkedList, ListNode } from "../../../data-structures";

export const getCollisionNode = <T>(
  first?: ListNode<T> | null,
  second?: ListNode<T> | null,
  isSecondSlow?: boolean
): ListNode<T> | null => {
  while (first && second) {
    if (first === second) return first;

    first = first.next;
    second = isSecondSlow ? second?.next : second.next?.next;
  }

  return null;
};

export const getLoopStart = <T>(list: LinkedList<T>): ListNode<T> | null => {
  const collision = getCollisionNode(list.head?.next, list.head?.next?.next);
  if (!collision) return null;

  return getCollisionNode(list.head, collision, true);
};
