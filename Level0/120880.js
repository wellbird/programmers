function solution(numlist, n) {
  numlist.sort((a, b) => b - a);
  numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
  return numlist;
}

// 다른사람의 풀이 1 - sort 안에 비교연산자 가능(js의 sort함수를 보면 음수를 반환하면 a가 먼저, 양수면 b가 순서가 먼저 되도록 짜여져 있고, b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 ||연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 함)
// function solution(numlist, n) {
//     return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
//  }

// 다른사람의 풀이 2 - sort 안에서 함수로 처리
// function solution(numlist, n) {
//     numlist.sort((a,b)=>{
//         let n1 = Math.abs(a-n),
//             n2 = Math.abs(b-n);
//         return n1 < n2 ? -1 : n1 === n2 ? a < b ? 1 : -1 : 1;
//     });
//     return numlist;
// }
