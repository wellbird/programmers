function solution(n) {
  let half = 0;
  let string = "수박";
  let answer = "";
  if (n % 2 === 0) {
    half = n / 2;
    for (let k = 0; k < half; k++) {
      answer += string;
    }
  } else {
    half = (n - 1) / 2;
    for (let k = 0; k < half; k++) {
      answer += string;
    }
    answer += "수";
  }

  return answer;
}

// 다른사람의 풀이
// const waterMelon = n => {
//     return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }
