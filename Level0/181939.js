function solution(a, b) {
  let ab = Number(String(a) + String(b));
  let ba = Number(String(b) + String(a));
  return ab > ba ? ab : ba;
}

// 다른사람의 풀이 - Math.max 이용
// return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
