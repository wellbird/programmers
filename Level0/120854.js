function solution(strlist) {
  let answer = [];
  strlist.map((item, idx) => answer.push(item.length));
  return answer;
}
