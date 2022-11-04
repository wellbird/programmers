function solution(number) {
  let answer = 0;
  for (let k = 0; k < number.length - 2; k++) {
    for (let l = k + 1; l < number.length - 1; l++) {
      for (let m = l + 1; m < number.length; m++) {
        if (number[k] + number[l] + number[m] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 다른사람의 풀이 - 확률과통계 조합 활용
// function solution(number) {
//     let result = 0;
//     const combination = (current, start) => {
//         if (current.length === 3) {
//             result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//             return;
//         }
//         for (let i = start; i < number.length; i++) {
//             combination([...current, number[i]], i + 1);
//         }
//     }
//     combination([], 0);
//     return result;
// }
