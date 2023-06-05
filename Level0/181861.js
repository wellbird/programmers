function solution(arr) {
  let answer = [];
  arr.forEach((item, _) => {
    for (let k = 0; k < item; k++) {
      answer.push(item);
    }
  });
  return answer;
}
