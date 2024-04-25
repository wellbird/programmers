function solution(name) {
  const charObj = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
  };
  let answer = 0;
  let lastIdx = 0;
  let cnt = Infinity;

  for (let k = 0; k < name.length; k++) {
    if (name[k] !== 'A') {
      answer += Math.min(charObj[name[k]], 26 - charObj[name[k]]);
      if (k === 0) continue;

      let temp = lastIdx + name.length - k;
      cnt = Math.min(cnt, temp + lastIdx, temp + name.length - k);
      lastIdx = k;
    }
  }
  answer += Math.min(lastIdx, cnt);
  return answer;
}
