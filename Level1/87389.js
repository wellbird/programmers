function solution(n) {
  let answer = 0;
  for (let k = 0; k < 1000000; k++) {
    if (n % k === 1) {
      answer = k;
      break;
    }
  }
  return answer;
}

// while문을 이용한 다른사람의 풀이
// function solution(n, x = 1) {
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }
// }
