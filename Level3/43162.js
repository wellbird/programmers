function solution(n, computers) {
  let visited = [false];
  let answer = 0;
  function dfs(k) {
    visited[k] = true;
    for (let l = 0; l < computers[k].length; l++) {
      if (computers[k][l] === 1 && !visited[l]) {
        dfs(l);
      }
    }
  }
  for (let k = 0; k < computers.length; k++) {
    if (!visited[k]) {
      dfs(k);
      answer++;
    }
  }
  return answer;
}
