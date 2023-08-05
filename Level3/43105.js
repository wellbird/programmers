function solution(triangle) {
  let dp = [];
  triangle.forEach((item, idx) => {
    if (idx === 0) {
      dp = item;
    } else {
      for (let k = 0; k < item.length; k++) {
        if (k === 0) {
          item[k] += dp[k];
        } else if (k === item.length - 1) {
          item[k] += dp[k - 1];
        } else {
          item[k] += Math.max(dp[k - 1], dp[k]);
        }
      }
      dp = item;
    }
  });
  return Math.max(...dp);
}

// 다른사람의 풀이 - reduce이용
// function solution(triangle) {
//     return Math.max(...triangle.reduce((cost, line) => {
//         return line.map((v, index) => {
//             return v + Math.max((index < cost.length ? cost[index] : 0), (index > 0 ? cost[index-1] : 0));
//         });
//     }, []));
// }
