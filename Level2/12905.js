function solution(board) {
  let answer = 0;
  const dp = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(0)
  );
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (row === 0 || col === 0) {
        dp[row][col] = board[row][col];
        if (dp[row][col] ** 2 > answer) {
          answer = dp[row][col] ** 2;
        }
      } else {
        if (board[row][col] > 0) {
          const up = dp[row - 1][col];
          const left = dp[row][col - 1];
          const cross = dp[row - 1][col - 1];
          dp[row][col] = Math.min(up, left, cross) + 1;
          if (dp[row][col] ** 2 > answer) {
            answer = dp[row][col] ** 2;
          }
        }
      }
    }
  }
  return answer;
}
