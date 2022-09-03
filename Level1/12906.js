function solution(arr) {
  const answer = arr.filter((item, idx) => arr[idx] !== arr[idx + 1]);
  return answer;
}
