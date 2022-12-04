function solution(n) {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
}

// 다른사람의 풀이 - Number.isInteger 이용
// function solution(n) {
//     return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }
