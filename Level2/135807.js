function solution(arrayA, arrayB) {
  let answer = 0;
  let gcdA = arrayA[0];
  let gcdB = arrayB[0];
  for (let k = 1; k < arrayA.length; k++) {
    gcdA = gcd(gcdA, arrayA[k]);
    gcdB = gcd(gcdB, arrayB[k]);
  }
  if (gcdA === 1) {
    gcdA = 0;
  }
  if (gcdB === 1) {
    gcdB = 0;
  }
  if (arrayA.every((item, _) => item % gcdB !== 0)) {
    answer = Math.max(answer, gcdB);
  }
  if (arrayB.every((item, _) => item % gcdA !== 0)) {
    answer = Math.max(answer, gcdA);
  }
  return answer;
}
function gcd(a, b) {
  let remainder = a % b;
  return b === 0 ? a : gcd(b, remainder);
}

// 다른사람의 풀이
// function solution(arrayA, arrayB) {
//     const aResult = getAnswer(arrayA, arrayB)
//     const bResult = getAnswer(arrayB, arrayA)
//     return aResult > bResult ? aResult : bResult
// }
// function getAnswer (A, B) {
//     A.sort((a, b) => a - b)
//     for (let i = A[0]; i > 1; i--) {
//         if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
//     }
//     return 0
// }
