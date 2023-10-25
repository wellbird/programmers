function solution(weights) {
  let answer = 0;
  const obj = {};
  const ratio = [1, 2 / 3, 2 / 4, 3 / 4];
  weights.sort((a, b) => a - b);
  weights.forEach((wItem, _) => {
    ratio.forEach((rItem, _) => {
      if (obj[wItem * rItem]) {
        answer += obj[wItem * rItem];
      }
    });
    obj[wItem] = obj[wItem] ? obj[wItem] + 1 : 1;
  });
  return answer;
}
