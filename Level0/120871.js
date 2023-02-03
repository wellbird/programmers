function solution(n) {
  let answer = 0;
  for (let k = 0; k < n; k++) {
    answer++;
    while (answer % 3 === 0 || String(answer).includes("3")) {
      answer++;
    }
  }
  return answer;
}
