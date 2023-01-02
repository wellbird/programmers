function solution(n) {
  const answerArr = [];
  for (let k = 4; k <= n; k++) {
    if (k % 2 === 0) {
      answerArr.push(k);
    } else {
      for (let l = 3; l <= Math.sqrt(k); l++) {
        if (k % l === 0) {
          answerArr.push(k);
          break;
        }
      }
    }
  }
  return answerArr.length;
}

// 다른사람의 풀이 - 에라토스테네스의 채 활용
// function solution(n) {
//     let dp = new Array(n+1).fill(1)
//     for(let i = 2 ; i <= n ; i++){
//         if(dp[i]){
//             for(let j = 2 ; i*j <= n ; j++){
//                 dp[i*j] = 0
//             }
//         }
//     }
//     return dp.filter(el => el === 0).length
// }
