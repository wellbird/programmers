function solution(array, height) {
  const answer = array.reduce((cnt, item) => {
    if (item > height) {
      cnt++;
    }
    return cnt;
  }, 0);
  return answer;
}

// 다른사람의 풀이 - filter 이용
// function solution(array, height) {
//     var answer = array.filter(item => item > height);
//     return answer.length;
// }
