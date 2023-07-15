function solution(my_string) {
  let answer = Array(52).fill(0);
  for (let k = 0; k < my_string.length; k++) {
    let token = my_string.charCodeAt(k);
    if (token < 91) {
      answer[token - 65]++;
    } else {
      answer[token - 71]++;
    }
  }
  return answer;
}

// 다른사람의 풀이 - 문자열 생성 후 인덱스 구해서 더하기
// function solution(m) {
//     var answer = [];
//     let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let a = [];
//     a.length = 52;
//     a.fill(0);
//     m.split("").map((n)=>{
//         a[al.indexOf(n)]+=1
//     })
//     return a;
// }
