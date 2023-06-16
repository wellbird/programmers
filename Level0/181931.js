function solution(a, d, included) {
  let answer = 0;
  included.forEach((item, index) => {
    if (item) {
      answer += a + index * d;
    }
  });
  return answer;
}
