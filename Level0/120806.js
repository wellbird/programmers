function solution(num1, num2) {
  return ((num1 / num2) * 1000) << 0;
}

// 다른사람의 풀이 1 - Math.floor 이용
// const solution = (num1, num2) => Math.floor(num1 / num2 * 1000)

// 다른사람의 풀이 2 - parseInt 이용
// function solution(num1, num2) {
//     return parseInt(num1 / num2 * 1000);
// }
