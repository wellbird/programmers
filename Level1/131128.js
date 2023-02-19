function solution(X, Y) {
  let xArr = X.split("");
  let yArr = Y.split("");
  let answerArr = [];
  for (let k = 0; k < 10; k++) {
    const strK = String(k);
    let cnt = 0;
    let minCnt = 0;
    const xCnt = xArr.filter((n) => n === strK).length;
    const yCnt = yArr.filter((n) => n === strK).length;
    if (xCnt <= yCnt) {
      minCnt = xCnt;
    } else {
      minCnt = yCnt;
    }
    while (!(cnt === minCnt)) {
      answerArr.push(strK);
      cnt++;
    }
  }
  if (answerArr.length === 0) {
    return "-1";
  }
  if (answerArr.length === answerArr.filter((n) => n === "0").length) {
    return "0";
  }
  return String(answerArr.sort((a, b) => b - a).join(""));
}
