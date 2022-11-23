function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

// 다른사람의 풀이 1 - slice 이용
// function solution(numbers, num1, num2) {
//     return numbers.slice(num1, num2 + 1);
// }

// 다른사람의 풀이 2 - filter 이용
// function solution(numbers, num1, num2) {
//     return numbers.filter((n, i) => num1 <= i && i <= num2);
// }
