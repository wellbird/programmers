function solution(my_string) {
  return my_string
    .replace(/[a-z]/g, "")
    .split("")
    .map((item, index) => parseInt(item))
    .sort((a, b) => a - b);
}

// 다른사람의 풀이 1 - match 이용
// function solution(my_string) {
//   return my_string
//     .match(/\d/g)
//     .sort((a, b) => a - b)
//     .map((n) => Number(n));
// }

// 다른사람의 풀이 2 - isNaN 이용
// function solution(my_string) {
//   return my_string
//     .split("")
//     .filter((v) => !isNaN(v))
//     .map((v) => v * 1)
//     .sort((a, b) => a - b);
// }
