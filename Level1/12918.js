function solution(s) {
  const len_condition = s.length === 4 || s.length === 6;
  const num_condition = !s.includes("e") && !isNaN(s);
  return len_condition && num_condition;
}
// 중요!! isNaN함수 또는 Number함수는 숫자 사이에 끼인 문자e를 지수로 판단하여 숫자로 인식한다 ex)10e1

// 다른사람의 풀이 - 정규표현식 이용
// function alpha_string46(s){
//     var regex = /^\d{6}$|^\d{4}$/;
//     return regex.test(s);
//   }
