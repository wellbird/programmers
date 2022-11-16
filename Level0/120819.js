function solution(money) {
  const answer = [(money / 5500) << 0, money % 5500];
  return answer;
}

// 몫을 구하는 다양한 방법
// 1. <<, >> (쉬프트 연산)
// 2. Math.floor (주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환)
// 3. parseInt (정수화)
// 4. ~~ 연산자 (소숫점 버리기)
// 5. Math.trunc (주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환)
// 등등
