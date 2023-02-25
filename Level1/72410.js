function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^\w-_.]/g, "");
  while (new_id.includes("...")) {
    new_id = new_id.replace("...", ".");
  }
  while (new_id.includes("..")) {
    new_id = new_id.replace("..", ".");
  }
  if (new_id[0] === ".") {
    new_id = new_id.replace(".", "");
  }
  if (new_id.length === 0) {
    new_id += "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, new_id.length - 1);
  }
  if (new_id.length <= 2) {
    const word = new_id[new_id.length - 1];
    while (new_id.length !== 3) {
      new_id += word;
    }
  }
  return new_id;
}

// 다른사람의 풀이 -  다양한 정규식을 이용한 풀이들
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase()
//         .replace(/[^\w-_.]/g, '')
//         .replace(/\.+/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .replace(/^$/, 'a')
//         .slice(0, 15).replace(/\.$/, '');
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }

// const solution = (new_id) => {
//     const id = new_id
//         .toLowerCase()
//         .replace(/[^\w\d-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .padEnd(1, 'a')
//         .slice(0, 15)
//         .replace(/^\.|\.$/g, '')
//     return id.padEnd(3, id[id.length-1])
// }

// const solution = new_id =>
//     new_id.toLowerCase()
//           .replace(/[^\w-_.]/g, "")
//           .replace(/\.+/g, ".")
//           .replace(/^\.|\.$/g, "")
//           .replace(/^$/, "a")
//           .match(/^.{0,14}[^.]/)[0]
//           .replace(/^(.)$/, "$1$1$1")
//           .replace(/^(.)(.)$/, "$1$2$2");
