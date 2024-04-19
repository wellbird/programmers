function solution(money) {
  const dp1 = [];
  const dp2 = [];
  dp1.push(money[0], Math.max(money[0], money[1]));
  dp2.push(money[1], Math.max(money[1], money[2]));

  for (let k = 2; k < money.length - 1; k++) {
    dp1.push(Math.max(dp1[k - 1], dp1[k - 2] + money[k]));
    dp2.push(Math.max(dp2[k - 1], dp2[k - 2] + money[k + 1]));
  }

  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
}
