function solution(num_list) {
  let answer = [];
  num_list.map((item, idx) => {
    answer.unshift(item);
  });
  return answer;
}

// 다른사람의 풀이 - reverse 이용
// function solution(num_list) {
//     return num_list.reverse()
// }
