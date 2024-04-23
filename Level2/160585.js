function solution(board) {
  let OCnt = 0;
  let XCnt = 0;
  let OWin = false;
  let XWin = false;

  for (let x = 0; x < 3; x++) {
    let checkRow = [board[x][0], true];
    let checkCol = [board[0][x], true];
    let checkDownCrs = [board[0][0], true];
    let checkUpCrs = [board[0][2], true];
    for (let y = 0; y < 3; y++) {
      if (board[x][y] === 'O') OCnt++;
      else if (board[x][y] === 'X') XCnt++;
      if (board[x][y] !== checkRow[0]) checkRow[1] = false;
      if (board[y][x] !== checkCol[0]) checkCol[1] = false;
      if (board[y][y] !== checkDownCrs[0]) checkDownCrs[1] = false;
      if (board[y][2 - y] !== checkUpCrs[0]) checkUpCrs[1] = false;
    }
    if (checkRow[0] !== '.' && checkRow[1]) {
      if (checkRow[0] === 'O') OWin = true;
      else XWin = true;
    }
    if (checkCol[0] !== '.' && checkCol[1]) {
      if (checkCol[0] === 'O') OWin = true;
      else XWin = true;
    }
    if (x === 0 && checkDownCrs[0] !== '.' && checkDownCrs[1]) {
      if (checkDownCrs[0] === 'O') OWin = true;
      else XWin = true;
    }
    if (x === 0 && checkUpCrs[0] !== '.' && checkUpCrs[1]) {
      if (checkUpCrs[0] === 'O') OWin = true;
      else XWin = true;
    }
  }
  if (XCnt > OCnt) return 0;
  if (OCnt - XCnt > 1) return 0;
  if (OWin && XWin) return 0;
  if (OWin && XCnt + 1 !== OCnt) return 0;
  if (XWin && OCnt !== XCnt) return 0;
  return 1;
}

// 다른사람의 풀이 - 승리 경우의수를 저장해놓고 풀이
// function getCount(board, kind) {
//     return board.reduce((acc, row) => {
//       return acc + row.split("").filter((char) => char === kind).length;
//     }, 0);
//   }
//   function checkWin(board, kind) {
//     const winLines = [
//       // 가로
//       [board[0][0], board[0][1], board[0][2]],
//       [board[1][0], board[1][1], board[1][2]],
//       [board[2][0], board[2][1], board[2][2]],
//       // 세로
//       [board[0][0], board[1][0], board[2][0]],
//       [board[0][1], board[1][1], board[2][1]],
//       [board[0][2], board[1][2], board[2][2]],
//       // 대각선
//       [board[0][0], board[1][1], board[2][2]],
//       [board[0][2], board[1][1], board[2][0]],
//     ];
//     return winLines.some((line) => line.every((char) => char === kind));
//   }
//   function isBoardValid(board) {
//     const oCount = getCount(board, "O");
//     const xCount = getCount(board, "X");
//     if (xCount > oCount || oCount > xCount + 1) {
//       return false;
//     }
//     if (checkWin(board, "O") && oCount !== xCount + 1) {
//       return false;
//     }
//     if (checkWin(board, "X") && xCount !== oCount) {
//       return false;
//     }
//     return true;
//   }
//   function solution(board) {
//     if (isBoardValid(board)) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
