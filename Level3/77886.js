class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(node) {
    this.root = node;
    this.tail = node;
  }
  add(node) {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  findAndDelete() {
    let curNode = this.root;
    let cnt = 0;
    while (curNode && curNode.next && curNode.next.next) {
      if (curNode.value === '1') {
        if (curNode.next.value === '1' && curNode.next.next.value === '0') {
          cnt++;
          if (curNode === this.root) {
            if (curNode.next.next.next === null) {
              this.root = null;
              this.tail = null;
              break;
            }
            this.root = curNode.next.next.next;
            this.root.prev = null;
            curNode = this.root;
            continue;
          }
          if (curNode.next.next.next === null) {
            curNode.prev.next = null;
            this.tail = curNode.prev;
            break;
          }
          curNode.prev.next = curNode.next.next.next;
          curNode.next.next.next.prev = curNode.prev;
          if (curNode.prev.prev === null) curNode = curNode.prev;
          else curNode = curNode.prev.prev;
          continue;
        }
      }
      curNode = curNode.next;
    }
    return cnt;
  }
  createNewToken() {
    const curNode = new Node('1');
    const nextNode = new Node('1');
    const lastNode = new Node('0');
    curNode.next = nextNode;
    nextNode.prev = curNode;
    nextNode.next = lastNode;
    lastNode.prev = nextNode;
    return curNode;
  }
  findAndPush(cnt) {
    while (cnt > 0) {
      cnt--;
      const token = this.createNewToken();
      let curNode = this.tail;
      if (!curNode) {
        this.root = token;
        this.tail = token.next.next;
        continue;
      }
      while (curNode && curNode.value !== '0' && curNode.prev) {
        curNode = curNode.prev;
      }
      if (curNode && curNode.value === '1') {
        curNode.prev = token.next.next;
        token.next.next.next = curNode;
        this.root = token;
        continue;
      }
      if (!curNode || curNode === this.tail) {
        if (curNode) {
          curNode.next = token;
          token.prev = curNode;
        }
        this.tail = token.next.next;
        continue;
      }
      token.next.next.next = curNode.next;
      token.prev = curNode;
      curNode.next = token;
    }
  }
  stringify() {
    let str = '';
    let curNode = this.root;
    while (curNode) {
      str += curNode.value;
      curNode = curNode.next;
    }
    return str;
  }
}

function solution(s) {
  const answer = [];
  s.forEach((item) => {
    const root = new Node(item[0]);
    const linkedList = new LinkedList(root);
    for (let k = 1; k < item.length; k++) {
      const newNode = new Node(item[k]);
      linkedList.add(newNode);
    }
    const cnt = linkedList.findAndDelete();
    linkedList.findAndPush(cnt);
    answer.push(linkedList.stringify());
  });
  return answer;
}

// 다른사람의 풀이 - 스택을 이용한 풀이
// function solution(s) {
//     var answer = [];
//     for (let sc of s) {
//         answer.push(foo(sc));
//     }
//     return answer;
// }
// function foo(s) {
//     let count = 0;
//     let stack = [];
//     for (let ch of s) {
//         if (ch == 1) { stack.push(ch); }
//         else {
//             if (stack.length > 1 && stack[stack.length-1] == '1' && stack[stack.length-2] == '1') {
//                 stack.pop();
//                 stack.pop();
//                 count += 1;
//             } else {
//                 stack.push(ch);
//             }
//         }
//     }
//     let remain_s = stack.join('');
//     let answer = '';
//     const insert_text = '110'.repeat(count);
//     const chk = remain_s.indexOf('111');
//     if (chk != -1) {
//         answer = remain_s.slice(0, chk) + insert_text + remain_s.slice(chk);
//     } else {
//         let idx = remain_s.length-1;
//         if (remain_s[idx] == '1') {
//             while (idx-1 >= 0 && remain_s[idx] == '1') { idx -= 1; }
//         }
//         if (idx == 0 && remain_s[idx] == '1') {
//             answer = insert_text + remain_s.slice();
//         } else {
//             answer = remain_s.slice(0, idx+1) + insert_text + remain_s.slice(idx+1);
//         }
//     }
//     return answer;
// }
