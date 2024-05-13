function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let k = 2; k <= n; k++) {
    for (let l = 1; l <= k; l++) {
      dp[k] += dp[l - 1] * dp[k - l];
    }
  }
  return dp[n];
}
