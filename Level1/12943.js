function solution(num) {
  let answer = 0;
  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2;
      answer++;
    } else {
      num *= 3;
      num++;
      answer++;
    }
  }
  answer = answer > 500 ? -1 : answer;
  return answer;
}

// 다른사람의 풀이 1 - 재귀함수(느린속도)
// function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }

// 다른사람의 풀이 2 - 함수화
// const solution = (num) => collatzGuessCount(num, 0);
// const collatzGuessCount = (num, acc) =>
//   (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);
// const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
