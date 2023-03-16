function solution(n) {
  let answer = 0;
  const cnt = n.toString(2).match(/1/g).length;
  while (true) {
    n += 1;
    if (n.toString(2).match(/1/g).length === cnt) {
      answer = n;
      break;
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - 재귀
// function solution(n,a=n+1) {
//     return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
// }

// 다른사람의 풀이 2 - 쉬프트연산
// ** 알고리즘 시간 복잡도 O(log n) 이지만 사실상 O(a)에 가까움
// ** 655395 입력후 1억번 실행에 소요 시간450ms 미만
// function nextBigNumber(n) {
//     var i, j;
//     for (i = 0; !(n & 1); i++) {n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
//     for (j = 0; n & 1; i++, j++) {n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
//     for (j--, n++; i !== j; i--) {n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
//     for (i; i; i--, n++) {n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
//     return n;
// }
