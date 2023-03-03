export const ARRAY_LIST_MIN_ALLOCATED_SIZE = 10;

export class ArrayList<T> {
  private data: Array<T>;
  private _length: number;
  private _allocatedSize: number;

  constructor(allocatedSize: number = ARRAY_LIST_MIN_ALLOCATED_SIZE) {
    this._allocatedSize = Math.max(
      allocatedSize,
      ARRAY_LIST_MIN_ALLOCATED_SIZE
    );
    this.data = new Array(this._allocatedSize) as T[];
    this._length = 0;
  }

  public get length(): number {
    return this._length;
  }

  public get allocatedSize(): number {
    return this._allocatedSize;
  }

  public push(e: T): void {
    this.checkIfAllocatedSizeNeedToIncrease();
    this.data[this._length] = e;
    this._length += 1;
  }

  public pop(): T | undefined {
    if (!this._length) return undefined;

    this._length -= 1;
    const popped = this.data[this._length];
    this.checkIfAllocatedSizeNeedToDecrease();
    return popped;
  }

  public getFromIndex(index: number): T | undefined {
    const intergerIndex = Math.round(index);
    if (intergerIndex < 0 || intergerIndex >= this._length) return undefined;

    return this.data[index];
  }

  public setToIndex(index: number, value: T) {
    const intergerIndex = Math.round(index);
    if (intergerIndex < 0 || intergerIndex >= this._length) return undefined;

    this.data[index] = value;
  }

  private checkIfAllocatedSizeNeedToIncrease(): void {
    if (this._length < this._allocatedSize) return;

    const newAllocatedSize = 2 * this._allocatedSize;
    const newData = new Array(newAllocatedSize);

    for (let i = 0; i < this._allocatedSize; i += 1) newData[i] = this.data[i];

    this._allocatedSize = newAllocatedSize;
    this.data = newData;
  }

  private checkIfAllocatedSizeNeedToDecrease(): void {
    if (
      this._length > this._allocatedSize / 3 ||
      this._allocatedSize <= ARRAY_LIST_MIN_ALLOCATED_SIZE
    )
      return;

    const newAllocatedSize = this._allocatedSize / 2;
    const newData = new Array(newAllocatedSize);

    for (let i = 0; i < this._length; i += 1) newData[i] = this.data[i];

    this.data = newData;
    this._allocatedSize = newAllocatedSize;
  }
}
