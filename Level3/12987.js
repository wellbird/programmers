function solution(A, B) {
  let answer = 0;
  let idx = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  for (let k = 0; k < A.length; k++) {
    if (A[k] < B[idx]) {
      answer++;
      idx++;
    }
  }
  return answer;
}
