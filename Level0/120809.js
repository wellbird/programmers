function solution(numbers) {
  return numbers.map((item, idx) => item * 2);
}

// 다른사람의 풀이 - reduce를 이용
// function solution(numbers) {
//     return numbers.reduce((a, b) => [...a, b * 2], []);
// }
