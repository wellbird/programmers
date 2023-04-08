function solution(n, k) {
  let answer = 0;
  let string = n.toString(k);
  let arr = string.split("0");
  for (let k = 0; k < arr.length; k++) {
    if (Number(arr[k]) === 0 || Number(arr[k]) === 1) {
      continue;
    } else if (Number(arr[k]) === 2 || Number(arr[k]) === 3) {
      answer++;
    } else {
      let isPrime = true;
      for (let l = 2; l <= Math.sqrt(Number(arr[k])); l++) {
        if (Number(arr[k]) % l === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        answer++;
      }
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - +v에서 +는 v를 문자열에서 숫자로 바꿔줌
// function isPrime(num){
//     if(!num || num===1) return false;
//     for(let i=2; i<=+Math.sqrt(num); i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// function solution(n, k) {
//     const candidates = n.toString(k).split('0');
//     return candidates.filter(v=>isPrime(+v)).length;
// }

// 다른사람의 풀이 2 - Math.sqrt대신 i * i < number 사용
// function solution(n, k) {
//     let numbers = n.toString(k).split('0').filter(a=>a>1)
//     let answer=0;
//     for(const number of numbers){
//         answer++
//         if(number>3){
//             for(let i=2; i*i<=number;i++){
//           if(number%i==0){answer--;
//                           break}
//         }}}
//     return answer
// }
