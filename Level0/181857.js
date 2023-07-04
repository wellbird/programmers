function solution(arr) {
  let sqrt = 0;
  while (arr.length > 2 ** sqrt) {
    sqrt++;
  }
  while (arr.length !== 2 ** sqrt) {
    arr.push(0);
  }
  return arr;
}
