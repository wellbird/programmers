function solution(numbers) {
  let answer = [];
  let stack = [];
  for (let k = numbers.length - 1; k >= 0; k--) {
    if (k === numbers.length - 1) {
      answer.push(-1);
      stack.push(numbers[k]);
    } else {
      while (stack.length !== 0 && stack[stack.length - 1] <= numbers[k]) {
        stack.pop();
      }
      if (stack.length === 0) {
        answer.push(-1);
        stack.push(numbers[k]);
      } else {
        answer.push(stack[stack.length - 1]);
        stack.push(numbers[k]);
      }
    }
  }
  answer.reverse();
  return answer;
}
