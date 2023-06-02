function solution(numbers, n) {
  let answer = 0;
  for (let k of numbers) {
    if (answer > n) {
      break;
    }
    answer += k;
  }
  return answer;
}
