function solution(my_string, index_list) {
  let answer = "";
  for (let k of index_list) {
    answer += my_string[k];
  }
  return answer;
}

// 다른사람의 풀이 - map을 이용하여 풀이
// function solution(my_string, index_list) {
//     return index_list.map(i => my_string[i]).join('')
// }
