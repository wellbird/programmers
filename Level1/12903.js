function solution(s) {
  const len = s.length;
  if (len % 2 === 0) {
    return s[len / 2 - 1] + s[len / 2];
  } else {
    return s[(len - 1) / 2];
  }
}

// 다른사람의 풀이 1
// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

// 다른사람의 풀이 2
// function solution(s) {
//     const mid = Math.floor(s.length/2);
//     return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
// }
