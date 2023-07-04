function solution(arr, queries) {
  queries.map((item, _) => {
    for (let k = item[0]; k <= item[1]; k++) {
      if (k % item[2] === 0) {
        arr[k]++;
      }
    }
  });
  return arr;
}
