function solution(arr, queries) {
  queries.forEach((item, _) => {
    for (let k = item[0]; k <= item[1]; k++) {
      arr[k]++;
    }
  });
  return arr;
}
