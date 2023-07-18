function solution(arr, queries) {
  let answer = [];
  queries.forEach((item, _) => {
    let token = Infinity;
    for (let k = item[0]; k <= item[1]; k++) {
      if (arr[k] > item[2] && arr[k] < token) {
        token = arr[k];
      }
    }
    if (token === Infinity) {
      answer.push(-1);
    } else {
      answer.push(token);
    }
  });
  return answer;
}
