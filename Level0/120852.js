function solution(n) {
  let answer = [];
  let nIsPrime = false;
  while (!nIsPrime) {
    const sqrtN = parseInt(Math.sqrt(n));
    if (sqrtN === 1) {
      break;
    }
    for (let k = 2; k <= Math.sqrt(n); k++) {
      if (n % k === 0) {
        if (!answer.includes(k)) {
          answer.push(k);
        }
        n = n / k;
        break;
      }
      if (sqrtN === k) {
        nIsPrime = true;
        break;
      }
    }
  }
  if (!answer.includes(n)) {
    answer.push(n);
  }
  return answer;
}
