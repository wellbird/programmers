function solution(binomial) {
  let arr = binomial.split(" ");
  let answer = 0;
  switch (arr[1]) {
    case "+":
      answer = +arr[0] + +arr[2];
      break;
    case "-":
      answer = +arr[0] - +arr[2];
      break;
    case "*":
      answer = +arr[0] * +arr[2];
      break;
  }
  return answer;
}
