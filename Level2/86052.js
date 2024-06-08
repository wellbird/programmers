function solution(grid) {
  const answer = [];
  const [rowLen, colLen] = [grid.length, grid[0].length];
  const visitedArr = Array.from({ length: rowLen }, () =>
    Array.from({ length: colLen }, () => Array(4).fill(false))
  );
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const dirObj = { S: [0, 1, 2, 3], L: [3, 2, 0, 1], R: [2, 3, 1, 0] };
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      for (let k = 0; k < 4; k++) {
        let curRow =
          row + dx[k] < 0
            ? rowLen - 1
            : row + dx[k] >= rowLen
            ? 0
            : row + dx[k];
        let curCol =
          col + dy[k] < 0
            ? colLen - 1
            : col + dy[k] >= colLen
            ? 0
            : col + dy[k];
        if (visitedArr[curRow][curCol][k]) continue;
        else {
          let cycleCnt = 1;
          let curDir = k;
          visitedArr[curRow][curCol][k] = true;
          while (true) {
            const nextDir = dirObj[grid[curRow][curCol]][curDir];
            curRow =
              curRow + dx[nextDir] < 0
                ? rowLen - 1
                : curRow + dx[nextDir] >= rowLen
                ? 0
                : curRow + dx[nextDir];
            curCol =
              curCol + dy[nextDir] < 0
                ? colLen - 1
                : curCol + dy[nextDir] >= colLen
                ? 0
                : curCol + dy[nextDir];
            if (visitedArr[curRow][curCol][nextDir]) break;
            else {
              curDir = nextDir;
              visitedArr[curRow][curCol][curDir] = true;
              cycleCnt++;
            }
          }
          answer.push(cycleCnt);
        }
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
