function solution(array, n) {
  const arr = array.filter((item) => item === n);
  return arr.length;
}

// 다른사람의 풀이 - reduce 이용
// function solution(array, n) {
//     return array.reduce((prev, curr) => {
//         if(curr === n) prev++;
//         return prev;
//     }, 0);
// }
