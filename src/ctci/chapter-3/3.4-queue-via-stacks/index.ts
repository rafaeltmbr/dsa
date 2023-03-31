import { Stack } from "../../../data-structures/Stack";

export class MyQueue<T> {
  private newestStack: Stack<T>;
  private oldestStack: Stack<T>;

  constructor() {
    this.newestStack = new Stack<T>();
    this.oldestStack = new Stack<T>();
  }

  public enqueue(e: T): MyQueue<T> {
    this.newestStack.push(e);

    return this;
  }

  public dequeue(): T | null {
    this.loadOldestStackIfNecessary();

    return this.oldestStack.pop();
  }

  public head(): T | null {
    this.loadOldestStackIfNecessary();

    if (this.oldestStack.isEmpty()) return null;

    const element = this.oldestStack.pop();
    this.oldestStack.push(element as T);

    return element;
  }

  public isEmpty(): boolean {
    return this.newestStack.isEmpty() && this.oldestStack.isEmpty();
  }

  public loadOldestStackIfNecessary(): void {
    if (!this.oldestStack.isEmpty()) return;

    while (!this.newestStack.isEmpty())
      this.oldestStack.push(this.newestStack.pop() as T);
  }
}
