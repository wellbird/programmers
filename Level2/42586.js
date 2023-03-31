function solution(progresses, speeds) {
  let answer = [];
  let dayData = -1;
  let cnt = 0;
  progresses.map((item, index) => {
    let days =
      (100 - item) % speeds[index] === 0
        ? ~~((100 - item) / speeds[index])
        : ~~((100 - item) / speeds[index]) + 1;
    if (dayData === -1) {
      dayData = days;
    } else {
      if (dayData >= days) {
        cnt++;
      } else {
        answer.push(cnt + 1);
        cnt = 0;
        dayData = days;
      }
    }
  });
  answer.push(cnt + 1);
  return answer;
}
