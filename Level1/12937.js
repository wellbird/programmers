function solution(num) {
  let answer = "";
  if (num === 0) {
    answer = "Even";
  }
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

// 삼항연산자를 이용한 다른사람의 풀이
// function evenOrOdd(num) {
//     return num % 2 ? "Odd" : "Even";
// }
