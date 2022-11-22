function solution(my_string, letter) {
  const reg = new RegExp(letter, "g");
  return my_string.replace(reg, "");
}

// 다른사람의 풀이 - letter기준으로 나누고 합치기
// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('')
//     return answer;
// }
