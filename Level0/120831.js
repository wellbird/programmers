function solution(n) {
  let answer = 0;
  for (let k = 0; k <= n; k += 2) {
    answer += k;
  }
  return answer;
}

// 다른사람의 풀이 - Math.floor 사용
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }
