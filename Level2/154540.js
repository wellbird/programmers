function solution(maps) {
  const newMap = maps.map((n) => n.split(""));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  function dfs(x, y, k) {
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < newMap.length &&
        newY < newMap[0].length
      ) {
        if (newMap[newX][newY] !== "X") {
          const next = Number(newMap[newX][newY]);
          newMap[newX][newY] = "X";
          k += dfs(newX, newY, next);
        }
      }
    }
    return k;
  }
  const answer = [];
  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] !== "X") {
        const start = Number(newMap[i][j]);
        newMap[i][j] = "X";
        answer.push(dfs(i, j, start));
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// 다른사람의 풀이 - BFS를 이용한 풀이
// function solution(maps) {
//     const arrMap = maps.map((string) => string.split(""));
//     const rowLength = arrMap.length - 1;
//     const columnLength = arrMap[0].length - 1;
//     const dRow = [1, 0, -1, 0];
//     const dCol = [0, 1, 0, -1];
//     const result = [];
//     const bfs = (row, col, count) => {
//         if (row > rowLength || col > columnLength || row < 0 || col < 0) {
//             return count;
//         }
//         if (arrMap[row][col] === "X") {
//             return count;
//         }
//         count += Number(arrMap[row][col]);
//         arrMap[row][col] = "X";
//         for (let i = 0; i < 4; i++) {
//             count = bfs(row + dRow[i], col + dCol[i], count);
//         }
//         return count;
//     };
//     for (let i = 0; i <= rowLength; i++) {
//         for (let j = 0; j <= columnLength; j++) {
//             if (arrMap[i][j] === "X") {
//                 continue;
//             }
//             result.push(bfs(i, j, 0));
//         }
//     }
//     return result.length ? result.sort((a, b) => a - b) : [-1];
// }
