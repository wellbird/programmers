function solution(n, times) {
  let answer = Infinity;
  let left = 0;
  let right = Math.max(...times) * n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (cnt >= n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
