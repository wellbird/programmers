function solution(sides) {
  let answer = 0;
  for (let k = 1; k < sides[0] + sides[1]; k++) {
    if (
      k + sides[0] > sides[1] &&
      k + sides[1] > sides[0] &&
      sides[0] + sides[1] > k
    ) {
      answer++;
    }
  }
  return answer;
}

// 수학적으로 푸는 법 = 작은 원소 * 2 - 1

// 다른사람의 풀이 1 - 수학적으로 풀기 1
// function solution(sides) {
//     return Math.min(...sides)*2-1
// }

// 다른사람의 풀이 2 - 수학적으로 풀기 2
// function solution(sides) {
//     sides.sort((a,b) => b - a);
//     return sides[1] + sides[1] -1;
// }
