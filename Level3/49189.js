function solution(n, edge) {
  const map = Array(n)
    .fill()
    .map(() => []);
  const distance = Array(n).fill(Infinity);
  const visited = Array(n).fill(false);

  edge.forEach(([a, b]) => {
    map[a - 1].push(b - 1);
    map[b - 1].push(a - 1);
  });

  let queue = [0];
  distance[0] = 0;

  while (queue.length) {
    let v = queue.shift();
    visited[v] = true;

    map[v].forEach((end) => {
      if (distance[end] > distance[v] + 1) {
        distance[end] = distance[v] + 1;
        queue.push(end);
      }
    });
  }

  return distance.filter((item) => item === Math.max(...distance)).length;
}
