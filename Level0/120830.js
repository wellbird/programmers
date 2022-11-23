function solution(n, k) {
  const lamb = n;
  const sale = (n / 10) << 0;
  const drink = k - sale < 0 ? 0 : k - sale;
  return 12000 * lamb + 2000 * drink;
}

// 다른사람의 풀이 1 - parseInt이용
// function solution(n, k) {
//     return n*12000 + k*2000 - parseInt(n/10)*2000
// }

// 다른사람의 풀이 2 - ~~이용
// function solution(n, k) {
//     k-=~~(n/10);
//     if (k < 0) k = 0;
//     return n*12000+k*2000;
// }
