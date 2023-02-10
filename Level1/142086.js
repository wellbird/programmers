function solution(s) {
  let answer = [];
  let subArr = [];
  s.split("").map((item, index) => {
    if (subArr.includes(item)) {
      const lastIdx = subArr.lastIndexOf(item);
      answer.push(subArr.length - lastIdx);
    } else {
      answer.push(-1);
    }
    subArr.push(item);
  });
  return answer;
}
