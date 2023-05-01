function solution(numbers) {
  let answer = [];
  numbers.map((item, _) => {
    if (item % 2 === 0) {
      answer.push(item + 1);
    } else {
      let bin = item.toString(2);
      let idx = bin.length - 1;
      while (bin[idx] !== "0" && idx > 0) {
        idx--;
      }
      if (idx === 0) {
        bin = "10" + bin.substring(1);
      } else {
        bin = bin.substring(0, idx) + "10" + bin.substring(idx + 2);
      }
      let result = parseInt(bin, 2);
      answer.push(result);
    }
  });
  return answer;
}

// 다른사람의 풀이 - 숫자를 더해주는 풀이
// function solution(numbers) {
//     var answer = [];
//     let c;
//     numbers.forEach(v => {
//       if (v < 2 || v % 2 === 0) {
//           answer.push(v+1);
//       } else {
//           let c = 2;
//           while(true) {
//               if ((v + 1) % (c * 2) === 0) {
//                   c = c * 2;
//               } else {
//                   break;
//               }
//           };
//           answer.push(v + (c / 2));
//       }
//     });
//     return answer;
//   }
