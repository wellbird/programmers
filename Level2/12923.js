function solution(begin, end) {
  let answer = [];
  for (let k = begin; k <= end; k++) {
    if (k === 1) {
      answer.push(0);
      continue;
    }
    if (checkPrime(k)) {
      answer.push(1);
      continue;
    }
    for (let r = 2; r <= ~~(k / 2); r++) {
      if (k % r === 0) {
        if (k / r <= 10000000) {
          answer.push(k / r);
          break;
        }
        if (checkPrime(k / r)) {
          answer.push(r);
          break;
        }
      }
    }
  }
  return answer;
}

function checkPrime(n) {
  let mod = 2;
  while (mod ** 2 <= n) {
    if (n % mod === 0) return false;
    mod++;
  }
  return true;
}
