function solution(slice, n) {
  return n / slice === (n / slice) << 0 ? n / slice : ((n / slice) << 0) + 1;
}

// 다른사람의 풀이 - Math.ceil 이용
// function solution(slice, n) {
//     return Math.ceil(n / slice)
// }
