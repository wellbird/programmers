function solution(arr) {
  let answer = [];
  let idx = 0;
  while (idx < arr.length) {
    if (answer.length === 0) {
      answer.push(arr[idx]);
      idx++;
    } else if (answer[answer.length - 1] === arr[idx]) {
      answer.pop();
      idx++;
    } else {
      answer.push(arr[idx]);
      idx++;
    }
  }
  return answer.length === 0 ? [-1] : answer;
}
