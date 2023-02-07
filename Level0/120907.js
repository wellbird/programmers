function solution(quiz) {
  let answer = [];
  quiz.map((item, index) => {
    const itemArr = item.split(" ");
    const firstNum = Number(itemArr[0]);
    const secondNum = Number(itemArr[2]);
    const resultNum = Number(itemArr[4]);
    if (itemArr[1] === "+") {
      if (firstNum + secondNum === resultNum) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else if (itemArr[1] === "-") {
      if (firstNum - secondNum === resultNum) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 1 - eval 활용
// function solution(quiz) {
//     return quiz
//       .map((el) => el.split(" = "))
//       .map((el) => {
//         return eval(el[0]) == el[1] ? "O" : "X";
//       });
//   }

// 다른사람의 풀이 2 - 일단 더하고 +, - 부호에맞춰서 -1을 곱해줌
// function solution(quiz) {
//     var answer = [];
//     return quiz.map(t => {
//         const [calc, result] = t.split(' = ');
//         const sign = calc.includes('+') ? 1 : -1
//         const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');
//         return +a + (+b * sign) === +result ? 'O' : 'X'
//     });
// }
