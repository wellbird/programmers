function solution(array) {
  let obj = {};
  array.map((item, index) => {
    if (Object.keys(obj).includes(String(item))) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });
  const valArr = Object.values(obj);
  const maxVal = Math.max(...valArr);
  if (valArr.indexOf(maxVal) === valArr.lastIndexOf(maxVal)) {
    return Number(Object.keys(obj).find((key) => obj[key] === maxVal));
  } else {
    return -1;
  }
}

// 다른사람의 풀이 - Map을 이용하여 빈도수 체크
function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
