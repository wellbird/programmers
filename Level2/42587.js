function solution(priorities, location) {
  let answer = 0;
  while (true) {
    let max = Math.max(...priorities);
    if (location === 0) {
      if (priorities[0] === max) {
        answer++;
        return answer;
      } else {
        priorities.push(priorities.shift());
        location += priorities.length - 1;
      }
    } else {
      if (priorities[0] === max) {
        priorities.shift();
        location -= 1;
        answer++;
      } else {
        priorities.push(priorities.shift());
        location -= 1;
      }
    }
  }
}
