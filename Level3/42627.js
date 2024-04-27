class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallest][1]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

function solution(jobs) {
  if (jobs.length === 0) {
    return 0;
  } else if (jobs.length === 1) {
    return jobs[0][1];
  }
  let sumTime = 0;
  const heap = new MinHeap();
  jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let curTime = jobs[0][0];
  let idx = 0;
  while (jobs[idx][0] === curTime) {
    heap.push(jobs[idx]);
    idx++;
  }
  while (idx < jobs.length) {
    let curItem;
    if (heap.isEmpty()) {
      curItem = jobs[idx];
      idx++;
    } else {
      curItem = heap.pop();
    }
    if (curTime < curItem[0]) {
      sumTime += curItem[1];
      curTime = curItem[0] + curItem[1];
    } else {
      sumTime += curTime - curItem[0] + curItem[1];
      curTime = curTime + curItem[1];
    }
    while (jobs[idx] && jobs[idx][0] < curTime) {
      heap.push(jobs[idx]);
      idx++;
    }
  }
  while (!heap.isEmpty()) {
    const curItem = heap.pop();
    if (curTime < curItem[0]) {
      sumTime += curItem[1];
      curTime = curItem[0] + curItem[1];
    } else {
      sumTime += curTime - curItem[0] + curItem[1];
      curTime = curTime + curItem[1];
    }
  }
  return ~~(sumTime / jobs.length);
}
