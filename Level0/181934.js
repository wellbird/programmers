function solution(ineq, eq, n, m) {
  if (ineq === ">") {
    if (eq === "=") {
      return +(n >= m);
    }
    return +(n > m);
  } else {
    if (eq === "=") {
      return +(n <= m);
    }
    return +(n < m);
  }
}

// 다른사람의 풀이 - 함수로 만들어 풀이
// const operations = {
//     '>=': (n, m) => n >= m,
//     '<=': (n, m) => n <= m,
//     '>!': (n, m) => n > m,
//     '<!': (n, m) => n < m,
//   };
//   function solution(ineq, eq, n, m) {
//     const op = operations[ineq + eq];
//     return Number(op(n, m));
//   }
