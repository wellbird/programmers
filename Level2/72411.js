function Combination(arr, num) {
  const result = [];
  if (num === 1) {
    return arr.slice();
  }
  arr.forEach((item, idx, array) => {
    const remain = array.slice(idx + 1);
    const combination = Combination(remain, num - 1);
    const combine = combination.map((value, _) =>
      [item, ...value].sort().join("")
    );
    result.push(...combine);
  });
  return result;
}

function solution(orders, course) {
  const answer = [];
  for (let k = 0; k < course.length; k++) {
    const obj = {};
    let max = 0;
    orders.forEach((item, idx) => {
      Combination(item.split(""), course[k]).forEach((value, _) => {
        if (!obj[value]) {
          obj[value] = 1;
        } else {
          obj[value]++;
        }
      });
      for (const l in obj) {
        if (obj[l] > max) max = obj[l];
      }
    });
    for (const l in obj) {
      if (obj[l] === max && max > 1) {
        answer.push(l);
      }
    }
  }
  return answer.sort();
}
