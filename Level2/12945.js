function solution(n) {
  let cur = 1;
  let prev = 0;
  let loop = 2;
  while (loop <= n) {
    let temp = cur;
    cur += prev;
    prev = temp;
    if (cur > 1234567) {
      cur -= 1234567;
    }
    loop++;
  }
  return cur;
}

// 다른사람의 풀이 - 배열에 전부 저장
// function solution(n) {
//     var result = [0 , 1];
//     while ( result.length !== n + 1) {
//         var fibonacci = (result[result.length - 2] + result[result.length - 1]) % 1234567
//         result.push(fibonacci);
//     }
//      return result[n];
//  }
