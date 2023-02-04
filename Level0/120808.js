function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  let GCD = 0;
  let bNum = 0;
  let sNum = 0;
  if (numer >= denom) {
    bNum = numer;
    sNum = denom;
  } else {
    bNum = denom;
    sNum = numer;
  }
  while (true) {
    if (bNum % sNum === 0) {
      GCD = sNum;
      break;
    } else {
      const remain = bNum % sNum;
      bNum = sNum;
      sNum = remain;
    }
  }
  const answer = [numer / GCD, denom / GCD];
  return answer;
}

// 다른사람의 풀이 - 유클리드 호제법을 함수화 시키기
// function fnGCD(a, b){
//     return (a%b)? fnGCD(b, a%b) : b;
// }
// function solution(denum1, num1, denum2, num2) {
//     let denum = denum1*num2 + denum2*num1;
//     let num = num1 * num2;
//     let gcd = fnGCD(denum, num); //최대공약수

//     return [denum/gcd, num/gcd];
// }
