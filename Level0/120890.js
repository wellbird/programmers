function solution(array, n) {
  let answer = array[0];
  let gap = Math.abs(n - array[0]);
  for (let k = 1; k < array.length; k++) {
    let subGap = Math.abs(n - array[k]);
    if (gap > subGap) {
      answer = array[k];
      gap = subGap;
    } else if (gap === subGap) {
      if (answer > array[k]) {
        answer = array[k];
      }
    }
  }
  return answer;
}
