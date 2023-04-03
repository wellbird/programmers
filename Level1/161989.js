function solution(n, m, section) {
  let answer = 0;
  for (let k = 0; k < section.length; k++) {
    let cover = m + section[k] - 1;
    while (section[k + 1] <= cover) {
      k++;
    }
    answer++;
  }
  return answer;
}
