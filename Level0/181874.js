function solution(myString) {
  let answer = "";
  for (let k of myString) {
    if (k === "A" || k === "a") {
      answer += "A";
    } else {
      answer += k.toLowerCase();
    }
  }
  return answer;
}
