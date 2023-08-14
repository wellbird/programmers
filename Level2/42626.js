class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index] < this.heap[parent]) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[parent];
      this.heap[parent] = temp;
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  bubbleDown() {
    let index = 0;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    while (left < this.heap.length) {
      let smaller =
        right < this.heap.length && this.heap[right] < this.heap[left]
          ? right
          : left;
      if (this.heap[index] < this.heap[smaller]) {
        break;
      }
      const temp = this.heap[index];
      this.heap[index] = this.heap[smaller];
      this.heap[smaller] = temp;
      index = smaller;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
}

function solution(scoville, K) {
  let answer = 0;
  const minHeap = new MinHeap();
  for (const value of scoville) {
    minHeap.add(value);
  }
  while (minHeap.size() > 1 && minHeap.peek() < K) {
    const first = minHeap.poll();
    const second = minHeap.poll();
    const mix = first + second * 2;
    minHeap.add(mix);
    answer++;
  }
  return minHeap.peek() < K ? -1 : answer;
}
