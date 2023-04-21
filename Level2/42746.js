function solution(numbers) {
  let answer = "";
  if (numbers.length === numbers.filter((a) => a === 0).length) {
    return "0";
  }
  numbers.sort(option);
  numbers.map((item, _) => {
    answer += item;
  });
  return answer;
}
function option(a, b) {
  const strA = String(a);
  const strB = String(b);
  if (strA + strB > strB + strA) {
    return -1;
  } else if (strA + strB < strB + strA) {
    return 1;
  } else {
    return 0;
  }
}

// 다른사람의 풀이 - 같은 방식 짧은 풀이
// function solution(numbers) {
//     let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
//     return answer[0] === '0' ? '0' : answer;
// }
