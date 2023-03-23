function solution(citations) {
  const len = citations.length;
  citations.sort((a, b) => a - b);
  for (let k = 0; k < len - 1; k++) {
    if (citations[k] >= len - k) {
      return len - k;
    }
  }
  return 0;
}
