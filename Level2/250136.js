// simpleCustomQueue를 만들지 않고 일반 배열과 stack을 이용한다 코드가 간결해지고 조금 더 빠름
function solution(land) {
  const [rowLen, colLen] = [land.length, land[0].length];
  const sumArr = Array(colLen).fill(0);
  const visit = [];
  for (let k = 0; k < rowLen; k++) {
    visit[k] = new Array(colLen).fill(false);
  }
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const simpleCustomQueue = {
    items: [],
    head: 0,
    push(item) {
      this.items.push(item);
    },
    shift() {
      return this.items[this.head++];
    },
    size() {
      return this.items.length - this.head;
    },
    reset() {
      this.items = [];
      this.head = 0;
    },
  };
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (land[row][col] === 1 && !visit[row][col]) {
        const visitCol = new Set();
        simpleCustomQueue.push([row, col]);
        visit[row][col] = true;
        let sum = 0;
        while (simpleCustomQueue.size()) {
          const [curRow, curCol] = simpleCustomQueue.shift();
          visitCol.add(curCol);
          sum++;
          for (let k = 0; k < 4; k++) {
            const [nextRow, nextCol] = [curRow + dx[k], curCol + dy[k]];
            if (
              nextRow >= 0 &&
              nextRow < rowLen &&
              nextCol >= 0 &&
              nextCol < colLen
            ) {
              if (land[nextRow][nextCol] === 1 && !visit[nextRow][nextCol]) {
                simpleCustomQueue.push([nextRow, nextCol]);
                visit[nextRow][nextCol] = true;
              }
            }
          }
        }
        visitCol.forEach((item) => {
          sumArr[item] += sum;
        });
        simpleCustomQueue.reset();
      }
    }
  }
  return Math.max(...sumArr);
}

// 다른사람의 풀이 - dp를 이용한 풀이
// function solution(land) {
//     const n = land.length;
//     const m = land[0].length;
//     const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
//     const dp = new Array(m + 1).fill(0)
//     const bfs = (moveGroup, landObj) => {
//         const newMoveGroup = [];
//         landObj.area += moveGroup.length;
//         for (const [i, j] of moveGroup) {
//             if (landObj.maxJ < j) landObj.maxJ = j;
//             if (landObj.minJ > j) landObj.minJ = j;
//             for (const [mi, mj] of moves) {
//                 const [movedI, movedJ] = [mi + i, mj + j];
//                 if (movedI < n && movedI >= 0 && movedJ < m && movedJ >= 0 && land[movedI][movedJ]) {
//                     land[movedI][movedJ] = 0;
//                     newMoveGroup.push([movedI, movedJ]);
//                 }
//             }
//         }
//         if (newMoveGroup.length) bfs(newMoveGroup, landObj);
//     }
//     for (let i = 0; i < n; i += 1) {
//         for (let j = 0; j < m; j += 1) {
//             if (land[i][j]) {
//                 const landObj = { area: 0, minJ: j, maxJ: j };
//                 land[i][j] = 0;
//                 bfs([[i, j]], landObj);
//                 dp[landObj.minJ] += landObj.area;
//                 dp[landObj.maxJ + 1] -= landObj.area;
//             }
//         }
//     }
//     let sum = 0;
//     let result = 0;
//     for (let i = 0; i < m; i += 1) {
//         if (dp[i]) {
//             sum += dp[i];
//             if (sum > result) result = sum;
//         }
//     }
//     return result;
// }
