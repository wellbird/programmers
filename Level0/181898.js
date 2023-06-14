function solution(arr, idx) {
  let subIdx = arr.slice(idx).indexOf(1);
  return subIdx === -1 ? subIdx : idx + subIdx;
}
