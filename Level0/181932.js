function solution(code) {
  let answer = "";
  let mode = false;
  for (let k = 0; k < code.length; k++) {
    if (code[k] === "1") {
      mode = !mode;
    } else if (!mode) {
      if (k % 2 === 0) {
        answer += code[k];
      }
    } else if (mode) {
      if (k % 2 === 1) {
        answer += code[k];
      }
    }
  }
  return answer.length === 0 ? "EMPTY" : answer;
}
