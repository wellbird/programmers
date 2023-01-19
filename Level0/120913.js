function solution(my_str, n) {
  let answer = [];
  for (let k = 0; k < my_str.length; k += n) {
    let subStr = "";
    for (let l = k; l < k + n; l++) {
      if (my_str[l] === undefined) {
        break;
      }
      subStr += my_str[l];
    }
    answer.push(subStr);
  }
  return answer;
}

// 다른사람의 풀이 1 - 정규표현식 이용
// function solution(my_str, n) {
//     return my_str.match(new RegExp(`.{1,${n}}`, "g"));
// }

// 다른사람의 풀이 2 - slice 이용
// function solution(my_str, n) {
//     let res = [];
//     for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
//     return res;
// }

// 다른사람의 풀이 3 - substr(substring) 이용
// function solution(my_str, n) {
//     var answer = [];
//     for(let i=0; i < my_str.length; i+=n) {
//         answer.push(my_str.substr(i, n));
//     }
//     return answer;
// }
