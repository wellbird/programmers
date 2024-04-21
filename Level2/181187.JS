function solution(r1, r2) {
  let answer = 0;
  for (let k = 1; k <= r2; k++) {
    if (k < r1) {
      answer +=
        Math.floor(Math.sqrt(r2 ** 2 - k ** 2)) -
        Math.ceil(Math.sqrt(r1 ** 2 - k ** 2)) +
        1;
    } else {
      answer += Math.floor(Math.sqrt(r2 ** 2 - k ** 2)) + 1;
    }
  }
  answer *= 4;
  return answer;
}
