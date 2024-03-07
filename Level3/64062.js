class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

function solution(stones, k) {
  let deque = new Deque();
  let max = Infinity;
  for (let i = 0; i < stones.length; i++) {
    while (deque.size() > 0 && stones[i] > stones[deque.peekBack()]) {
      deque.removeBack();
    }
    deque.addBack(i);
    if (i - k + 1 > deque.peekFront()) {
      deque.removeFront();
    }
    if (i >= k - 1) {
      max = Math.min(max, stones[deque.peekFront()]);
    }
  }
  return max;
}

// 다른사람의 풀이 1 - Stack 자료구조
// function solution(stones, k) {
//     stones.push(Infinity);
//     let stack = [{count: Infinity, idx: -1}];
//     let answer = Infinity;
//     for (let i = 0; i < stones.length; i++) {
//         const right = { count: stones[i], idx: i };
//         while (stack[stack.length - 1].count < right.count) {
//             const mid = stack.pop();
//             const left = stack[stack.length - 1];
//             if (right.idx - left.idx > k) {
//                 answer = Math.min(answer, mid.count);
//             }
//         }
//         stack.push(right);
//     }
//     return answer;
// }

// 다른사람의 풀이 2 - 이진탐색
// const binarySearch = (min, max, arr, k) => {
//     while (min <= max) {
//         const middle = parseInt((min + max) / 2);
//         let count = 0;
//         for (const el of arr) {
//             if (el - middle <= 0) {
//                 count++;
//             } else {
//                 count = 0;
//             }
//             if (count >= k) break;
//         }

//         if (count >= k) {
//             max = middle - 1;
//         } else {
//             min = middle + 1;
//         }
//     }
//     return min ;
// };

// const solution = (stones, k) => {
//     return binarySearch(0, 200000000, stones, k);
// };
