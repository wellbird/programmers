function solution(n) {
  let answer = [];
  for (let k = 1; k <= n; k += 2) {
    answer.push(k);
  }
  return answer;
}

// 다른사람의 풀이 1 - from. filter 이용
// const solution = (n) =>
//   Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);

// 다른사람의 풀이 2 - fill, map, filter 이용
// function solution(n) {
//     return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
// }
