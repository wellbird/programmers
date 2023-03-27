function solution(arr1, arr2) {
  let answer = [];
  for (let k = 0; k < arr1.length; k++) {
    let row = [];
    for (let l = 0; l < arr2[0].length; l++) {
      let col = 0;
      for (let m = 0; m < arr1[0].length; m++) {
        col += arr1[k][m] * arr2[m][l];
      }
      row.push(col);
    }
    answer.push(row);
  }
  return answer;
}

// 다른사람의 풀이 - reduce와 map을 이용한 깔끔한 풀이
// function solution(arr1, arr2) {
//     return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
// }
