function solution(num_list, n) {
  const answer = [];
  for (let k = 0; k <= num_list.length - n; k += n) {
    let subArr = [];
    for (let l = 0; l < n; l++) {
      subArr.push(num_list[k + l]);
    }
    answer.push(subArr);
  }
  return answer;
}

// 다른사람의 풀이 - n개씩 잘라서 넣기
// function solution(num_list, n) {
//     var answer = [];
//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }
//     return answer;
// }
