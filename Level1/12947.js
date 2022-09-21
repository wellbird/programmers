function solution(x) {
  let sum = 0;
  String(x)
    .split("")
    .map((item, index) => {
      sum += Number(item);
    });
  const answer = x % sum === 0 ? true : false;
  return answer;
}

// 다른 사람의 풀이 1 - 속도는 느림, 아이디어 참고
// function solution(x) {
//     return x%eval([...x.toString()].join("+")) ? false : true;
// }

// 다른 사람의 풀이 2 - Math이용
// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10;
//         x = Math.floor(x/10);
//     } while (x>0);

//     return !(num%sum);
// }
