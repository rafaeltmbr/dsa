import { LinkedList, ListNode } from "../../../data-structures";

const trailStartZero = (list: LinkedList<number>): void => {
  for (let n = list.head; n; n = n.next) {
    list.head = n;

    if (n.data) break;
  }
};

const reverseList = <T>(list: LinkedList<T>): void => {
  let n = list.head;
  let prev: ListNode<T> | null = null;

  while (n?.next) {
    const next = n.next;
    n.next = prev;
    prev = n;
    n = next;
  }

  if (n) n.next = prev;

  list.head = n;
};

const sum = (
  l1: LinkedList<number>,
  l2: LinkedList<number>,
  result: LinkedList<number>
): void => {
  let carry = 0;

  for (
    let a = l1.head, b = l2.head;
    a || b;
    a = a?.next || null, b = b?.next || null
  ) {
    const sum = (a?.data || 0) + (b?.data || 0) + carry;
    carry = sum >= 10 ? 1 : 0;
    result.addToHead(sum % 10);
  }

  if (carry) result.addToHead(1);
};

export const sumLists = (
  l1: LinkedList<number>,
  l2: LinkedList<number>
): LinkedList<number> => {
  reverseList(l1);
  reverseList(l2);

  const result = new LinkedList<number>();
  sum(l1, l2, result);
  trailStartZero(result);

  return result;
};
