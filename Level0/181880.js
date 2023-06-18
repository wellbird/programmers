function solution(num_list) {
  let answer = 0;
  num_list.forEach((item, _) => {
    while (item !== 1) {
      answer++;
      if (item % 2 === 0) {
        item /= 2;
      } else {
        item = (item - 1) / 2;
      }
    }
  });
  return answer;
}
