function solution(n) {
  const answer = [];
  for (let k = 1; k <= n / 2; k++) {
    if (n % k === 0) {
      answer.push(k);
    }
  }
  answer.push(n);
  return answer;
}
