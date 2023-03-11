function solution(n) {
  let answer = 0;
  for (let k = 1; k <= n; k++) {
    if (n % k == 0 && k % 2 !== 0) {
      answer++;
    }
  }
  return answer;
}
// n의 약수 중 홀수의 갯수 = n을 연속된 숫자의 합으로 표현 하는 방법의 수

// 다른사람의 풀이 - n-(1부터 i까지 합)을 i로 나눴을 때 나머지가 0
// function solution(n) {
//     var answer = 0;
//     let  i = 0;
//     while(n > 0){
//         i++;
//        if(n % i  === 0)  answer++;
//         n -= i;
//     }
//     return answer;
// }
