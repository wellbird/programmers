function Euclidean(a, b) {
  if (b === 0) {
    return a;
  }
  if (a % b === 0) {
    return b;
  } else {
    let k = b;
    let l = a % b;
    return Euclidean(k, l);
  }
}

function solution(n, m) {
  let big = 0;
  let small = 0;
  if (n >= m) {
    big = n;
    small = m;
  } else {
    big = m;
    small = n;
  }
  const GCD = Euclidean(big, small);
  const LCM = (n * m) / GCD;
  const answer = [GCD, LCM];
  return answer;
}

// 다른사람의 풀이
// function solution(n, m) {
//     const min = Math.min(n, m);
//     let common_max = 1;
//     for(let i = min; i > 0; i--){
//         if(n % i === 0 && m % i === 0){
//             common_max = i;
//             break;
//         }
//     }
//     return [common_max, common_max * (n / common_max)* (m / common_max)];
// }
