function solution(n) {
  let answer = 0;
  if (n % 2 === 0) {
    for (let k = 0; k <= n; k += 2) {
      answer += k ** 2;
    }
  } else {
    for (let k = 1; k <= n; k += 2) {
      answer += k;
    }
  }
  return answer;
}
