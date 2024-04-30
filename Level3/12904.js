function solution(s) {
  let answer = 1;
  for (let k = 0; k < s.length; k++) {
    let length = 1;
    let oddLeft = k;
    let oddRight = k;
    while (
      s[oddLeft - 1] &&
      s[oddRight + 1] &&
      s[oddLeft - 1] === s[oddRight + 1]
    ) {
      length += 2;
      oddLeft -= 1;
      oddRight += 1;
    }
    if (s[k] === s[k + 1]) {
      let evenLen = 2;
      let evenLeft = k;
      let evenRight = k + 1;
      while (
        s[evenLeft - 1] &&
        s[evenRight + 1] &&
        s[evenLeft - 1] === s[evenRight + 1]
      ) {
        evenLen += 2;
        evenLeft -= 1;
        evenRight += 1;
      }
      length = Math.max(length, evenLen);
    }
    answer = Math.max(answer, length);
  }
  return answer;
}
