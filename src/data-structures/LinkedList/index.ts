export class ListNode<T> {
  public data: T;
  public next: ListNode<T> | null;

  constructor(data: T, next: ListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  private _head: ListNode<T> | null = null;

  public get head(): ListNode<T> | null {
    return this._head;
  }

  public addToHead(data: T): LinkedList<T> {
    this._head = new ListNode(data, this._head);
    return this;
  }

  public addToTail(data: T): LinkedList<T> {
    const newNode = new ListNode(data);

    if (!this._head) {
      this._head = newNode;
      return this;
    }

    let last = this._head;
    for (; last.next; last = last.next);

    last.next = newNode;

    return this;
  }

  public remove(data: T): LinkedList<T> {
    if (!this._head) return this;

    if (this._head.data === data) {
      this._head = this._head.next;
      return this;
    }

    for (let prev = this._head; prev.next; prev = prev.next)
      if (prev.next.data === data) {
        prev.next = prev.next.next;
        return this;
      }

    return this;
  }
}
