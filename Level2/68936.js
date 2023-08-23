function solution(arr) {
  let answer = [0, 0];
  function DAC(x, y, n) {
    if (n === 1) {
      answer[arr[x][y]]++;
      return;
    }
    let check = true;
    for (let row = x; row < x + n; row++) {
      for (let col = y; col < y + n; col++) {
        if (arr[x][y] !== arr[row][col]) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      answer[arr[x][y]]++;
      return;
    } else {
      DAC(x, y, n / 2);
      DAC(x, y + n / 2, n / 2);
      DAC(x + n / 2, y, n / 2);
      DAC(x + n / 2, y + n / 2, n / 2);
    }
  }
  DAC(0, 0, arr.length);
  return answer;
}

// 다른사람의 풀이
// function solution(arr) {
//     const quadZip = (row, col, n) => {
//         if(n < 2) return arr[row][col] ? [0, 1] : [1, 0];
//         let cnt0 = 0, cnt1 = 0; n >>= 1;
//         for(let [i, j] of [[0,0],[0,1],[1,0],[1,1]]) {
//             let [zero, one] = quadZip(row+i*n, col+j*n, n);
//             cnt0 += zero;
//             cnt1 += one;
//         }
//         if(cnt0 === 0) return [0, 1];
//         if(cnt1 === 0) return [1, 0];
//         return [cnt0, cnt1];
//     }
//     return quadZip(0, 0, arr.length);
// }
