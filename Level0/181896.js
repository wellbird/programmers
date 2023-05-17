function solution(num_list) {
  let answer = 0;
  for (let k of num_list) {
    if (k < 0) {
      break;
    }
    answer++;
  }
  return answer === num_list.length ? -1 : answer;
}
