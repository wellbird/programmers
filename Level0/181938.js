function solution(a, b) {
  let num1 = a * b * 2;
  let num2 = Number(String(a) + String(b));
  return num1 > num2 ? num1 : num2;
}
