function solution(arr) {
  return arr.map((item, _) => {
    if (item >= 50 && item % 2 === 0) {
      return item / 2;
    } else if (item < 50 && item % 2 === 1) {
      return item * 2;
    }
    return item;
  });
}
