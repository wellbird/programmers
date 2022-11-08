function solution(angle) {
  let answer = 0;
  if (0 < angle && angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  }
  return answer;
}

// 다른사람의 풀이 1 - filter 사용
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }

// 다른사람의 풀이 2 - 다중 삼항연산자 사용
// function solution(angle) {
//     return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }
