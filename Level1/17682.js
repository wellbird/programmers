function solution(dartResult) {
  let dartResultArr = dartResult.split("");
  dartResultArr.map((item, index) => {
    if (
      item === "S" ||
      item === "D" ||
      item === "T" ||
      item === "#" ||
      item === "*"
    ) {
      dartResultArr[index] = " " + item + " ";
    }
  });
  dartResultArr = dartResultArr
    .join("")
    .split(" ")
    .filter((item) => item.length !== 0);
  dartResultArr.map((item, index) => {
    if (item === "S") {
      dartResultArr.splice(index, 1);
    } else if (item === "D") {
      dartResultArr[index - 1] = dartResultArr[index - 1] ** 2;
      dartResultArr.splice(index, 1);
    } else if (item === "T") {
      dartResultArr[index - 1] = dartResultArr[index - 1] ** 3;
      dartResultArr.splice(index, 1);
    }
  });
  dartResultArr.map((item, index) => {
    if (item === "*") {
      dartResultArr[index - 2] = dartResultArr[index - 2] * 2;
      dartResultArr[index - 1] = dartResultArr[index - 1] * 2;
      dartResultArr.splice(index, 1);
    } else if (item === "#") {
      dartResultArr[index - 1] = dartResultArr[index - 1] * -1;
      dartResultArr.splice(index, 1);
    }
  });
  const answer = dartResultArr.reduce((acc, cur) => (acc += Number(cur)), 0);
  return answer;
}

// 다른사람의 풀이 - match, pow 정규표현식 이용
// function solution(dartResult) {
//     const bonus = { 'S': 1, 'D': 2, 'T': 3 },
//           options = { '*': 2, '#': -1, undefined: 1 };
//     let darts = dartResult.match(/\d.?\D/g);
//     for (let i = 0; i < darts.length; i++) {
//         let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//             score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
//         if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
//         darts[i] = score;
//     }
//     return darts.reduce((a, b) => a + b);
// }
