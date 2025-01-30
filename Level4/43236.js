function solution(distance, rocks, n) {
  let [left, right, answer] = [1, distance];
  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let removeCount = 0;
    let mark = 0;
    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - mark < mid) {
        removeCount++;
        if (removeCount > n) break;
      } else {
        mark = rocks[i];
      }
    }
    if (removeCount > n) right = mid - 1;
    else {
      answer = mid;
      left = mid + 1;
    }
  }
  return answer;
}
