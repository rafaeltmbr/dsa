import { ListNode } from "../../../data-structures";

export const DEFAULT_STACK_SIZE = 4;

interface IListNodeLengthPair<T> {
  node: ListNode<T> | null;
  length: number;
}

export class SetOfStacks<T> {
  private stacks: IListNodeLengthPair<T>[] = [];
  private stackSize: number;

  constructor(stackSize = DEFAULT_STACK_SIZE) {
    this.stackSize = stackSize;
  }

  public push(e: T): SetOfStacks<T> {
    const lastStack = this.stacks.at(-1);

    if (!lastStack?.node || lastStack.length === this.stackSize) {
      this.stacks.push({ node: new ListNode(e), length: 1 });
      return this;
    }

    lastStack.node = new ListNode(e, lastStack.node);
    lastStack.length += 1;

    return this;
  }

  public pop(): T | null {
    const lastStack = this.stacks.at(-1);

    if (!lastStack?.node) return null;

    const element = lastStack.node.data;

    if (lastStack.length === 1) {
      this.stacks.pop();
      return element;
    }

    lastStack.node = lastStack.node.next;
    lastStack.length -= 1;

    return element;
  }

  public top(): T | null {
    const lastStack = this.stacks.at(-1);

    return lastStack?.node ? lastStack.node.data : null;
  }

  public isEmpty(): boolean {
    return !this.stacks.length;
  }

  public stacksLength(): number {
    return this.stacks.length;
  }
}
