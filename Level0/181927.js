function solution(num_list) {
  let lastIdx = num_list.length - 1;
  if (num_list[lastIdx] > num_list[lastIdx - 1]) {
    num_list.push(num_list[lastIdx] - num_list[lastIdx - 1]);
  } else {
    num_list.push(num_list[lastIdx] * 2);
  }
  return num_list;
}
