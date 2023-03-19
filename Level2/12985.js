function solution(n, a, b) {
  let answer = 1;
  if (a % 2 !== 0) {
    a++;
  }
  if (b % 2 !== 0) {
    b++;
  }
  while (a !== b) {
    a /= 2;
    b /= 2;
    if (a % 2 !== 0) {
      a++;
    }
    if (b % 2 !== 0) {
      b++;
    }
    answer++;
  }
  return answer;
}
