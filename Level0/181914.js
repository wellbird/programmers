function solution(number) {
  let sum = 0;
  for (let k of number) {
    sum += Number(k);
  }
  return sum % 9;
}
