function solution(numLog) {
  let answer = "";
  for (let k = 1; k < numLog.length; k++) {
    const commend = numLog[k] - numLog[k - 1];
    switch (commend) {
      case 1:
        answer += "w";
        break;
      case -1:
        answer += "s";
        break;
      case 10:
        answer += "d";
        break;
      case -10:
        answer += "a";
        break;
    }
  }
  return answer;
}
