function solution(a) {
  let answer = 1;
  let min = Infinity;
  let minIdx = 0;
  let leftMin = Infinity;
  let rightMin = Infinity;
  a.forEach((item, index) => {
    if (item < min) {
      min = item;
      minIdx = index;
    }
  });
  for (let k = 0; k < minIdx; k++) {
    if (a[k] < leftMin) {
      leftMin = a[k];
      answer++;
    }
  }
  for (let k = a.length - 1; k > minIdx; k--) {
    if (a[k] < rightMin) {
      rightMin = a[k];
      answer++;
    }
  }
  return answer;
}
