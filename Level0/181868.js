function solution(my_string) {
  let answer = [];
  my_string.split(" ").forEach((item, _) => {
    if (item !== "") {
      answer.push(item);
    }
  });
  return answer;
}
