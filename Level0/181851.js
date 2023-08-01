function solution(rank, attendance) {
  let arr = [];
  for (let k = 1; k <= rank.length; k++) {
    let idx = rank.indexOf(k);
    if (attendance[idx]) {
      arr.push(idx);
    }
    if (arr.length === 3) {
      break;
    }
  }
  return arr[0] * 10000 + arr[1] * 100 + arr[2];
}

// 다른사람의 풀이 - array 메소드를 이용한 풀이
// function solution(rank, attendance) {
//     const [a, b, c] = rank
//       .map((r, i) => [r, i])
//       .filter(([_, i]) => attendance[i])
//       .sort(([a], [b]) => a - b);
//     return 10000 * a[1] + 100 * b[1] + c[1];
//   }
