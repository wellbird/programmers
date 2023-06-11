function solution(my_strings, parts) {
  let answer = "";
  my_strings.forEach((item, idx) => {
    answer += item.slice(parts[idx][0], parts[idx][1] + 1);
  });
  return answer;
}
