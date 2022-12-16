function solution(rsp) {
  const answer = [];
  rsp.split("").map((item, index) => {
    if (item == 0) {
      answer.push(5);
    } else if (item == 2) {
      answer.push(0);
    } else if (item == 5) {
      answer.push(2);
    }
  });
  return answer.join("");
}

// 다른사람의 풀이 1 - 객체 만들어 풀기
// function solution(rsp) {
//     let arr = {
//         2: 0,
//         0: 5,
//         5: 2
//     };
//     var answer = [...rsp].map(v => arr[v]).join("");
//     return answer;
// }

// 다른사람의 풀이 2 - 삼항연산자 이용
// function solution(rsp) {
//     return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
// }
