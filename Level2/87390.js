function solution(n, left, right) {
  let answer = [];
  for (let k = left; k <= right; k++) {
    const row = ~~(k / n);
    const col = k % n;
    if (row <= col) {
      answer.push(col + 1);
    } else {
      answer.push(row + 1);
    }
  }
  return answer;
}
