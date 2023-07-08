function solution(strArr) {
  let answer = 0;
  let map = new Map();
  strArr.forEach((item, _) => {
    const key = item.length;
    map.has(key) ? map.set(key, [...map.get(key), item]) : map.set(key, [item]);
  });
  for (let value of map.values()) {
    if (value.length > answer) {
      answer = value.length;
    }
  }
  return answer;
}

// 다른사람의 풀이 - 값 대신 갯수만 map에 저장
// function solution(strArr) {
//     const counter = new Map();
//     for (const str of strArr) {
//       counter.set(str.length, (counter.get(str.length) || 0) + 1);
//     }
//     return Math.max(...counter.values());
//   }
