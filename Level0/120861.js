function solution(keyinput, board) {
  const maxX = (board[0] - 1) / 2;
  const minX = ((board[0] - 1) / 2) * -1;
  const maxY = (board[1] - 1) / 2;
  const minY = ((board[1] - 1) / 2) * -1;
  let answer = [0, 0];
  for (let k of keyinput) {
    if (k === "up") {
      if (answer[1] === maxY) {
        continue;
      } else {
        answer[1] += 1;
      }
    } else if (k === "down") {
      if (answer[1] === minY) {
        continue;
      } else {
        answer[1] -= 1;
      }
    } else if (k === "left") {
      if (answer[0] === minX) {
        continue;
      } else {
        answer[0] -= 1;
      }
    } else if (k === "right") {
      if (answer[0] === maxX) {
        continue;
      } else {
        answer[0] += 1;
      }
    }
  }
  return answer;
}

// 다른사람의 풀이 - switch 이용
// function solution(keyinput, board) {
//     let res = [0,0];
//     for (let p of keyinput) {
//         switch(p){
//             case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
//             case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
//             case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
//             case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
//         }
//     }
//     return res;
// }
