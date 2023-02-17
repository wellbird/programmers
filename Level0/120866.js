function solution(board) {
  let answer = 0;
  board.map((row, rowIdx) => {
    row.map((col, colIdx) => {
      if (col === 1) {
        for (let k = rowIdx - 1; k <= rowIdx + 1; k++) {
          for (let l = colIdx - 1; l <= colIdx + 1; l++) {
            try {
              if (board[k][l] === 0) {
                board[k][l] = 2;
              }
            } catch {
              continue;
            }
          }
        }
      }
    });
  });
  board.map((item, index) => {
    answer += item.filter((k) => k === 0).length;
  });
  return answer;
}

// 다른사람의 풀이 - forEach문과 2차원 배열을 이용한 풀이
// function solution(board) {
//     let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
//     let safezone = 0;
//     board.forEach((row, y, self) => row.forEach((it, x) => {
//         if (it === 1) return false;
//         return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
//                ? false : safezone++;
//     }));
//     return safezone;
// }
