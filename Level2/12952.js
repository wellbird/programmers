function solution(n) {
  let answer = 0;
  const arr = new Array(n).fill(-1);
  function dfs(col, board) {
    if (col === n) {
      answer++;
      return;
    }
    const newBoard = [...board];
    for (let row = 0; row < n; row++) {
      if (check(row, col, newBoard)) {
        newBoard[col] = row;
        dfs(col + 1, newBoard);
      }
    }
  }
  dfs(0, arr);
  return answer;
}

function check(row, col, arr) {
  for (let k = 0; k < col; k++) {
    if (arr[k] === row) return false;
    if (Math.abs(row - arr[k]) === Math.abs(col - k)) return false;
  }
  return true;
}
