function solution(n) {
  let answer = "";
  const numArr = [4, 1, 2];
  while (n) {
    answer = numArr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : ~~(n / 3);
  }
  return answer;
}

// 다른사람의 풀이
// function solution(n) {
//     return !n ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// }
