function solution(arr) {
  let sum = 0;
  arr.map((item, index) => {
    sum += item;
  });
  const answer = sum / arr.length;
  return answer;
}

// reduce를 이용한 다른사람의 풀이
// function average(array){
//     return array.reduce((a, b) => a + b) / array.length;
//   }
