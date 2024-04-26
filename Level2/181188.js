// 42884 - 단속카메라 문제와 동일

function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => a[0] - b[0]);
  let out = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    if (out <= targets[i][0]) {
      answer++;
      out = targets[i][1];
    }
    if (out > targets[i][1]) {
      out = targets[i][1];
    }
  }
  return answer;
}
