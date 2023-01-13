function solution(my_string) {
  var answer = 0;
  my_string.split(/[a-zA-Z]/g).map((item, index) => {
    if (!isNaN(Number(item))) {
      answer += Number(item);
    }
  });
  return answer;
}
// 정규표현식 사용시 /[A-z]/g 또눈 /[a-z]/gi 또는 /\D+/(숫자를 제외한 문자를 최소 한번 이상 반복) 등등을 사용할 수 있음

// 다른사람의 풀이 - reduce 이용
// function solution(my_string) {
//     return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }
