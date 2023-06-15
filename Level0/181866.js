function solution(myString) {
  let answer = [];
  myString.split("x").forEach((item, _) => {
    if (item !== "") {
      answer.push(item);
    }
  });
  return answer.sort();
}
