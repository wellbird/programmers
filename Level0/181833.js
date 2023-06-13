function solution(n) {
  let answer = [];
  for (let k = 0; k < n; k++) {
    let arr = Array(n).fill(0);
    arr[k] = 1;
    answer.push(arr);
  }
  return answer;
}
