function solution(s) {
  let stack = [];
  if (s[0] === ")") {
    return false;
  }
  for (let k of s) {
    if (k === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}

// 다른사람의 풀이 - 스택의 개념만 적용
// function solution(s){
//     let cum = 0
//     for (let paren of s) {
//         cum += paren === '('? 1: -1
//         if(cum < 0) {
//             return false
//         }
//     }
//     return cum === 0? true: false;
// }
