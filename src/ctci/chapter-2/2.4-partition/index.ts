import { LinkedList, ListNode } from "../../../data-structures";

interface partitionPointers {
  head: ListNode<number> | null;
  tail: ListNode<number> | null;
}

const addToPartition = (partition: partitionPointers, n: ListNode<number>) => {
  if (!partition.head) partition.head = n;

  if (!partition.tail) {
    partition.tail = n;
    return;
  }

  partition.tail.next = n;
  partition.tail = n;
};

interface IJoinPartitionsParams {
  list: LinkedList<number>;
  left: partitionPointers;
  right: partitionPointers;
}

const joinPartitions = ({ list, left, right }: IJoinPartitionsParams): void => {
  if (right.tail) right.tail.next = null;

  if (!left.head) {
    list.head = right.head;
    return;
  }

  list.head = left.head;
  if (left.tail) left.tail.next = right.head;
};

export const partition = (list: LinkedList<number>, x: number): void => {
  const left: partitionPointers = { head: null, tail: null };
  const right: partitionPointers = { head: null, tail: null };

  for (let n = list.head; n; n = n.next) {
    if (n.data < x) addToPartition(left, n);
    else addToPartition(right, n);
  }

  joinPartitions({ list, left, right });
};
