function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.map((item, idx) => {
    answer += A[idx] * B[idx];
  });
  return answer;
}

// 다른사람의 풀이 - reduce 이용
// function solution(A,B){
//     A.sort((a, b) => a - b)
//     B.sort((a, b) => b - a)
//     return A.reduce((total, val, idx) => total + val * B[idx], 0)
// }
