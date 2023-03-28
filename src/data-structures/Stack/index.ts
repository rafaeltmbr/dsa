import { ListNode } from "../LinkedList";

export class Stack<T> {
  private top: ListNode<T> | null = null;

  public push(e: T): Stack<T> {
    this.top = new ListNode<T>(e, this.top);
    return this;
  }

  public pop(): T | null {
    if (!this.top) return null;

    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  public isEmpty(): boolean {
    return !this.top;
  }
}
