function solution(N, stages) {
  let challenger = stages.length;
  let success = [];
  let answer = [];
  for (let k = 0; k < N; k++) {
    let cnt = stages.filter((item) => item === k + 1);
    success.push(challenger === 0 ? 0 : cnt.length / challenger);
    challenger -= cnt.length;
  }
  for (let k = 0; k < N; k++) {
    let max = -1;
    let idx = -1;
    for (let l in success) {
      if (success[l] > max) {
        max = success[l];
        idx = l;
      }
    }
    answer.push(Number(idx) + 1);
    success[idx] = -1;
  }
  return answer;
}

// 다른사람의 풀이 - filter와 sort를 이용한 간단한 풀이
// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }
