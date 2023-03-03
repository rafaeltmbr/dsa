import { createHash } from "crypto";

class LinkedListNode<T> {
  public value: T;
  public next?: LinkedListNode<T>;

  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next;
  }
}

type KeyAndValue<T> = [string, T];

export class HashMap<T> {
  private slots: (LinkedListNode<KeyAndValue<T>> | undefined)[];

  constructor(slotsSize: number = 32) {
    this.slots = new Array(slotsSize);
  }

  public insert(key: string, value: T): void {
    const savedNode = this.getNode(key);

    if (savedNode) {
      savedNode.value = [key, value];
      return;
    }

    const index = this.getSlotIndex(key);
    const newNode = new LinkedListNode(
      [key, value] as KeyAndValue<T>,
      this.slots[index]
    );
    this.slots[index] = newNode;
  }

  public retrieve(key: string): T | undefined {
    return this.getNode(key)?.value[1];
  }

  public has(key: string): boolean {
    return !!this.getNode(key);
  }

  public delete(key: string): void {
    const index = this.getSlotIndex(key);

    for (
      let prev = undefined, node = this.slots[index];
      node;
      prev = node, node = node.next
    ) {
      if (node.value[0] !== key) continue;

      if (prev) prev.next = node.next;
      else this.slots[index] = node.next;
    }
  }

  public clear(): void {
    for (let i = 0; i < this.slots.length; i += 1) this.slots[i] = undefined;
  }

  public entries(): string[] {
    const entries: string[] = [];

    for (let i = 0; i < this.slots.length; i += 1)
      for (let node = this.slots[i]; node; node = node.next)
        entries.push(node.value[0]);

    return entries;
  }

  private getNode(key: string): LinkedListNode<KeyAndValue<T>> | undefined {
    const index = this.getSlotIndex(key);

    for (let node = this.slots[index]; node; node = node.next)
      if (node.value[0] === key) return node;

    return undefined;
  }

  private getSlotIndex(key: string): number {
    return this.hash(key) % this.slots.length;
  }

  private hash(key: string): number {
    const hash = createHash("sha256");
    hash.update(key);
    return parseInt(hash.digest("hex").toString().slice(-6), 16);
  }

  public getSlotsBalance(): number[] {
    const balance: number[] = [];

    for (const slot of this.slots) {
      let count = 0;

      for (let node = slot; node; node = node.next) count += 1;

      balance.push(count);
    }

    return balance;
  }
}
