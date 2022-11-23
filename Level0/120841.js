function solution(dot) {
  if (dot[0] > 0) {
    return dot[1] > 0 ? 1 : 4;
  }
  return dot[1] > 0 ? 2 : 3;
}

// 다른사람의 풀이 - 삼항연산자만 이용
// function solution(dot) {
//     return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
// }
