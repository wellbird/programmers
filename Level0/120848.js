function solution(n) {
  let answer = 1;
  let acc = 1;
  while (acc <= n) {
    answer++;
    acc *= answer;
  }
  return answer - 1;
}
