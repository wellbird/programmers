function solution(n) {
  const sqrt = Math.floor(Math.sqrt(n));
  const answer = sqrt ** 2 === n ? (sqrt + 1) ** 2 : -1;
  return answer;
}

// 다른사람의 풀이
// function solution(n) {
//     return Math.sqrt(n)===parseInt(Math.sqrt(n))?Math.pow(Math.sqrt(n)+1,2):-1;
// }
