class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return !this.queue.length;
  }
}

function solution(n, costs) {
  const graph = {};
  const startNode = costs[0][0];
  for (let [v1, v2, weight] of costs) {
    if (!graph[v1]) {
      graph[v1] = [];
    }
    if (!graph[v2]) {
      graph[v2] = [];
    }
    graph[v1].push([v2, weight]);
    graph[v2].push([v1, weight]);
  }
  const nodes = new Set();
  const edgesQueue = new PriorityQueue();
  const mst = [];

  function addEdges(node) {
    nodes.add(node);
    for (let edge of graph[node]) {
      if (!nodes.has(edge[0])) {
        edgesQueue.enqueue(edge[0], edge[1]);
      }
    }
  }

  addEdges(startNode);

  while (!edgesQueue.isEmpty()) {
    const { node, priority } = edgesQueue.dequeue();
    if (!nodes.has(node)) {
      addEdges(node);
      mst.push([startNode, node, priority]);
    }
  }

  return mst.reduce((cur, acc) => (cur += acc[2]), 0);
}
