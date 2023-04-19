import { GraphNode, Queue } from "../../../data-structures";

/**
 * Create and initialize a brand new set and queue with the given node element.
 * @param node The given node element.
 * @returns Return a brand new set and queue with a sigle element (node) in it.
 */

const createAndInitializeSetAndQueue = <T>(node: GraphNode<T>) => {
  const set = new Set<GraphNode<T>>([node]);

  const queue = new Queue<GraphNode<T>>();
  queue.add(node);

  return { set, queue };
};

/**
 * Single step Breadth Fist Search.
 * @param queue Queue of items to visit.
 * @param set Set of items added to the queue.
 * @param target The target element to be found.
 * @returns Return true if and only if the item is found.
 */

const singleStepBFS = <T>(
  queue: Queue<GraphNode<T>>,
  set: Set<GraphNode<T>>,
  target: GraphNode<T>
): boolean => {
  const item = queue.remove();
  if (!item) return false;

  if (item === target) return true;

  for (const neighbour of item.neighbours) {
    if (set.has(neighbour)) continue;

    queue.add(neighbour);
    set.add(neighbour);
  }

  return false;
};

/**
 * Bidirectional search to find if two nodes in a directed graph are connected.
 * Note: The parameters order does not matter.
 * @param node1 Graph node 1.
 * @param node2 Graph node 2.
 * @returns Return true if theres is path between the two directed nodes or false otherwise.
 */

export const isRouteBetweenNodes = <T>(
  node1: GraphNode<T>,
  node2: GraphNode<T>
): boolean => {
  const { queue: queue1, set: set1 } = createAndInitializeSetAndQueue(node1);
  const { queue: queue2, set: set2 } = createAndInitializeSetAndQueue(node2);

  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (singleStepBFS(queue1, set1, node2)) return true;
    if (singleStepBFS(queue2, set2, node1)) return true;
  }

  return false;
};
