// Array.from을 이용하여 board를 만들면 시간초과
function solution(n, s, a, b, fares) {
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity));
  for (let k = 0; k < n; k++) {
    board[k][k] = 0;
  }
  fares.forEach((item) => {
    const [x, y, weight] = item;
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });
  for (let k = 0; k < n; k++) {
    for (let l = 0; l < n; l++) {
      for (let m = 0; m < n; m++) {
        if (board[l][m] > board[l][k] + board[k][m])
          board[l][m] = board[l][k] + board[k][m];
      }
    }
  }
  let answer = board[s - 1][a - 1] + board[s - 1][b - 1];
  for (let k = 0; k < n; k++) {
    const shortest = board[s - 1][k] + board[k][a - 1] + board[k][b - 1];
    answer = Math.min(answer, shortest);
  }
  return answer;
}
