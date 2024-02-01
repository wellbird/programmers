function solution(expression) {
  const cases = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];
  let max = -Infinity;
  const numbers = expression.replaceAll(/[^0-9]/g, ' ').split(' ');
  const operators = expression.replaceAll(/[0-9]/g, '').split('');
  cases.map((item) => {
    const copyNumbers = numbers.slice();
    const copyOperators = operators.slice();
    for (let op of item) {
      while (copyOperators.indexOf(op) !== -1) {
        const index = copyOperators.indexOf(op);
        if (op === '*') {
          copyNumbers[index + 1] =
            +copyNumbers[index] * +copyNumbers[index + 1];
          copyNumbers.splice(index, 1);
          copyOperators.splice(index, 1);
        } else if (op === '+') {
          copyNumbers[index + 1] =
            +copyNumbers[index] + +copyNumbers[index + 1];
          copyNumbers.splice(index, 1);
          copyOperators.splice(index, 1);
        } else if (op === '-') {
          copyNumbers[index + 1] =
            +copyNumbers[index] - +copyNumbers[index + 1];
          copyNumbers.splice(index, 1);
          copyOperators.splice(index, 1);
        }
      }
    }
    if (Math.abs(+copyNumbers[0]) > max) {
      max = Math.abs(+copyNumbers[0]);
    }
  });
  return max;
}
