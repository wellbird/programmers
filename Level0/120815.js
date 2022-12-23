function solution(n) {
  let answer = 1;
  while (true) {
    const pizza = 6 * answer;
    if (pizza % n === 0) {
      break;
    } else {
      answer++;
    }
  }
  return answer;
}
