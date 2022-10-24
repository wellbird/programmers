function solution(numbers) {
  let answer = [];
  for (let k = 0; k < numbers.length - 1; k++) {
    for (let n = k + 1; n < numbers.length; n++) {
      const sum = numbers[k] + numbers[n];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}

// 다른사람의 풀이 1 - 스프레드연산자와 Set을 사용하여 중복제거
// function solution(numbers) {
//     const temp = []
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }
//     const answer = [...new Set(temp)]
//     return answer.sort((a, b) => a - b)
// }

// 다른사람의 풀이 2 - forEach와 splice 이용(조금 더 빠름)
// function solution(numbers) {
//     var answer = [];
//     numbers.forEach((v) => {
//         const num1 = numbers.slice();
//         let a = num1.indexOf(v);
//         num1.splice(a, 1);
//         num1.forEach((z) => {
//             let num2 = v + z;
//             if (!answer.includes(num2)) {
//                 answer.push(num2);
//             }
//         });
//     });
//     return answer.sort((a, b) => a - b);
// }
