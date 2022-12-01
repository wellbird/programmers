function solution(my_string, n) {
  let answer = "";
  my_string.split("").map((item, idx) => {
    answer += item.repeat(n);
  });
  return answer;
}

// 다른사람의 풀이 1 - reduce 이용
// function solution(my_string, n) {
//     return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
// }

// 다른사람의 풀이 2 - 스프레드 문법 이용
// function solution(my_string, n) {
//     var answer = [...my_string].map(v => v.repeat(n)).join("");
//     console.log(answer);
//     return answer;
// }
