/**
 * Min o Max Heap. What tells if the heap is min or max is the comparision function
 * passed in the constructor.
 */

export class Heap<T> {
  private nodes: T[] = [];

  /**
   * @param compareFunction swap the compared elements if the returning value is a positive number.
   */

  constructor(
    private compareFunction: (a: T, b: T) => number = (a, b) => (a > b ? 1 : -1)
  ) {}

  public getRoot(): T | null {
    return this.nodes.length ? this.nodes[0] : null;
  }

  public isEmpty(): boolean {
    return !this.nodes.length;
  }

  public insert(e: T): Heap<T> {
    this.nodes.push(e);
    this.bottomUpRebalance();
    return this;
  }

  public extractRoot(): T | null {
    if (!this.nodes.length) return null;

    if (this.nodes.length === 1) return this.nodes.pop() as T;

    const extracted = this.nodes[0];
    this.nodes[0] = this.nodes.pop() as T;
    this.topDownRebalance();

    return extracted;
  }

  private bottomUpRebalance(): void {
    for (
      let i = this.nodes.length - 1, parentIndex = Heap.getParentIndex(i);
      i > 0;
      parentIndex = Heap.getParentIndex(i)
    ) {
      if (this.compareFunction(this.nodes[parentIndex], this.nodes[i]) <= 0)
        break;

      this.swapNodes(parentIndex, i);
      i = parentIndex;
    }
  }

  private static getParentIndex(index: number): number {
    return index && Math.floor((index - 1) / 2);
  }

  private swapNodes(aIndex: number, bIndex: number): void {
    const temp = this.nodes[aIndex];
    this.nodes[aIndex] = this.nodes[bIndex];
    this.nodes[bIndex] = temp;
  }

  private topDownRebalance(): void {
    for (
      let i = 0, [left, right] = this.getChildrenIndexes(i);
      i < this.nodes.length - 1;
      [left, right] = this.getChildrenIndexes(i)
    ) {
      if (!left) break;

      const parent = this.nodes[i];

      if (!right) {
        if (this.compareFunction(parent, this.nodes[left]) <= 0) break;

        this.swapNodes(i, left);
        i = left;
        continue;
      }

      const childComparison = this.compareFunction(
        this.nodes[left],
        this.nodes[right]
      );
      const smallerChildIndex = childComparison <= 0 ? left : right;

      if (this.compareFunction(parent, this.nodes[smallerChildIndex]) <= 0)
        break;

      this.swapNodes(i, smallerChildIndex);
      i = smallerChildIndex;
    }
  }

  private getChildrenIndexes(
    parentIndex: number
  ): [] | [number] | [number, number] {
    const lastIndex = this.nodes.length - 1;
    if (parentIndex >= lastIndex) return [];

    const left = parentIndex * 2 + 1;
    const right = left + 1;

    return left > lastIndex ? [] : right > lastIndex ? [left] : [left, right];
  }
}
