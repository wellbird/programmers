function solution(n) {
  let answer = 1;
  for (let k = 1; k <= n / 2; k++) {
    if (n % k === 0) {
      answer++;
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - Array, map, filter 이용
// function solution(n) {
//     return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length
// }

// 다른사람의 풀이 2 - 제곱근 이용
// function solution(n) {
//     let ans = 0;
//     for (let i = 1; i < Math.sqrt(n); i++)
//         if (n%i === 0) ans+=2;
//     return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
// }
