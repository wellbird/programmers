function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let l = m - 1; l < score.length; l += m) {
    answer += score[l] * m;
  }
  return answer;
}
