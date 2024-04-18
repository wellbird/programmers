function solution(plans) {
  let answer = [];
  const plansArr = plans
    .map((item) => {
      const arr = [];
      const startTime = +item[1].slice(0, 2) * 60 + +item[1].slice(3);
      const endTime = startTime + +item[2];
      return [item[0], startTime, endTime];
    })
    .sort((a, b) => a[1] - b[1]);
  const stack = [];
  while (plansArr.length > 0 || stack.length > 0) {
    if (plansArr.length === 0) {
      while (stack.length > 0) {
        const item = stack.pop();
        answer.push(item[0]);
      }
      continue;
    }
    if (plansArr.length === 1) {
      answer.push(plansArr[0][0]);
      plansArr.shift();
      continue;
    }
    if (plansArr[0][2] === plansArr[1][1]) {
      answer.push(plansArr[0][0]);
      plansArr.shift();
    } else if (plansArr[0][2] < plansArr[1][1]) {
      answer.push(plansArr[0][0]);
      if (stack.length > 0) {
        let curTime = plansArr[0][2];
        while (stack.length > 0 && curTime < plansArr[1][1]) {
          if (curTime + stack[stack.length - 1][1] <= plansArr[1][1]) {
            const curTask = stack.pop();
            curTime += curTask[1];
            answer.push(curTask[0]);
          } else {
            stack[stack.length - 1][1] -= plansArr[1][1] - curTime;
            break;
          }
        }
      }
      plansArr.shift();
    } else {
      stack.push([plansArr[0][0], plansArr[0][2] - plansArr[1][1]]);
      plansArr.shift();
    }
  }
  return answer;
}
