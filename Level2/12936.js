function solution(n, k) {
  let answer = [];
  let arr = [];
  for (let k = 1; k <= n; k++) {
    arr.push(k);
  }
  let num = n - 1;
  while (k !== 0 && num > 1) {
    let getFact = factorial(num);
    let idx = ~~(k / getFact);
    k = k % getFact;
    if (k === 0) {
      answer.push(arr[idx - 1]);
      arr.splice(idx - 1, 1);
    } else {
      answer.push(arr[idx]);
      arr.splice(idx, 1);
    }
    num--;
  }
  if (k === 1) {
    answer.push(...arr);
  } else {
    answer.push(...arr.reverse());
  }
  return answer;
}
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
