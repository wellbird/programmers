function solution(N, number) {
  if (N === number) return 1;
  const dp = Array(9)
    .fill()
    .map(() => new Set());
  dp.forEach((item, index) => {
    if (index !== 0) item.add(Number(String(N).repeat(index)));
  });
  for (let k = 1; k <= 8; k++) {
    for (let l = 1; l < k; l++) {
      for (const num1 of dp[l]) {
        for (const num2 of dp[k - l]) {
          dp[k].add(num1 + num2);
          dp[k].add(num1 * num2);
          dp[k].add(num1 - num2);
          dp[k].add(Math.floor(num1 / num2));
        }
      }
    }
    if (dp[k].has(number)) {
      return k;
    }
  }
  return -1;
}
