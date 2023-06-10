function solution(names) {
  let answer = [];
  for (let k = 0; k < names.length; k += 5) {
    answer.push(names[k]);
  }
  return answer;
}
