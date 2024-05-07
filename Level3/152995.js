function solution(scores) {
  let answer = 1;
  const wanho = scores[0];
  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let prev = 0;
  for (const score of scores) {
    if (wanho[0] < score[0] && wanho[1] < score[1]) return -1;
    if (prev <= score[1]) {
      if (wanho[0] + wanho[1] < score[0] + score[1]) answer++;
      prev = score[1];
    }
  }
  return answer;
}
