function solution(my_string, m, c) {
  let answer = "";
  for (let k = c - 1; k < my_string.length; k += m) {
    answer += my_string[k];
  }
  return answer;
}
