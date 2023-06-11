function solution(num_list, n) {
  let first = num_list.slice(0, n);
  let second = num_list.slice(n);
  return second.concat(first);
}
