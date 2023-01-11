function solution(emergency) {
  const answer = Array(emergency.length).fill(0);
  const subArr = emergency.slice().sort((a, b) => b - a);
  subArr.map((item, index) => {
    answer[emergency.indexOf(item)] = index + 1;
  });
  return answer;
}

// 다른사람의 풀이 - answer 배열을 따로 생성하지 않기
// function solution(emergency) {
//     let sorted = emergency.slice().sort((a,b)=>b-a);
//     return emergency.map(v=>sorted.indexOf(v)+1);
// }
