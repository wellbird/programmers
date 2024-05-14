function solution(n) {
  const dp = [0, 3, 11];
  const index = ~~(n / 2);
  if (n % 2 !== 0) {
    return 0;
  }
  if (index < 3) {
    return dp[index];
  }
  for (let k = 3; k <= index; k++) {
    dp[k] = dp[k - 1] * 3 + 2;
    for (let l = 1; l < k - 1; l++) {
      dp[k] += dp[l] * 2;
    }
    dp[k] %= 1000000007;
  }
  return dp[index];
}
