function solution(board) {
  const N = board.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const q = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ];
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(dx.length).fill(Infinity))
  );
  const check = (x, y) =>
    x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;
  while (q.length) {
    const [x, y, prevIdx, cost] = q.shift();
    for (let curIdx = 0; curIdx < dx.length; curIdx++) {
      const [newX, newY] = [x + dx[curIdx], y + dy[curIdx]];
      if (!check(newX, newY)) continue;
      const newCost = cost + (prevIdx === curIdx ? 100 : 600);
      if (newCost < dp[newX][newY][curIdx]) {
        dp[newX][newY][curIdx] = newCost;
        q.push([newX, newY, curIdx, newCost]);
      }
    }
  }
  return Math.min(...dp[N - 1][N - 1]);
}

// 다른사람의 풀이 - deque 자료구조를 구현하여 풀이
// class Deque {
//     constructor(capacity = Deque.DEFAULT_CAPACITY) {
//         this._front = 0;
//         this._size = 0;
//         this._data = new Array(capacity);
//     }
//     size() {
//         return this._size;
//     }
//     isEmpty() {
//         return this._size === 0;
//     }
//     addFirst(element) {
//         if (this._size === this._data.length) {
//             this._resize(2 * this._size);
//         }
//         const avail = this._front === 0 ? this._data.length - 1 : this._front - 1;
//         this._data[avail] = element;
//         this._size += 1;
//         return this;
//     }
//     addLast(element) {
//         if (this._size === this._data.length) {
//             this._resize(2 * this._size);
//         }
//         const avail = (this._front + this._size) % this._data.length;
//         this._data[avail] = element;
//         this._size += 1;
//         return this;
//     }
//     _resize(capacity) {
//         const old = this._data;
//         const oldLen = old.length;
//         this._data = new Array(capacity);
//         let walk = this._front;
//         for (const index of [...Array(this._size).keys()]) {
//             this._data[index] = old[walk];
//             walk = (1 + walk) % oldLen;
//         }
//         this._front = 0;
//     }
//     first() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         return this._data[this._front];
//     }
//     last() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const back = (this._front + this._size - 1) % this._data.length;
//         return this._data[back];
//     }
//     deleteFirst() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const takenThing = this._data[this._front];
//         this._data[this._front] = null;
//         this._front = (this._front + 1) % this._data.length;
//         this._size -= 1;
//         if (this._size > 0 && this._size < Math.floor(this._data.length / 4)) {
//             this._resize(Math.floor(this._data.length / 2));
//         }
//         return takenThing;
//     }
//     deleteLast() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const back = (this._front + this._size - 1) % this._data.length;
//         const takenThing = this._data[back];
//         this._size -= 1;
//         if (this._size > 0 && this._size < Math.floor(this._data.length / 4)) {
//             this._resize(Math.floor(this._data.length / 2));
//         }
//         return takenThing;
//     }
// }
// Deque.DEFAULT_CAPACITY = 10;
// const solution = (board) => {
//     const N = board.length;
//     const bfs = (start) => {
//         const dist = Array.from(Array(N), () => new Array(N).fill(Infinity));
//         dist[0][0] = 0;
//         const que = new Deque();
//         const directions = [
//             [0, 1],
//             [1, 0],
//             [0, -1],
//             [-1, 0],
//         ];
//         let result = Infinity;
//         if (start === 0 && board[0][1] === 0) {
//             que.addLast([0, 1, 0, 100]);
//             dist[0][1] = 100;
//         }
//         if (start === 1 && board[1][0] === 0) {
//             que.addLast([1, 0, 1, 100]);
//             dist[1][0] = 100;
//         }
//         while (!que.isEmpty()) {
//             const [row, col, direction, cost] = que.deleteFirst();
//             if (row === N - 1 && col === N - 1) {
//                 console.log(dist);
//                 result = Math.min(result, cost);
//             }
//             for (let dir = 0; dir < 4; dir++) {
//                 const nRow = row + directions[dir][0];
//                 const nCol = col + directions[dir][1];
//                 const newCost = cost + (direction === dir ? 100 : 600);
//                 if (nRow >= 0 &&
//                     nRow < N &&
//                     nCol >= 0 &&
//                     nCol < N &&
//                     board[nRow][nCol] === 0 &&
//                     dist[nRow][nCol] > newCost) {
//                     dist[nRow][nCol] = newCost;
//                     que.addLast([nRow, nCol, dir, newCost]);
//                 }
//             }
//         }
//         return result;
//     };
//     const right = bfs(0);
//     const down = bfs(1);
//     return Math.min(right, down);
// };
