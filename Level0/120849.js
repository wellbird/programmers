function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// 다른사람의 풀이 - filter, includes, join 이용
// function solution(my_string) {
//     return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
// }
