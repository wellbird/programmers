function solution(my_string, k) {
  let answer = "";
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}

// 다른사람의 풀이 - repeat
// function solution(my_string, k) {
//     return my_string.repeat(k)
// }
