function solution(s) {
  let answer = "";
  const arr = s.split("").sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  arr.map((item, index) => {
    answer += item;
  });
  return answer;
}

// 다른사람의 풀이 1 - 메소드만을 이용한 best코드
// function solution(s) {
//     return s
//       .split("")
//       .sort()
//       .reverse()
//       .join("");
//   }

// 다른사람의 풀이 2 - join을 이용
// function solution(s) {
//     return s.split('').sort((a, b) => {
//         if (a > b) return -1;
//         if (b > a) return 1;
//         return 0;
//     }).join('');
// }
