import { ListNode } from "../../../data-structures";

export class StackMin<T> {
  private head: ListNode<T> | null = null;
  private minHead: ListNode<T> | null = null;

  constructor(private compareFunction: (a: T, b: T) => number) {}

  public push(e: T): StackMin<T> {
    if (!this.minHead || this.compareFunction(e, this.minHead.data) <= 0)
      this.minHead = new ListNode(e, this.minHead);

    this.head = new ListNode(e, this.head);

    return this;
  }

  public pop(): T | null {
    if (!this.head || !this.minHead) return null;

    if (this.compareFunction(this.head.data, this.minHead.data) === 0)
      this.minHead = this.minHead.next;

    const element = this.head.data;
    this.head = this.head.next;

    return element;
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public min(): T | null {
    return this.minHead ? this.minHead.data : null;
  }

  public top(): T | null {
    return this.head ? this.head.data : null;
  }
}
