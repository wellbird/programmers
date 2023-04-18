// 점화식을 이용한 풀이 O(N)
function solution(n) {
  let arr = [1, 2, 3];
  if (n === 1) {
    return arr[0];
  } else if (n === 2) {
    return arr[1];
  } else if (n === 3) {
    return arr[2];
  } else {
    for (let k = 3; k < n; k++) {
      let newArr = [];
      newArr.push(arr[1]);
      newArr.push(arr[2]);
      let result =
        arr[1] + arr[2] > 1000000007
          ? (arr[1] + arr[2]) % 1000000007
          : arr[1] + arr[2];
      newArr.push(result);
      arr = newArr;
    }
    return arr[2];
  }
}

// 행렬을 이용한 O(log N) 풀이 But, 자바스크립트의 숫자가 커지면 Number범위를 넘어가서 정확도가 매우매우 떨어짐. 자바스크립트가 아닌 다른 언어에서 사용할 수 있는 방법
// function solution(n){
//     const oneMat = [[0, 1], [1, 1]]
//     function powerLow(k){
//         if(k === 1){
//             return oneMat
//         } else if(k % 2 === 1){
//             let newMat = powerLow((k - 1) / 2)
//             return dat(dat(newMat, newMat), oneMat)
//         } else{
//             let newMat = powerLow(k / 2)
//             return dat(newMat, newMat)
//         }
//     }
//     const answerMat = powerLow(n + 1)
//     return answerMat[0][1];
// }
// function dat(matrixA, matrixB){
//     let datMat = [[0, 0], [0, 0]]
//     datMat[0][0] = (matrixA[0][0]*matrixB[0][0] + matrixA[0][1]*matrixB[1][0]) % 1000000007
//     datMat[0][1] = (matrixA[0][0]*matrixB[0][1] + matrixA[0][1]*matrixB[1][1]) % 1000000007
//     datMat[1][0] = (matrixA[1][0]*matrixB[0][0] + matrixA[1][1]*matrixB[1][0]) % 1000000007
//     datMat[1][1] = (matrixA[1][0]*matrixB[0][1] + matrixA[1][1]*matrixB[1][1]) % 1000000007
//     return datMat
// }
