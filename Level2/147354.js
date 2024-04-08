function solution(data, col, row_begin, row_end) {
  const modArr = [];
  data.sort((a, b) => b[0] - a[0]);
  data.sort((a, b) => a[col - 1] - b[col - 1]);
  for (let k = row_begin - 1; k < row_end; k++) {
    let modResult = 0;
    data[k].forEach((item) => {
      modResult += item % (k + 1);
    });
    modArr.push(modResult);
  }
  return modArr.reduce((acc, cur) => acc ^ cur);
}

// 다른사람의 풀이 - sort 한번에 처리
// function sort(a, b, col) {
//     return a[col - 1] - b[col - 1] || b[0] - a[0];
// }

// function solution(data, col, row_begin, row_end) {
//     data.sort((a, b) => sort(a, b, col));
//     return data
//         .map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
//         .slice(row_begin - 1, row_end)
//         .reduce((acc, val) => acc ^ val, 0);
// }
