function solution(n, k, cmd) {
  const nodeList = Array.from({ length: n }, (_, i) => ({
    prev: i - 1,
    next: i + 1,
  }));
  let cur = k;
  const stack = [];
  cmd.forEach((command) => {
    const [op, x] = command.split(' ');
    if (op === 'U') {
      let count = parseInt(x, 10);
      while (count--) {
        cur = nodeList[cur].prev;
      }
    } else if (op === 'D') {
      let count = parseInt(x, 10);
      while (count--) {
        cur = nodeList[cur].next;
      }
    } else if (op === 'C') {
      stack.push(cur);
      const { prev, next } = nodeList[cur];
      if (prev !== -1) nodeList[prev].next = next;
      if (next !== n) nodeList[next].prev = prev;
      cur = next === n ? prev : next;
    } else if (op === 'Z') {
      const restore = stack.pop();
      const { prev, next } = nodeList[restore];
      if (prev !== -1) nodeList[prev].next = restore;
      if (next !== n) nodeList[next].prev = restore;
    }
  });
  const result = Array(n).fill('O');
  while (stack.length) {
    result[stack.pop()] = 'X';
  }
  return result.join('');
}

// 다른사람의 풀이 - Node 객체를 만들어 풀이
// class Node {
//     constructor(value, prev, next) {
//         this.value = value;
//         this.prev = prev;
//         this.next = next;
//     }
// };
// function solution(n, k, cmd) {
//     const table = Array.from({length:n}, () => true);
//     const nodes = Array.from({length:n}, () => new Node());
//     const removed = [];
//     let cur = nodes[k];
//     for(let i = 0; i < n; i++) {
//         nodes[i].value = i;
//         nodes[i].prev = nodes[i - 1];
//         nodes[i].next = nodes[i + 1];
//     }
//     cmd.forEach(command => {
//         command = command.split(" ");
//         switch(command[0]) {
//             case "U":
//                 for(let i = 0; i < command[1]; i++) {
//                     cur = cur.prev;
//                 }
//                 break;
//             case "D":
//                 for(let i = 0; i < command[1]; i++) {
//                     cur = cur.next;
//                 }
//                 break;
//             case "C":
//                 table[cur.value] = false;
//                 removed.push(cur);
//                 if(cur.next === undefined) {
//                     cur = cur.prev;
//                     cur.next = undefined;
//                 } else if(cur.prev === undefined) {
//                     cur.next.prev = undefined;
//                     cur = cur.next;
//                 } else {
//                     cur.prev.next = cur.next;
//                     cur.next.prev = cur.prev;
//                     cur = cur.next;
//                 }
//                 break;
//             case "Z":
//                 const restored = removed.pop();
//                 table[restored.value] = true;
//                 if(restored.prev !== undefined)
//                     restored.prev.next = restored;
//                 if(restored.next !== undefined)
//                     restored.next.prev = restored;
//                 break;
//         }
//     })
//     return table.map(row => row ? "O" : "X").join("");
// }
