function solution(age) {
  const answer = [];
  const ageArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  String(age)
    .split("")
    .map((item, index) => {
      answer.push(ageArr[Number(item)]);
    });
  return answer.join("");
}

// 다른사람의 풀이 1 - 같은 방식 But 문자열 자체의 인덱스를 이용
// function solution(age) {
//     return age
//       .toString()
//       .split("")
//       .map((v) => "abcdefghij"[v])
//       .join("");
//   }

// 다른사람의 풀이 2 - 유니코드 이용
// function solution(age) {
//     let result = "";
//     for (const ch of String(age)) {
//         result += String.fromCharCode('a'.charCodeAt(0) + +ch)
//     }
//     return result;
// }
