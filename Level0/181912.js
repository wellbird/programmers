function solution(intStrs, k, s, l) {
  let answer = [];
  intStrs.forEach((item, _) => {
    const token = Number(item.slice(s, s + l));
    if (token > k) {
      answer.push(token);
    }
  });
  return answer;
}
