function solution(arr, queries) {
  function swap(idx1, idx2) {
    let item1 = arr[idx1];
    let item2 = arr[idx2];
    arr[idx1] = item2;
    arr[idx2] = item1;
  }
  queries.forEach((item, _) => {
    swap(item[0], item[1]);
  });
  return arr;
}
