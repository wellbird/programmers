function solution(arr, divisor) {
  let answer = [];
  arr.map((item, index) => {
    if (item % divisor === 0) {
      answer.push(item);
    }
  });
  answer.sort(function (a, b) {
    return a - b;
  });
  answer = answer.length === 0 ? [-1] : answer;
  return answer;
}

// 다른사람의 풀이 - filter이용
// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }
