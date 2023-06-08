function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;
  num_list.forEach((item, idx) => {
    if (idx % 2 === 0) {
      evenSum += item;
    } else {
      oddSum += item;
    }
  });
  return evenSum > oddSum ? evenSum : oddSum;
}
