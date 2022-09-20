function solution(n) {
  const stringfy = String(n);
  const n_list = stringfy.split("");
  let answer = [];

  n_list.map((item, index) => {
    answer[n_list.length - index - 1] = Number(item);
  });
  return answer;
}

// 다른사람의 풀이 1
// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));

//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }

// 다른사람의 풀이 2
// function solution(n) {
//     return n.toString().split('').reverse().map(o => o = parseInt(o));
// }
