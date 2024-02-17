function solution(m, n, puddles) {
  const arr = Array.from({ length: n }, () => Array(m).fill(null));
  puddles.forEach(([row, col], _) => {
    arr[col - 1][row - 1] = 0;
  });
  arr[0][0] = 1;
  for (let k = 0; k < n; k++) {
    for (let l = 0; l < m; l++) {
      if (arr[k][l] !== 0) {
        if (k === 0 && l === 0) {
          continue;
        } else if (k === 0) {
          arr[k][l] = arr[k][l - 1];
        } else if (l === 0) {
          arr[k][l] = arr[k - 1][l];
        } else {
          arr[k][l] = (arr[k - 1][l] + arr[k][l - 1]) % 1000000007;
        }
      }
    }
  }
  return arr[n - 1][m - 1];
}
