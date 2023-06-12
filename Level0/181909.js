function solution(my_string) {
  let answer = [];
  for (let k = 0; k < my_string.length; k++) {
    answer.push(my_string.slice(k));
  }
  return answer.sort();
}
