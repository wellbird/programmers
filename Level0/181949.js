const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  let answer = "";
  str = input[0];
  for (let k = 0; k < str.length; k++) {
    let uni = str.charCodeAt(k);
    if (uni >= 97) {
      uni -= 32;
    } else {
      uni += 32;
    }
    answer += String.fromCharCode(uni);
  }
  console.log(answer);
});

// 다른사람의 풀이 - 정규표현식 이용
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input;
// rl.on('line', (line) => {
//   input = [...line];
// }).on('close', () => {
//   console.log(
//     input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
//   );
// });
