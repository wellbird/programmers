function solution(board, skill) {
  let answer = 0;
  const n = board.length;
  const m = board[0].length;
  const acc = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    type === 1 ? (degree *= -1) : null;
    acc[r1][c1] += degree;
    acc[r1][c2 + 1] -= degree;
    acc[r2 + 1][c1] -= degree;
    acc[r2 + 1][c2 + 1] += degree;
  });

  for (let row = 0; row <= n; row++) {
    for (let col = 1; col <= m; col++) {
      acc[row][col] += acc[row][col - 1];
    }
  }

  for (let col = 0; col <= m; col++) {
    for (let row = 1; row <= n; row++) {
      acc[row][col] += acc[row - 1][col];
    }
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      board[row][col] += acc[row][col];
      if (board[row][col] > 0) answer++;
    }
  }

  return answer;
}
