function solution(n) {
  let answer = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  let num = 1;
  let flag = 1;
  let col = -1;
  let row = 0;
  for (let k = 0; k < n; k++) {
    col += flag;
    answer[row][col] = num;
    num++;
  }
  n--;
  while (n > 0) {
    for (let k = 0; k < n; k++) {
      row += flag;
      answer[row][col] = num;
      num++;
    }
    flag *= -1;
    for (let k = 0; k < n; k++) {
      col += flag;
      answer[row][col] = num;
      num++;
    }
    n--;
  }
  return answer;
}

// 다른사람의 풀이 - direction을 만든 후 풀이
// function solution(n) {
//     const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//     const answer = Array.from(new Array(n), () => new Array(n).fill(0))
//     let x = 0, y = 0, dir = 0, num = 1;
//     while(num <= n * n) {
//         answer[x][y] = num;
//         let nextX = x + move[dir][0];
//         let nextY = y + move[dir][1];
//         if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
//             dir = (dir + 1) % 4;
//             nextX = x + move[dir][0];
//             nextY = y + move[dir][1];
//         }
//         x = nextX;
//         y = nextY;
//         num ++;
//     }
//     return answer;
// }
