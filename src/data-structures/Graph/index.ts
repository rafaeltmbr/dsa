export class GraphNode<T> {
  constructor(public value: T, public neighbours: GraphNode<T>[] = []) {}
}
