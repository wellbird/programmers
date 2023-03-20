function solution(s) {
  let stack = [];
  for (let k of s) {
    if (stack[stack.length - 1] === k) {
      stack.pop();
    } else {
      stack.push(k);
    }
  }
  if (stack.length === 0) {
    return 1;
  }
  return 0;
}
