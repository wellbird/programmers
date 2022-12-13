function solution(my_string) {
  const answer = [];
  my_string.split("").map((item, index) => {
    if (item === item.toUpperCase()) {
      answer.push(item.toLowerCase());
    } else {
      answer.push(item.toUpperCase());
    }
  });
  return answer.join("");
}

// 다른사람의 풀이 1 - 간단한 풀이
// function solution(my_string) {
//     var answer = '';
//     for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//     return answer;
// }

// 다른사람의 풀이 2 - 유니코드 이용
// function solution(my_string) {
//     return Array.from(my_string).map(t => {
//         return t[t.charCodeAt() < 91 ? 'toLowerCase' : 'toUpperCase']()
//     }).join('');
// }
