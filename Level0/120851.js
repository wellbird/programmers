function solution(my_string) {
  let answer = 0;
  my_string
    .split("")
    .filter((item) => !isNaN(Number(item)))
    .map((item, index) => (answer += Number(item)));
  return answer;
}

// 다른사람의 풀이 1 - replace, reduce 이용
// function solution(my_string) {
//   const answer = my_string
//     .replace(/[^0-9]/g, "")
//     .split("")
//     .reduce((acc, curr) => acc + Number(curr), 0);
//   return answer;
// }

// 다른사람의 풀이 2 - match, reduce 이용
// function solution(my_string) {
//     return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
// }
