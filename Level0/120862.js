function solution(numbers) {
  const sortArr = numbers.sort((a, b) => a - b);
  const firstCase = sortArr[0] * sortArr[1];
  const secondCase = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2];
  return firstCase >= secondCase ? firstCase : secondCase;
}
