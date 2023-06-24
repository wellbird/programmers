function solution(arr, flag) {
  let answer = [];
  arr.forEach((item, idx) => {
    if (flag[idx]) {
      for (let k = 0; k < item * 2; k++) {
        answer.push(item);
      }
    } else {
      for (let k = 0; k < item; k++) {
        answer.pop();
      }
    }
  });
  return answer;
}
