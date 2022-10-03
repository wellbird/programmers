function solution(left, right) {
  let answer = 0;
  for (let k = left; k <= right; k++) {
    let cnt = 0;
    for (let i = 1; i <= k / 2; i++) {
      if (k % i === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      answer -= k;
    } else {
      answer += k;
    }
  }
  return answer;
}

// 다른사람의 풀이 - "제곱근이 정수이면 약수의 개수가 홀수다" 를 이용한 풀이
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
