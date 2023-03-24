function solution(s) {
  let answer = 0;
  let sArr = s.split("");
  for (let k = 0; k < sArr.length; k++) {
    if (checkAvail(sArr) === true) {
      answer++;
    }
    sArr.unshift(sArr.pop());
  }
  return answer;
}
function checkAvail(s) {
  let stack = [];
  for (let k of s) {
    if (stack.length === 0) {
      if (k === ")" || k === "}" || k === "]") {
        return false;
      } else {
        stack.push(k);
      }
    } else {
      if (k === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          stack.push(k);
        }
      } else if (k === "}") {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          stack.push(k);
        }
      } else if (k === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          stack.push(k);
        }
      } else {
        stack.push(k);
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
