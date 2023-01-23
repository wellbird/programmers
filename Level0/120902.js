function solution(my_string) {
  const strArr = my_string.split(" ");
  let answer = Number(strArr[0]);
  for (let k = 1; k < strArr.length; k += 2) {
    if (strArr[k] === "+") {
      answer += Number(strArr[k + 1]);
    } else if (strArr[k] === "-") {
      answer -= Number(strArr[k + 1]);
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - 간단한 풀이 eval이용 1
// var solution=eval

// 다른사람의 풀이 2 - 간단한 풀이 eval이용 2
// function solution(my_string) {
//     return eval(my_string);
// }

// 경고: 주의: 문자열로부터 **eval()**을 실행하는 것은 엄청나게 위험합니다. **eval()**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 아래에 eval을 절대 사용하지 말 것!을 확인하세요. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

// 다른사람의 풀이 3 - shift 이용
// function solution(my_string) {
//     const arr = my_string.split(' ').filter(e=>e);
//     while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
//     return arr[0]
// }
