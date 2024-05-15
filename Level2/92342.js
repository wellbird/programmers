function solution(n, info) {
  let answer = [];
  let maxPointGap = 0;
  function dfs(arrow, curInfo, apeachPoint, ryanPoint, remainPoint) {
    if (ryanPoint + remainPoint < apeachPoint) return;
    if (arrow === 0) {
      for (let k = curInfo.length; k < 11; k++) {
        if (info[k] !== 0) apeachPoint += 10 - k;
        curInfo.push(0);
      }
      if (ryanPoint - apeachPoint > maxPointGap) {
        answer = curInfo;
        maxPointGap = ryanPoint - apeachPoint;
      }
      if (ryanPoint - apeachPoint === maxPointGap) {
        answer = [answer, curInfo].sort((a, b) => {
          for (let k = 10; k >= 0; k--) {
            if (a[k] > b[k]) return -1;
            if (a[k] < b[k]) return 1;
          }
          return 0;
        })[0];
      }
      return;
    }
    const curPoint = 10 - curInfo.length;
    if (curInfo.length === 10)
      dfs(0, [...curInfo, arrow], apeachPoint, ryanPoint, 0);
    if (info[curInfo.length] > 0)
      dfs(
        arrow,
        [...curInfo, 0],
        apeachPoint + curPoint,
        ryanPoint,
        remainPoint - curPoint
      );
    if (info[curInfo.length] === 0)
      dfs(
        arrow,
        [...curInfo, 0],
        apeachPoint,
        ryanPoint,
        remainPoint - curPoint
      );
    if (info[curInfo.length] < arrow)
      dfs(
        arrow - info[curInfo.length] - 1,
        [...curInfo, info[curInfo.length] + 1],
        apeachPoint,
        ryanPoint + curPoint,
        remainPoint - curPoint
      );
  }
  dfs(n, [], 0, 0, 55);
  return answer.length === 0 ? [-1] : answer;
}
