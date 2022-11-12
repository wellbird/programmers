const solution = (n) => {
  let answer = 0;
  while (true) {
    if (7 * answer >= n) {
      break;
    }
    answer++;
  }
  return answer;
};

// 다른사람의 풀이 1 - Math.ceil 이용
// function solution(n) {
//   return Math.ceil(n / 7);
// }

// 다른사람의 풀이 2 - 삼항연산자와 나머지 이용
// function solution(n) {
//     return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
// }
