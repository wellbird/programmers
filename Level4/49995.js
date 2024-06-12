function solution(cookie) {
  let answer = 0;
  let idx = 1;
  while (idx < cookie.length) {
    let cnt = 2;
    let [leftIdx, rightIdx] = [idx - 1, idx];
    let [left, right] = [cookie[leftIdx], cookie[rightIdx]];
    if (left === right && left > answer) answer = left;
    while (cnt < cookie.length) {
      if (left > right || leftIdx === 0) {
        rightIdx++;
        right += cookie[rightIdx];
      } else {
        leftIdx--;
        left += cookie[leftIdx];
      }
      if (left === right && left > answer) answer = left;
      cnt++;
    }
    idx++;
  }
  return answer;
}
