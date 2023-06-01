function solution(n, control) {
  let answer = n;
  for (let k of control) {
    switch (k) {
      case "w":
        answer += 1;
        break;
      case "s":
        answer -= 1;
        break;
      case "d":
        answer += 10;
        break;
      case "a":
        answer -= 10;
        break;
    }
  }
  return answer;
}

// 다른사람의 풀이 - Object를 만들어서 풀이
// const operations = {
//     w: (n) => n + 1,
//     s: (n) => n - 1,
//     d: (n) => n + 10,
//     a: (n) => n - 10,
//   };
//   function solution(n, control) {
//     return [...control].reduce((prev, op) => operations[op](prev), n);
//   }
