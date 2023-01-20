function solution(balls, share) {
  let numerator = 1;
  let denominator = 1;
  for (let k = balls; k > balls - share; k--) {
    numerator *= k;
  }
  for (let k = share; k >= 1; k--) {
    denominator *= k;
  }
  const answer = numerator / denominator;
  return answer;
}

// 자바스크립트의 숫자에 대하여
// 현재 코드의 share과 관련된 for문을
// for(let k = 1; k <= share; k++){
//     denominator *= k
// }
// 처럼 오름차순으로 변경하게 된다면 일부 테스트케이스에서 오류가 나게 된다.
// 이는
// https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
// 홈페이지를 참고하면 원인을 알 수 있다.
// 이를 경험 볼 수 있는 가장 간단한 예시로는 0.1 + 0.2 또는 14 * 0.1 등등을 콘솔에 찍어보면 된다.
// 실제로 테스트를 해 본 결과 share이 25이상인 경우 for문을 오름차순으로 계산하는 경우와 내림차순으로 계산하는 경우의 값에 차이가 있는것을 확인할 수 있었다.
// 이를 가장 쉽게 해결 할 수 있는 방법은 결과값에서 반올림을 해 주는 것이다.
// answer 계산 시 Math.round 처리를 해 준다면 정답을 구할 수 있다.(parseInt 또는 Number로는 해결이 되지 않는다.)

// 다른사람의 풀이 - 재귀함수를 이용
// const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)
// function solution(balls, share) {
//   return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
// }
