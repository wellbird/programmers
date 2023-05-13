function solution(n, works) {
  let answer = 0;
  works.sort((a, b) => b - a);
  while (n > 0 && works[0] > 0) {
    works[0]--;
    n--;
    let idx = 0;
    while (works[idx] < works[idx + 1] && n > 0) {
      idx++;
      works[idx]--;
      n--;
    }
    works.sort((a, b) => b - a);
  }
  works.map((item, _) => {
    answer += item ** 2;
  });
  return answer;
}

// 다른사람의 풀이 - maxheap클래스를 만들어서 풀이
// class MaxHeap {
//     constructor() {
//       this.heap = [null];
//     }
//     push(value) {
//       this.heap.push(value);
//       let currentIndex = this.heap.length - 1;
//       let parentIndex = Math.floor(currentIndex / 2);
//       while (parentIndex !== 0 && this.heap[parentIndex] < value) {
//         const temp = this.heap[parentIndex];
//         this.heap[parentIndex] = value;
//         this.heap[currentIndex] = temp;
//         currentIndex = parentIndex;
//         parentIndex = Math.floor(currentIndex / 2);
//       }
//     }
//     pop() {
//       if (this.heap.length === 2) return this.heap.pop();
//       const returnValue = this.heap[1];
//       this.heap[1] = this.heap.pop();
//       let currentIndex = 1;
//       let leftIndex = 2;
//       let rightIndex = 3;
//       while (
//         this.heap[currentIndex] < this.heap[leftIndex] ||
//         this.heap[currentIndex] < this.heap[rightIndex]
//       ) {
//         if (this.heap[leftIndex] < this.heap[rightIndex]) {
//           const temp = this.heap[currentIndex];
//           this.heap[currentIndex] = this.heap[rightIndex];
//           this.heap[rightIndex] = temp;
//           currentIndex = rightIndex;
//         } else {
//           const temp = this.heap[currentIndex];
//           this.heap[currentIndex] = this.heap[leftIndex];
//           this.heap[leftIndex] = temp;
//           currentIndex = leftIndex;
//         }
//         leftIndex = currentIndex * 2;
//         rightIndex = currentIndex * 2 + 1;
//       }
//       return returnValue;
//     }
//   }
// function solution(n, works) {
//     const heap = new MaxHeap();
//     for (let i = 0; i < works.length; i++) {
//       heap.push(works[i]);
//     }
//     for (let i = 0; i < n; i++) {
//       let peekValue = heap.pop() - 1;
//       if (peekValue < 0) peekValue = 0;
//       heap.push(peekValue);
//     }
//     return heap.heap
//       .filter((item) => item !== null)
//       .reduce((acc, item) => acc + item ** 2, 0);
// }
