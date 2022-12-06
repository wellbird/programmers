function solution(n) {
  let answer = 0;
  const arr_n = String(n).split("");
  arr_n.map((item, index) => {
    answer += Number(item);
  });
  return answer;
}

// 다른사람의 풀이 1 - toString형변환, reduce 이용
// function solution(n) {
//     return n
//       .toString()
//       .split("")
//       .reduce((acc, cur) => acc + Number(cur), 0);
// }

// 다른사람의 풀이 2 - 10으로 나눈 나머지를 이용
// function solution(n) {
//     let result = 0;
//     while (n > 0) {
//         result += n % 10;
//         n = Math.floor(n/10);
//     }
//     return result;
// }
