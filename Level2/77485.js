function solution(rows, columns, queries) {
  let answer = [];
  let arr = createArr(rows, columns);
  queries.forEach((query) => {
    answer.push(rotateArr(arr, query));
  });
  return answer;
}

function createArr(row, col) {
  let value = 1;
  const arr = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => value++)
  );
  return arr;
}

function rotateArr(arr, query) {
  const colLoop = query[2] - query[0];
  const rowLoop = query[3] - query[1];
  let curRow = query[1] - 1;
  let curCol = query[0] - 1;
  let min = arr[curCol][curRow];
  let temp = arr[curCol][curRow];
  for (let k = 0; k < rowLoop; k++) {
    curRow++;
    [arr[curCol][curRow], temp] = [temp, arr[curCol][curRow]];
    if (temp < min) min = temp;
  }
  for (let k = 0; k < colLoop; k++) {
    curCol++;
    [arr[curCol][curRow], temp] = [temp, arr[curCol][curRow]];
    if (temp < min) min = temp;
  }
  for (let k = 0; k < rowLoop; k++) {
    curRow--;
    [arr[curCol][curRow], temp] = [temp, arr[curCol][curRow]];
    if (temp < min) min = temp;
  }
  for (let k = 0; k < colLoop; k++) {
    curCol--;
    [arr[curCol][curRow], temp] = [temp, arr[curCol][curRow]];
    if (temp < min) min = temp;
  }
  return min;
}
