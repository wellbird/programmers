function solution(numbers) {
  let answer = 0;
  for (let k = 0; k < 10; k++) {
    if (!numbers.includes(k)) {
      answer += k;
    }
  }
  return answer;
}

// 다른사람의 풀이 - reduce 이용
// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
