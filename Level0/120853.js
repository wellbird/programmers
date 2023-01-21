function solution(s) {
  let sArr = s.split(" ");
  while (sArr.includes("Z")) {
    let idx = sArr.indexOf("Z");
    sArr.splice(idx - 1, 2);
  }
  const answer = sArr.reduce((acc, cur) => (acc += Number(cur)), 0);
  return answer;
}

// 다른사람의 풀이 - 스택처럼 구현하기
// function solution(s) {
//     const stack = []
//     s.split(' ').forEach((target) => {
//         if(target === 'Z') stack.pop();
//         else stack.push(+target)
//     })
//     return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// }
