function solution(n, lost, reserve) {
  let stuArr = Array(n).fill(1);
  lost.map((item, index) => {
    stuArr[item - 1] -= 1;
  });
  reserve.map((item, index) => {
    stuArr[item - 1] += 1;
  });
  stuArr.map((item, index) => {
    if (item === 2 && stuArr[index - 1] === 0) {
      stuArr[index] -= 1;
      stuArr[index - 1] += 1;
    } else if (item === 2 && stuArr[index + 1] === 0) {
      stuArr[index] -= 1;
      stuArr[index + 1] += 1;
    }
  });
  const answer = stuArr.filter((item) => item !== 0).length;
  return answer;
}

// 다른사람의 풀이 - 자바스크립트 메소드를 활용한 풀이
// function solution(n, lost, reserve) {
//     lost.sort((a,b)=>a-b);
//     reserve.sort((a,b)=>a-b);
//     const newLost = lost.filter(l=> !reserve.includes(l) );
//     let newReserve = reserve.filter(r=> !lost.includes(r) );
//     return n - newLost.filter(a => {
//         const b = newReserve.find(r => Math.abs(r-a) <= 1)
//         if(!b) return true
//         newReserve = newReserve.filter(r => r !== b)
//     }).length;
// }
