function solution(str1, str2) {
  let answer = "";
  for (let k = 0; k < str1.length; k++) {
    answer += str1[k];
    answer += str2[k];
  }
  return answer;
}
