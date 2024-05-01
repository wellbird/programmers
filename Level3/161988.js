function solution(sequence) {
  if (sequence.length === 1) return Math.abs(sequence[0]);
  const arr = sequence.map((item, idx) => {
    if (idx % 2 === 0) return item;
    else return item * -1;
  });
  const maxDp = Array(sequence.length).fill(0);
  const minDp = Array(sequence.length).fill(0);
  let max = -Infinity;
  let min = Infinity;
  maxDp[0] = sequence[0];
  minDp[0] = sequence[0];
  for (let k = 1; k < sequence.length; k++) {
    maxDp[k] = Math.max(maxDp[k - 1] + arr[k], arr[k]);
    if (maxDp[k] > max) max = maxDp[k];
    minDp[k] = Math.min(minDp[k - 1] + arr[k], arr[k]);
    if (minDp[k] < min) min = minDp[k];
  }
  return Math.max(max, Math.abs(min));
}

// 다른사람의 풀이 - 배열을 따로 만들지 않고 한번에 계산
// function solution(sequence) {
//     let m = 0, M = 0;
//     let acc = m;
//     for (let i = 0; i < sequence.length; i++) {
//         acc = i % 2 == 1 ? acc - sequence[i] : acc + sequence[i];
//         M = Math.max(M, acc);
//         m = Math.min(m, acc);
//     }
//     return M == m ? M : M - m;
// }
