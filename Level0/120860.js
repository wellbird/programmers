function solution(dots) {
  let height = 0;
  let width = 0;
  for (let k = 0; k < 3; k += 1) {
    if (dots[k][0] !== dots[k + 1][0]) {
      width = Math.abs(dots[k][0] - dots[k + 1][0]);
    }
    if (dots[k][1] !== dots[k + 1][1]) {
      height = Math.abs(dots[k][1] - dots[k + 1][1]);
    }
  }
  return height * width;
}

// 다른사람의 풀이 - 배열에 넣고 최대, 최솟값을 이용
// function solution(dots) {
//     let x = [],
//         y = [];
//     for (let pos of dots) {
//         x.push(pos[0]);
//         y.push(pos[1]);
//     }
//     return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
// }
