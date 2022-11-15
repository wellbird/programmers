function solution(my_string) {
  let arr = [];
  for (let k = 0; k < my_string.length; k++) {
    arr.unshift(my_string[k]);
  }
  const answer = arr.join("");
  return answer;
}

// 다른사람의 풀이 1 - split, reverse, join 이용
// function solution(my_string) {
//     return my_string.split('').reverse().join('');
// }

// 다른사람의 풀이 2 - 스프레드문법 이용
// function solution(my_string) {
//     var answer = [...my_string].reverse().join("");
//     return answer;
// }
