function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => {
    return a - b;
  });
  for (let k of d) {
    if (k > budget) {
      break;
    }
    budget -= k;
    answer++;
  }
  return answer;
}

// 다른사람의 풀이 - 처음보는 ~문법(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)
// function solution(d, budget) {
//     return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
// }
