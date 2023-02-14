function solution(k, score) {
  let answer = [];
  let glory = [];
  score.map((item, index) => {
    if (glory.length === k) {
      const minIdx = glory.indexOf(Math.min(...glory));
      if (item > glory[minIdx]) {
        glory[minIdx] = item;
      }
    } else {
      glory.push(item);
    }
    answer.push(Math.min(...glory));
  });
  return answer;
}
