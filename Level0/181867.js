function solution(myString) {
  let answer = [];
  myString.split("x").forEach((item, _) => answer.push(item.length));
  return answer;
}
