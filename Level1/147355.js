function solution(t, p) {
  let cnt = 0;
  const pNum = Number(p);
  const pLen = p.length;
  for (let k = 0; k <= t.length - pLen; k++) {
    const tNum = Number(t.substr(k, pLen));
    if (tNum <= pNum) {
      cnt++;
    }
  }
  return cnt;
}

// 다른사람의 풀이 - slice 이용
// function solution(t, p) {
//     let count = 0;
//     for(let i=0; i<=t.length-p.length; i++) {
//         let value = t.slice(i, i+p.length);
//         if(+p >= +value) count++;
//     }
//     return count;
// }
