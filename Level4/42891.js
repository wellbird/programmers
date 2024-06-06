function solution(food_times, k) {
  let answer = 0;
  let foodCnt = food_times.length;
  let curTurn = 0;
  let curIdx = 0;
  const sortFood = food_times
    .map((item, idx) => [item, idx])
    .sort((a, b) => a[0] - b[0]);
  while (k >= foodCnt && foodCnt > 0) {
    if (foodCnt * (sortFood[curIdx][0] - curTurn) <= k) {
      k -= foodCnt * (sortFood[curIdx][0] - curTurn);
      curTurn = sortFood[curIdx][0];
      food_times[sortFood[curIdx][1]] = 0;
      foodCnt--;
      if (
        curIdx < food_times.length - 1 &&
        sortFood[curIdx + 1][0] === sortFood[curIdx][0]
      ) {
        while (
          curIdx < food_times.length - 1 &&
          sortFood[curIdx + 1][0] === sortFood[curIdx][0]
        ) {
          food_times[sortFood[curIdx + 1][1]] = 0;
          foodCnt--;
          curIdx++;
        }
        curIdx++;
      } else {
        curIdx++;
      }
    } else {
      k %= foodCnt;
    }
  }
  if (!foodCnt) return -1;
  if (k === 0) {
    while (!food_times[answer]) {
      answer++;
    }
    answer++;
  } else {
    while (k >= 0) {
      if (food_times[answer]) k--;
      answer++;
    }
  }
  return answer ? answer : answer + 1;
}
