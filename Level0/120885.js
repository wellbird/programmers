function solution(bin1, bin2) {
  const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  const answer = sum.toString(2);
  return answer;
}

// 다른사람의 풀이 - 메소드 없이 이진수 변환
// function solution(bin1, bin2) {
//     let temp = Number(bin1) + Number(bin2);
//     temp = [...temp.toString()].reverse().map((v) => +v);
//     for (let i = temp.length; i < 11; i++) {
//       temp.push(0);
//     }
//     for (let i = 0; i < temp.length; i++) {
//       if (temp[i] === 2) {
//         temp[i] = 0;
//         temp[i + 1]++;
//       } else if (temp[i] === 3) {
//         temp[i] = 1;
//         temp[i + 1]++;
//       }
//     }
//     return Number(temp.reverse().join("")).toString();
//   }
