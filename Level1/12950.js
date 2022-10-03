function solution(arr1, arr2) {
  let answer = [];
  arr1.map((item1, idx1) => {
    let arr = [];
    item1.map((item2, idx2) => {
      arr.push(arr1[idx1][idx2] + arr2[idx1][idx2]);
    });
    answer.push(arr);
  });
  return answer;
}

// 다른사람의 풀이 - forEach와 화살표함수 이용
// function solution(arr1, arr2) {
//     const answer = [];
//     arr1.forEach((arr, i) => answer.push(arr.map((v, j) => v + arr2[i][j])));
//     return answer;
// }
