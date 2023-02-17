function solution(a, b, n) {
  let cola = n;
  let answer = 0;
  while (true) {
    answer += ~~(cola / a) * b;
    cola = ~~(cola / a) * b + (cola % a);
    console.log(answer, cola);
    if (~~(cola / a) === 0) {
      break;
    }
  }
  return answer;
}

// 다른사람의 풀이 - Math 메소드만을 이용한 풀이
// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
