function solution(sequence, k) {
  const len = sequence.length;
  let startIdx = 0;
  let endIdx = 0;
  let resultLen = Infinity;
  let sum = sequence[0];
  if (sum === k) {
    return [0, 0];
  }
  let answer = [];
  while (startIdx < len && endIdx < len && startIdx <= endIdx) {
    if (sum === k) {
      if (resultLen > endIdx - startIdx + 1) {
        let result = [];
        result.push(startIdx);
        result.push(endIdx);
        answer = result;
        resultLen = endIdx - startIdx + 1;
      }
      endIdx += 1;
      sum += sequence[endIdx];
    } else if (sum < k) {
      endIdx += 1;
      sum += sequence[endIdx];
    } else if (sum > k) {
      sum -= sequence[startIdx];
      startIdx += 1;
    }
  }
  return answer;
}
