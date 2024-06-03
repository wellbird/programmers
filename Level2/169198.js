function solution(m, n, startX, startY, balls) {
  const answer = [];
  const cases = [
    [startX, -startY],
    [-startX, startY],
    [startX, n + (n - startY)],
    [m + (m - startX), startY],
  ];
  balls.forEach((p1) => {
    const distCases = [];
    cases.forEach((p2, caseIdx) => {
      if (caseIdx === 0) {
        if (p1[0] === startX && p1[1] < startY) return;
      } else if (caseIdx === 1) {
        if (p1[1] === startY && p1[0] < startX) return;
      } else if (caseIdx === 2) {
        if (p1[0] === startX && p1[1] > startY) return;
      } else {
        if (p1[1] === startY && p1[0] > startX) return;
      }
      distCases.push(getDist(p1, p2));
    });
    answer.push(Math.min(...distCases));
  });
  return answer;
}

function getDist(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.abs(x2 - x1) ** 2 + Math.abs(y2 - y1) ** 2;
}
