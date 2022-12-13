const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  for (let k = 1; k <= Number(input); k++) {
    console.log("*".repeat(k));
  }
});
