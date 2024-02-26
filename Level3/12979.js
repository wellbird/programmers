function solution(n, stations, w) {
  let answer = 0;
  let curEnd = 1;
  const coverage = 2 * w + 1;
  stations.forEach((item, idx) => {
    if (idx === 0) {
      curEnd = item + w + 1;
      if (item - w <= 1) return;
      answer += Math.ceil((item - w) / coverage);
    } else {
      if (curEnd > item - w) {
        curEnd = item + w + 1;
        return;
      }
      answer += Math.ceil((item - w - curEnd) / coverage);
      curEnd = item + w + 1;
    }
  });
  if (curEnd === n) {
    answer += 1;
  } else if (curEnd < n) {
    answer += Math.ceil((n - curEnd) / coverage);
  }
  return answer;
}
