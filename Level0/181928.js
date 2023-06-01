function solution(num_list) {
  let oddArr = [];
  let evenArr = [];
  num_list.forEach((item, _) =>
    item % 2 === 0 ? evenArr.push(item) : oddArr.push(item)
  );
  return Number(oddArr.join("")) + Number(evenArr.join(""));
}
