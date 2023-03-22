function solution(n) {
  let arr = [1, 1];
  for (let k = 2; k <= n; k++) {
    arr[k] =
      arr[k - 1] + arr[k - 2] > 1234567
        ? (arr[k - 1] + arr[k - 2]) % 1234567
        : arr[k - 1] + arr[k - 2];
  }
  return arr[n];
}
