function solution(number, k) {
  let cnt = 0;
  let stack = [];
  for (let idx = 0; idx < number.length; idx++) {
    if (cnt < k) {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1] < number[idx] &&
        cnt < k
      ) {
        stack.pop();
        cnt++;
      }
      stack.push(number[idx]);
    } else {
      stack.push(number[idx]);
    }
  }
  while (stack.length > number.length - k) {
    stack.pop();
  }
  return stack.join("");
}
