function solution(diffs, times, limit) {
  let [left, right] = [1, diffs.reduce((acc, cur) => Math.max(acc, cur), 1)];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (checkTimeInLimit(diffs, times, limit, mid)) right = mid;
    else left = mid + 1;
  }
  return left;
}

function checkTimeInLimit(diffs, times, limit, level) {
  let time = 0;
  for (let idx = 0; idx < diffs.length; idx++) {
    if (diffs[idx] <= level) time += times[idx];
    else time += (times[idx - 1] + times[idx]) * (diffs[idx] - level) + times[idx];
    if (time > limit) return false;
  }
  return true;
}
