function solution(n) {
  let num = [];
  let answer = 0;
  for (let k = 1; k <= n / 2; k++) {
    if (n % k === 0) {
      num.push(k);
    }
  }
  num.map((item, index) => {
    answer += item;
  });
  answer += n;
  return answer;
}

// 다른사람의 풀이 1
// function solution(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) sum += i
//     }
//     return sum
// }

// 다른사람의 풀이 2 - 재귀 이용 but 시간이 오래걸리는 케이스 다수
// function solution(n, a=0, b=0) {
//     return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
// }
