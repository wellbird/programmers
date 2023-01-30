function solution(A, B) {
  let aArr = A.split("");
  let bArr = B.split("");
  let count = 0;
  for (let k = 0; k < aArr.length; k++) {
    let check = true;
    for (let l in aArr) {
      if (!(aArr[l] === bArr[l])) {
        check = false;
        break;
      }
    }
    if (check === true) {
      break;
    }
    let token = aArr.pop();
    aArr.unshift(token);
    count += 1;
  }
  const answer = count === aArr.length ? -1 : count;
  return answer;
}

// 다른사람의 풀이 1 - b를 두 개 잇고 a를 찾기
// let solution=(a,b)=>(b+b).indexOf(a)

// 다른사람의 풀이 2 - slice 이용
// function solution(A, B) {
//     if (A===B) return 0;
//     for (let i = 0; i < A.length; i++) {
//         A = A.slice(-1) + A.slice(0,-1);
//         if (A === B) return i+1;
//     }
//     return -1;
// }
