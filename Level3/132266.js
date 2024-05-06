// 일반적인 다익스트라로 푼다면 시간초과 => 모든 간선의 가중치가 1인 점을 이용하여 bfs 또는 배열을 간소화 시켜 풀이
// 아래의 코드는 bfs를 이용한 풀이
function bfs(n, graph, start) {
  const distances = Array(n).fill(Infinity);
  distances[start] = 0;
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const [neighbor] of graph[current]) {
      if (distances[neighbor] === Infinity) {
        distances[neighbor] = distances[current] + 1;
        queue.push(neighbor);
      }
    }
  }
  return distances;
}

function solution(n, roads, sources, destination) {
  const graph = Array.from({ length: n }, () => []);
  for (const [start, end] of roads) {
    graph[start - 1].push([end - 1]);
    graph[end - 1].push([start - 1]);
  }
  const distances = bfs(n, graph, destination - 1);
  const answer = sources.map((source) => {
    const distance = distances[source - 1];
    return distance === Infinity ? -1 : distance;
  });
  return answer;
}
