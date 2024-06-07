function solution(h1, m1, s1, h2, m2, s2) {
  let answer = getCount(h2, m2, s2) - getCount(h1, m1, s1);
  if (s1 === 0 && m1 === 0) answer += 1;
  return answer;
}

function getCount(h, m, s) {
  let [minCnt, hourCnt, totalCnt] = [0, 0, -1];

  minCnt += h * 59;
  hourCnt += h * 60;
  minCnt += m;
  hourCnt += m;

  const minDegree = m * 6;
  const hourDegree = 30 * (h % 12) + 0.5 * m;

  if (minDegree <= 5.9 * s) minCnt += 1;
  if (hourDegree <= (6 - 1 / 120) * s) hourCnt += 1;
  if (h >= 12) {
    hourCnt -= 1;
    totalCnt -= 1;
  }

  totalCnt += minCnt + hourCnt;
  return totalCnt;
}
