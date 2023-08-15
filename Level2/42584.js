function solution(prices) {
  const answer = [];
  prices.forEach((item, idx) => {
    let cnt = 0;
    for (let k = idx + 1; k < prices.length; k++) {
      cnt++;
      if (prices[k] < item) {
        break;
      }
    }
    answer.push(cnt);
  });
  return answer;
}
