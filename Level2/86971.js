function solution(n, wires) {
  let answer = Infinity;
  const tree = Array.from({ length: n + 1 }, () => []);

  for (const [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  for (const [v1, v2] of wires) {
    answer = Math.min(answer, Math.abs(2 * bfs(v1, v2, tree) - n));
  }

  return answer;
}

function bfs(root, exceptNode, tree) {
  let count = 0;
  const queue = [root];
  const visited = new Array(tree.length).fill(false);

  while (queue.length > 0) {
    const current = queue.shift();
    visited[current] = true;
    for (const node of tree[current]) {
      if (node !== exceptNode && visited[node] === false) {
        queue.push(node);
      }
    }
    count += 1;
  }

  return count;
}
