function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 다른사람의 풀이 1 - split후 length 이용
// function solution(str1, str2) {
//     return str1.split(str2).length > 1 ? 1 : 2
// }

// 다른사람의 풀이 2 - index를 찾기
// function solution(str1, str2) {
//     return str1.indexOf(str2) === -1 ? 2 : 1;
// }

// 다른사람의 풀이 3 - search 이용
// function solution(str1, str2) {
//     return str1.search(str2) !== -1 ? 1 : 2
// }

// 다른사람의 풀이 4 - match 이용
// function solution(str1, str2) {
//     return str1.match(str2) ? 1 : 2;
// }
