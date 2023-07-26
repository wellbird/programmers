function solution(park, routes) {
  let curIdx = [];
  for (let row = 0; row < park.length; row++) {
    for (let col = 0; col < park[0].length; col++) {
      if (park[row][col] === "S") {
        curIdx = [row, col];
        break;
      }
    }
    if (curIdx.length !== 0) {
      break;
    }
  }
  for (let item of routes) {
    const commend = item.split(" ");
    let isHit = false;
    if (commend[0] === "E") {
      if (curIdx[1] + +commend[1] >= park[0].length) {
        continue;
      }
      for (let k = curIdx[1] + 1; k <= curIdx[1] + +commend[1]; k++) {
        if (park[curIdx[0]][k] === "X") {
          isHit = true;
          break;
        }
      }
      if (!isHit) {
        curIdx[1] += +commend[1];
      }
    } else if (commend[0] === "W") {
      if (curIdx[1] - +commend[1] < 0) {
        continue;
      }
      for (let k = curIdx[1] - 1; k >= curIdx[1] - +commend[1]; k--) {
        if (park[curIdx[0]][k] === "X") {
          isHit = true;
          break;
        }
      }
      if (!isHit) {
        curIdx[1] -= +commend[1];
      }
    } else if (commend[0] === "S") {
      if (curIdx[0] + +commend[1] >= park.length) {
        continue;
      }
      for (let k = curIdx[0] + 1; k <= curIdx[0] + +commend[1]; k++) {
        if (park[k][curIdx[1]] === "X") {
          isHit = true;
          break;
        }
      }
      if (!isHit) {
        curIdx[0] += +commend[1];
      }
    } else if (commend[0] === "N") {
      if (curIdx[0] - +commend[1] < 0) {
        continue;
      }
      for (let k = curIdx[0] - 1; k >= curIdx[0] - +commend[1]; k--) {
        if (park[k][curIdx[1]] === "X") {
          isHit = true;
          break;
        }
      }
      if (!isHit) {
        curIdx[0] -= +commend[1];
      }
    }
  }
  return curIdx;
}

// 다른사람의 풀이
// function solution(park, routes) {
//     const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
//     let [x, y] = [0, 0];
//     for (let i = 0; i < park.length; i++) {
//       if (park[i].includes('S')) {
//         [x, y] = [i, park[i].indexOf('S')];
//         break;
//       }
//     }
//     routes.forEach((route) => {
//       const [r, n] = route.split(' ');
//       let [nx, ny] = [x, y];
//       let cnt = 0;
//       while (cnt < n) {
//         [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
//         if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
//         cnt++;
//       }
//       if (cnt == n) [x, y] = [nx, ny];
//     });
//     return [x, y];
//   }
