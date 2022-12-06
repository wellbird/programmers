function solution(s1, s2) {
  let answer = 0;
  s1.map((item, index) => {
    if (s2.includes(item)) {
      answer++;
    }
  });
  return answer;
}

// 다른사람의 풀이 - filter, includes 이용
// function solution(s1, s2) {
//     const intersection = s1.filter((x) => s2.includes(x));
//     return intersection.length;
// }
