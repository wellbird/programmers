const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  for (let k = 0; k < input[0].length; k++) {
    console.log(input[0][k]);
  }
});
