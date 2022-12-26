function solution(my_string, num1, num2) {
  let strArr = my_string.split("");
  const firstWord = strArr[num1];
  const secondWord = strArr[num2];
  strArr[num1] = secondWord;
  strArr[num2] = firstWord;
  return strArr.join("");
}

// 다른사람의 풀이 - 구조분해할당의 이해
// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }
