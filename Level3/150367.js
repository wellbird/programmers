function solution(numbers) {
  const answer = [];
  numbers.forEach((num) => {
    let binary = num.toString(2);
    const binaryLen = 2 ** (Math.floor(Math.log2(binary.length)) + 1) - 1;
    if (binaryLen !== binary.length) {
      const repeatNum = binaryLen - binary.length;
      binary = '0'.repeat(repeatNum) + binary;
    }
    if (checkAvail(binary)) answer.push(1);
    else answer.push(0);
  });
  return answer;
}
function checkAvail(str) {
  const stack = [[Math.floor(str.length / 2), (str.length + 1) / 4]];
  while (stack.length) {
    const [idx, token] = stack.pop();
    const leftIdx = idx - token;
    const rightIdx = idx + token;
    if (str[idx] === '0' && (str[leftIdx] === '1' || str[rightIdx] === '1'))
      return false;
    if (token > 1) {
      stack.push([leftIdx, token / 2]);
      stack.push([rightIdx, token / 2]);
    }
  }
  return true;
}
