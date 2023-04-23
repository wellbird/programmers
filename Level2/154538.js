function solution(x, y, n) {
  let answer = 0;
  let dp = [y];
  if (x === y) {
    return 0;
  }
  while (true) {
    answer++;
    let arr = [];
    let bool = false;
    for (let k of dp) {
      if (k - n === x || k / 2 === x || k / 3 === x) {
        arr.push(x);
        bool = true;
        break;
      }
      if (k - n > x) {
        arr.push(k - n);
      }
      if (k % 2 === 0 && k / 2 > x) {
        arr.push(k / 2);
      }
      if (k % 3 === 0 && k / 2 > x) {
        arr.push(k / 3);
      }
    }
    if (arr.length === 0) {
      return -1;
    }
    if (bool) {
      break;
    }
    dp = arr;
  }
  return answer;
}
