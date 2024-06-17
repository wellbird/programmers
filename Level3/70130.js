function solution(a) {
  let answer = 0;
  const obj = {};
  const arr = [];
  a.forEach((item) => {
    if (obj[item] === undefined) obj[item] = 1;
    else obj[item]++;
  });
  for (let key in obj) {
    arr.push([+key, obj[key]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  let curIdx = 0;
  while (curIdx < arr.length && arr[curIdx][1] > answer) {
    answer = Math.max(answer, findStarSeq(a, arr[curIdx][0]));
    curIdx++;
  }
  return answer * 2;
}

function findStarSeq(a, n) {
  let cnt = 0;
  for (let i = 0; i < a.length - 1; i++) {
    const curItem = a[i];
    if (a[i] === n) {
      while (i < a.length - 1 && a[i] === n) {
        i++;
      }
      if (a[i] !== n) cnt++;
    } else {
      while (i < a.length - 1 && a[i] !== n) {
        i++;
      }
      if (a[i] === n) cnt++;
    }
  }
  return cnt;
}
