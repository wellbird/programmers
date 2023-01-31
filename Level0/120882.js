function solution(score) {
  const answer = Array(score.length).fill(0);
  const avgArr = [];
  score.map((item, index) => {
    const avg = (item[0] + item[1]) / 2;
    avgArr.push([avg, index]);
  });
  avgArr.sort((a, b) => b[0] - a[0]);
  let rank = 1;
  let prvRank = 1;
  let prvScore = 0;
  for (let [score, index] of avgArr) {
    if (score === prvScore) {
      answer[index] = prvRank;
    } else {
      answer[index] = rank;
      prvRank = rank;
    }
    prvScore = score;
    rank++;
  }
  return answer;
}

// 다른사람의 풀이 1 - filter를 이용(현재 점수보다 높은점수 갯수 + 1 => 순위)(파이프라인 안에 파이프라인 넣기, 복잡도는 높을수도)
// function solution(score) {
//     return score.map((el) => {
//       return (
//         score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//       );
//     });
//   }

// 다른사람의 풀이 2 - indexOf를 이용한 등수메기기
// function solution(score) {
//     let avg = score.map(v=>(v[0]+v[1])/2);
//     let sorted = avg.slice().sort((a,b)=>b-a);
//     return avg.map(v=>sorted.indexOf(v)+1);
// }
