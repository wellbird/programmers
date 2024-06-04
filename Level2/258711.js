function solution(edges) {
  const answer = Array(4).fill(0);
  const obj = {};
  edges.forEach(([start, end]) => {
    obj[start] ? obj[start][0]++ : (obj[start] = [1, 0]);
    obj[end] ? obj[end][1]++ : (obj[end] = [0, 1]);
  });
  for (let k of Object.keys(obj)) {
    if (obj[k][0] > 1 && obj[k][1] === 0) {
      answer[0] = +k;
    } else if (obj[k][0] === 0) {
      answer[2]++;
    } else if (obj[k][0] >= 2 && obj[k][1] >= 2) {
      answer[3]++;
    }
  }
  answer[1] = obj[answer[0]][0] - (answer[2] + answer[3]);
  return answer;
}
