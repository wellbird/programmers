function solution(money) {
  const answer = [(money / 5500) << 0, money % 5500];
  return answer;
}

// 몫을 구하는 다양한 방법
// 1. <<, >> 쉬프트 연산
// 2. Math.floor
// 3. parseInt
// 4. ~~ 연산자 (소숫점 버리기)
// 등등
