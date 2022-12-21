function solution(numbers, direction) {
  if (direction === "right") {
    const num = numbers.pop();
    numbers.unshift(num);
  } else if (direction === "left") {
    const num = numbers.shift();
    numbers.push(num);
  }
  return numbers;
}

// 다른사람의 풀이 - 스프레드 문법 이용
// function solution(numbers, direction) {
//     return direction === "right"
//       ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
//       : [...numbers.slice(1), numbers[0]];
//   }
