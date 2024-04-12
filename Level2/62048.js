function solution(w, h) {
  const gcd = getGcd(w, h);
  return w * h - (w / gcd + h / gcd - 1) * gcd;
}

function getGcd(a, b) {
  let big = a > b ? a : b;
  let small = a <= b ? a : b;
  while (small > 0) {
    const r = big % small;
    big = small;
    small = r;
  }
  return big;
}

// 다른사람의 풀이 - 기울기를 이용한 풀이
// function solution(w,h){
//     const slope = h / w;
//     let result = 0;
//     for(let i = 1; i <= w; i++){
//         result += Math.ceil(slope * i);
//     }
//     return ((h * w) - result) * 2;
// }
