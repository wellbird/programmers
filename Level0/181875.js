function solution(strArr) {
  let answer = [];
  strArr.forEach((item, index) => {
    if (index % 2) {
      answer.push(item.toUpperCase());
    } else {
      answer.push(item.toLowerCase());
    }
  });
  return answer;
}
