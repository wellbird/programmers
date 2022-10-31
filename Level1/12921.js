function solution(n) {
  let arr = Array(n + 1)
    .fill(1)
    .fill(0, 0, 2);
  for (let k = 2; k * k <= n; k++) {
    if (arr[k]) {
      for (let l = k * k; l <= n; l += k) {
        arr[l] = 0;
      }
    }
  }
  const answerArr = arr.filter((a) => a === 1);
  const answer = answerArr.length;
  return answer;
}

// 다른사람의 풀이 1 - set을 이용
// function solution(n) {
//     const s = new Set();
//     for(let i=1; i<=n; i+=2){
//         s.add(i);
//     }
//     s.delete(1);
//     s.add(2);
//     for(let j=3; j<Math.sqrt(n); j++){
//         if(s.has(j)){
//              for(let k=j*2; k<=n; k+=j){
//                 s.delete(k);
//              }
//         }
//     }
//     return s.size;
// }

// 다른사람의 풀이 2
// function solution(n) {
//     var answer = 1;
//     for(let i =3; i < n+1; i ++){
//         let count = 0;
//         for(let j=2; j <= Math.sqrt(i); j ++){
//             if(i % j == 0){
//                 ++count
//                 break;
//             }
//         }
//         if(count == 0){
//             ++answer
//         }

//     }
//     return answer;
// }
