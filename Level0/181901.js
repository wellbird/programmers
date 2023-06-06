function solution(n, k) {
  let answer = [];
  let idx = 1;
  while (k * idx <= n) {
    answer.push(idx * k);
    idx++;
  }
  return answer;
}
