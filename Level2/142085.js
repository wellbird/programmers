class MinHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }
  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heapPush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }
  heapPop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;
    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}

function solution(n, k, enemy) {
  let answer = 0;
  const minHeap = new MinHeap();
  let idx = 0;
  while (n >= 0 && idx < enemy.length) {
    if (minHeap.size() < k) {
      minHeap.heapPush(enemy[idx]);
      answer++;
      idx++;
      continue;
    }
    if (minHeap.getMin() < enemy[idx]) {
      const min = minHeap.heapPop();
      minHeap.heapPush(enemy[idx]);
      n -= min;
      answer++;
      idx++;
    } else {
      n -= enemy[idx];
      answer++;
      idx++;
    }
  }
  if (idx === enemy.length) {
    if (n < 0) return idx - 1;
    return idx;
  }
  if (n < 0) {
    if (answer === 0) return 0;
    return answer - 1;
  }
  return answer;
}

// 다른사람의 풀이 - 이분탐색 이용
// function solution(n, k, enemy) {
//     let lt = 0, rt = enemy.length;
//     while(lt <= rt) {
//         let mid = Math.floor((lt+rt) / 2);
//         if(check(n, k, mid, enemy)) lt = mid+1;
//         else rt = mid - 1;
//     }
//     return lt - 1;
// }
// const check = (n, k, mid, enemy) => {
//     if (mid <= k) return true;
//     let t = enemy.slice(0, mid).sort((a, b) => b - a);
//     let sum = 0;
//     for (let i = k; i < t.length; i++) {
//         sum += t[i];
//         if (sum > n) return false;
//     }
//     return true;
// }
