import { ArrayList } from "../ArrayList";

export class StringBuilder {
  private buffer: ArrayList<string>;

  constructor() {
    this.buffer = new ArrayList<string>();
  }

  public concat(value: string): StringBuilder {
    this.buffer.push(value);

    return this;
  }

  public toString(): string {
    const strArray: string[] = [];

    for (let i = 0; i < this.buffer.length; i += 1)
      strArray.push(this.buffer.getFromIndex(i));

    return strArray.join("");
  }

  public clear(): void {
    this.buffer.clear();
  }
}
