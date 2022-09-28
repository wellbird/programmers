function solution(a, b) {
  let answer = 0;
  a.map((item, index) => {
    answer += item * b[index];
  });
  return answer;
}

// 다른사람의 풀이 - reduce 이용
// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
