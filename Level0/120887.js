function solution(i, j, k) {
  let numString = "";
  for (let n = i; n <= j; n++) {
    numString += String(n);
  }
  return numString.split("").filter((item) => Number(item) == k).length;
}

// 다른사람의 풀이 - k 기준으로 잘라서 갯수 세기
// function solution(i, j, k) {
//     let a ='';
//     for(i;i<=j;i++){
//         a += i;
//     }
//     return a.split(k).length-1;
// }
