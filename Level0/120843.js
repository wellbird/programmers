function solution(numbers, k) {
  const idx = ((k - 1) * 2) % numbers.length;
  const answer = numbers[idx];
  return answer;
}
