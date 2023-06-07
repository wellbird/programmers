function solution(str_list, ex) {
  let answer = "";
  str_list.forEach((item, _) => {
    if (!item.includes(ex)) {
      answer += item;
    }
  });
  return answer;
}
