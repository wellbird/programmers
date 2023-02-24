function solution(dots) {
  const cases = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];
  for (let k of cases) {
    const firstNumer = dots[k[0]][1] - dots[k[1]][1];
    const firstDenom = dots[k[0]][0] - dots[k[1]][0];
    const secondNumer = dots[k[2]][1] - dots[k[3]][1];
    const secondDenom = dots[k[2]][0] - dots[k[3]][0];
    if (firstNumer * secondDenom === secondNumer * firstDenom) {
      return 1;
    }
  }
  return 0;
}

// 다른사람의 풀이 - 함수를 만들어 풀이
// function solution(dots) {
//     if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//         return 1;
//     return 0;
// }
// function calculateSlope(arr1, arr2) {
//     return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }
