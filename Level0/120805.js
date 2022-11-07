function solution(num1, num2) {
  return (num1 / num2) << 0;
}
// '<<'는 부동소수점 연산자

// 다른사람의 풀이 1 - parseInt를 이용
// function solution(num1, num2) {
//     return parseInt(num1 / num2);
//   }

// 다른사람의 풀이 2 - Math.floor 이용
// const solution = (num1, num2) => Math.floor(num1 / num2)
