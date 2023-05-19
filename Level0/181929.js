function solution(num_list) {
  let multi = 1;
  let sum = 0;
  num_list.map((item, _) => {
    multi *= item;
    sum += item;
  });
  return multi < sum ** 2 ? 1 : 0;
}
