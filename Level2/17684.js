function solution(msg) {
  let answer = [];
  let dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let msgArr = msg.split("");
  for (let k = 0; k < msg.length; k++) {
    let str = msgArr[k];
    let index = 0;
    while (true) {
      if (msgArr[k + 1] === undefined) {
        index = dict.indexOf(str) + 1;
        break;
      }
      if (dict.includes(str + msgArr[k + 1])) {
        str += msgArr[k + 1];
        k++;
      } else {
        index = dict.indexOf(str) + 1;
        str += msgArr[k + 1];
        break;
      }
    }
    dict.push(str);
    answer.push(index);
  }
  return answer;
}
