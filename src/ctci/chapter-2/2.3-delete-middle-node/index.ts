import { ListNode } from "../../../data-structures";

export const deleteMiddleNode = <T>(node: ListNode<T>): void => {
  if (!node.next) return;

  node.data = node.next.data;
  node.next = node.next.next;
};
