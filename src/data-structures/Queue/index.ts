import { ListNode } from "../LinkedList";

export class Queue<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  public add(e: T): Queue<T> {
    const node = new ListNode<T>(e);
    if (!this.head) this.head = node;

    if (this.tail) this.tail.next = node;

    this.tail = node;
    return this;
  }

  public remove(): T | null {
    if (!this.head) return null;

    const { data } = this.head;
    if (this.head === this.tail) this.tail = null;
    this.head = this.head.next;

    return data;
  }

  public isEmpty(): boolean {
    return !this.head;
  }
}
