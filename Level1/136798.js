function solution(number, limit, power) {
  let answer = 0;
  for (let k = 1; k <= number; k++) {
    let cnt = 1;
    for (let l = 1; l <= ~~(k / 2); l++) {
      if (k % l === 0) {
        cnt++;
      }
    }
    if (cnt > limit) {
      answer += power;
    } else {
      answer += cnt;
    }
  }
  return answer;
}
