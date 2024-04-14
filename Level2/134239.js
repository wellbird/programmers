function solution(k, ranges) {
  let answer = [];
  const progress = [k];
  while (k !== 1) {
    if (k % 2 === 0) k = k / 2;
    else k = k * 3 + 1;
    progress.push(k);
  }
  ranges.forEach((item) => {
    let left = item[0];
    let right = progress.length + item[1] - 1;
    if (left > right) answer.push(-1);
    else if (left === right) answer.push(0);
    else {
      answer.push(getArea(progress.slice(left, right + 1)));
    }
  });
  return answer;
}

function getArea(arr) {
  let sum = 0;
  arr.forEach((item, idx) => {
    if (idx === 0 || idx === arr.length - 1) {
      sum += item;
    } else {
      sum += item * 2;
    }
  });
  return sum / 2;
}
