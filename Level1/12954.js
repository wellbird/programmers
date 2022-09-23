function solution(x, n) {
  let answer = [];
  let k = x;
  for (let i = 0; i < n; i++) {
    answer.push(k);
    k += x;
  }
  return answer;
}

// 다른사람의 풀이 1
// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

// 다른사람의 풀이 2
// function solution(x, n) {
//     return [...Array(n).keys()].map(v => (v + 1) * x);
// }

// 다른사람의 풀이 3
// function solution(x, n) {
//     return (n === 1) ? [x] : [ ...solution(x, n - 1), (x * n)];
// }
