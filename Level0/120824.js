function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.map((item, idx) => {
    if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });
  return [even, odd];
}

// 다른사람의 풀이 - filter을 이용한 풀이
// function solution(num_list) {
//     return [
//       num_list.filter((num) => num % 2 === 0).length,
//       num_list.filter((num) => num % 2 === 1).length,
//     ];
//   }
