function solution(absolutes, signs) {
  let answer = 0;
  signs.map((item, index) => {
    if (item === true) {
      answer += absolutes[index];
    } else {
      answer -= absolutes[index];
    }
  });
  return answer;
}

// 다른사람의 풀이
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
