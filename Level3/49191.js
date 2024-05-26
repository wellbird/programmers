function solution(n, results) {
  let answer = 0;
  let arr = Array.from({ length: n }, () => Array(n).fill(null));
  for (let k = 0; k < n; k++) {
    arr[k][k] = 0;
  }
  results.forEach(([win, lose]) => {
    arr[win - 1][lose - 1] = 1;
    arr[lose - 1][win - 1] = -1;
  });
  for (let mid = 0; mid < n; mid++) {
    for (let start = 0; start < n; start++) {
      for (let end = 0; end < n; end++) {
        if (arr[start][mid] === 1 && arr[mid][end] === 1) arr[start][end] = 1;
        if (arr[start][mid] === -1 && arr[mid][end] === -1)
          arr[start][end] = -1;
      }
    }
  }
  arr.forEach((item) => {
    if (item.indexOf(null) === -1) answer++;
  });
  return answer;
}
