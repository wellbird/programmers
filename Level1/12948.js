function solution(phone_number) {
  const length = phone_number.length;
  const answer =
    "*".repeat(length - 4) +
    phone_number[length - 4] +
    phone_number[length - 3] +
    phone_number[length - 2] +
    phone_number[length - 1];
  return answer;
}

// 다른사람의 풀이 1 - 정규식 이용
// function hide_numbers(s) {
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }

// 다른사람의 풀이 2 - 내 방법 + slice
// function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     return result;
//   }

// 다른사람의 풀이 3 - 한줄풀이
// const solution = n => [...n].fill("*",0,n.length-4).join("")
