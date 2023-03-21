function solution(n) {
  let ans = 0;
  while (n !== 0) {
    if (n % 2 === 1) {
      ans++;
      n--;
    }
    n /= 2;
  }
  return ans;
}

// 다른사람의 풀이 - 2진수로 변환 후 1의 갯수 세기
// function solution(n) {
//     return n.toString(2).replace(/0/g,"").length
// }
