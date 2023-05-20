function solution(arr, k) {
  k % 2 === 0
    ? arr.forEach((item, idx) => (arr[idx] = item + k))
    : arr.forEach((item, idx) => (arr[idx] = item * k));
  return arr;
}
