class Node {
  constructor(value = '') {
    this.value = value;
    this.child = {};
    this.isUnique = true;
  }
}

class CustomTrie {
  constructor() {
    this.root = new Node();
    this.root.isUnique = false;
  }
  insert(word) {
    let curNode = this.root;
    for (let idx = 0; idx < word.length; idx++) {
      if (curNode.child[word[idx]] === undefined) {
        curNode.child[word[idx]] = new Node(word[idx]);
      } else {
        curNode.child[word[idx]].isUnique = false;
      }
      curNode = curNode.child[word[idx]];
    }
  }
  minSearchCount(word) {
    let curNode = this.root;
    let cnt = 0;
    for (let idx = 0; idx < word.length; idx++) {
      if (curNode.isUnique) break;
      curNode = curNode.child[word[idx]];
      cnt++;
    }
    return cnt;
  }
}

function solution(words) {
  let answer = 0;
  const customTrie = new CustomTrie();
  words.forEach((word) => {
    customTrie.insert(word);
  });
  words.forEach((word) => {
    answer += customTrie.minSearchCount(word);
  });
  return answer;
}

// 다른사람의 풀이 - 정렬 후 좌우 값 비교
// function solution(words) {
//     words.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
//     let r = 0, a, b, c;
//     words.forEach((w, i) => {
//         const right = words[i + 1] || words[i - 1];
//         const left = words[i - 1] || words[i + 1];
//         for (let i = 1, l = w.length; i <= l; i++) {
//             r++;
//             a = w.substring(0, i);
//             if (a != left.substring(0, i) && a != right.substring(0, i))
//                 return;
//         }
//     });
//     return r;
// }
