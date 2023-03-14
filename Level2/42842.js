function solution(brown, yellow) {
  for (let k = 1; k <= Math.ceil(Math.sqrt(yellow)); k++) {
    if (yellow % k === 0) {
      let y = k + 2;
      let x = yellow / k + 2;
      if (x * y === brown + yellow) {
        return [x, y];
      }
    }
  }
}
