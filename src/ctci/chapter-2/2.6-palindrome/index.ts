import { LinkedList, ListNode } from "../../../data-structures";

interface IFowardNode<T> {
  node: ListNode<T> | null;
}

const checkPalindromeRecursively = <T>(
  fwNode: IFowardNode<T>,
  backNode: ListNode<T> | null
): boolean => {
  if (!fwNode.node || !backNode || fwNode.node === backNode) return true;

  if (backNode.next && !checkPalindromeRecursively(fwNode, backNode.next))
    return false;

  if (fwNode.node.data !== backNode.data) return false;

  fwNode.node = fwNode.node.next;

  return true;
};

export const palindrome = <T>(list: LinkedList<T>): boolean => {
  if (!list.head) return true;

  return checkPalindromeRecursively({ node: list.head }, list.head.next);
};
