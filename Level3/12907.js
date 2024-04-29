function solution(n, money) {
    const dp = Array(n + 1).fill(0)
    dp[0] = 1
    for(const coin of money){
        for(let k = coin; k <= n; k += 1){
            dp[k] += dp[k - coin] % 1000000007
        }
    }
    return dp[n] % 1000000007
}