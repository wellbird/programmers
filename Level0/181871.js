function solution(myString, pat) {
  let answer = 0;
  const tokenLength = pat.length;
  for (let k = 0; k < myString.length - tokenLength + 1; k++) {
    if (pat === myString.slice(k, k + tokenLength)) {
      answer++;
    }
  }
  return answer;
}
