function solution(food) {
  let answer = "";
  for (let k in food) {
    if (food[k] % 2 !== 0) {
      food[k] = food[k] - 1;
    }
    if (k === 0) {
      continue;
    }
    const subStr = k.repeat(food[k]);
    answer =
      answer.slice(0, answer.length / 2) +
      subStr +
      answer.slice(answer.length / 2, answer.length);
  }
  answer =
    answer.slice(0, answer.length / 2) +
    "0" +
    answer.slice(answer.length / 2, answer.length);
  return answer;
}

// 다른사람의 풀이 - 배열 이용
// function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i]/2));
//     }
//     return res + '0' + [...res].reverse().join('');
// }
