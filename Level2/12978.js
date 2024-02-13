function solution(N, road, K) {
  let answer = 0;
  const graph = Array.from(Array(N), () => Array(N).fill(Infinity));
  for (let k = 0; k < N; k++) {
    graph[k][k] = 0;
  }
  for (let [start, end, weight] of road) {
    if (graph[start - 1][end - 1] > weight) {
      graph[start - 1][end - 1] = weight;
      graph[end - 1][start - 1] = weight;
    }
  }
  for (let k = 0; k < N; k++) {
    for (let l = 0; l < N; l++) {
      for (let m = 0; m < N; m++) {
        if (graph[l][m] > graph[l][k] + graph[k][m]) {
          graph[l][m] = graph[l][k] + graph[k][m];
        }
      }
    }
  }
  for (let k = 0; k < N; k++) {
    if (graph[0][k] <= K) {
      answer++;
    }
  }
  return answer;
}
