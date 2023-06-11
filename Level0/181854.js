function solution(arr, n) {
  const startIdx = arr.length % 2 === 0 ? 1 : 0;
  for (let k = startIdx; k <= arr.length; k += 2) {
    arr[k] += n;
  }
  return arr;
}
