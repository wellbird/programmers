function solution(arr) {
  let answer = 1;
  arr.sort((a, b) => b - a);
  arr.map((item, index) => {
    let GCD = euclidean(item, answer);
    answer = (item * answer) / GCD;
  });
  return answer;
}
function euclidean(a, b) {
  let bigNum = 0;
  let smallNum = 0;
  if (a > b) {
    bigNum = a;
    smallNum = b;
  } else {
    bigNum = a;
    smallNum = b;
  }
  while (true) {
    let remain = bigNum % smallNum;
    bigNum = smallNum;
    smallNum = remain;
    if (smallNum === 0) {
      break;
    }
  }
  return bigNum;
}
// sort하고 계산하는것이 빠르다고 생각했지만 안해주는게 두 배 가량 더 빠름

// 다른사람의 풀이 - 같은 매커니즘 더 가독성 좋고 짧은 풀이
// function nlcm(num) {
//   return num.reduce((a,b) => a*b / gcd(a,b))
// }
// function gcd(a, b) {
//   return a % b ? gcd(b, a%b) : b
// }
