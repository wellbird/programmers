function solution(message) {
  return message.split("").length * 2;
}

// 다른사람의 풀이 1 - 스프레드 문법 사용
// function solution(message) {
//     var answer = [...message].length * 2;
//     return answer;
// }

// 다른사람의 풀이 2 - 문자열에 바로 length사용
// function solution(message) {
//     return message.length*2;
// }
