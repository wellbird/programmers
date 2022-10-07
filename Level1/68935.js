function solution(n) {
  const num = n.toString(3).split("").reverse().join("");
  const answer = parseInt(num, 3);
  return answer;
}
