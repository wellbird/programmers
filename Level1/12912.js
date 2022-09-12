function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let k = a; k <= b; k++) {
      answer += k;
    }
  } else {
    for (let k = b; k <= a; k++) {
      answer += k;
    }
  }
  return answer;
}

// 다른사람의 풀이 1
// function adder(a, b){
//     return (a+b)*(Math.abs(b-a)+1)/2;
// }

// 다른사람의 풀이 2
// function adder(a, b, s = 0){
//     for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//     return s;
// }
