function solution(info, query) {
  const answer = [];
  const lan = ['cpp', 'java', 'python', '-'];
  const type = ['backend', 'frontend', '-'];
  const career = ['junior', 'senior', '-'];
  const food = ['chicken', 'pizza', '-'];
  const obj = {};
  lan.forEach((lanItem) => {
    type.forEach((typeItem) => {
      career.forEach((careerItem) => {
        food.forEach((foodItem) => {
          obj[`${lanItem}${typeItem}${careerItem}${foodItem}`] = [];
        });
      });
    });
  });
  info.forEach((item) => {
    const itemArr = item.split(' ');
    const infoLan = itemArr[0] === '-' ? [itemArr[0]] : [itemArr[0], '-'];
    const infoType = itemArr[1] === '-' ? [itemArr[1]] : [itemArr[1], '-'];
    const infoCareer = itemArr[2] === '-' ? [itemArr[2]] : [itemArr[2], '-'];
    const infoFood = itemArr[3] === '-' ? [itemArr[3]] : [itemArr[3], '-'];
    const infoScore = +itemArr[4];
    infoLan.forEach((lanItem) => {
      infoType.forEach((typeItem) => {
        infoCareer.forEach((careerItem) => {
          infoFood.forEach((foodItem) => {
            obj[`${lanItem}${typeItem}${careerItem}${foodItem}`].push(
              infoScore
            );
          });
        });
      });
    });
  });
  for (const key in obj) {
    obj[key].sort((a, b) => a - b);
  }
  query.forEach((item) => {
    const [
      queryLan,
      _,
      queryType,
      __,
      queryCareer,
      ___,
      queryFood,
      queryScore,
    ] = item.split(' ');
    const scoreArr = obj[`${queryLan}${queryType}${queryCareer}${queryFood}`];
    answer.push(binarySearch(scoreArr, +queryScore));
  });
  return answer;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      result = arr.length - mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// 다른사람의 풀이 - 비트마스킹(https://github.com/yuneg11/Programmers-Solutions/tree/master/solutions/72412%20-%20%EC%88%9C%EC%9C%84%20%EA%B2%80%EC%83%89)
// function bisect_gt(a, x) {
//     let lo = 0, hi = a.length;
//     while (lo < hi) {
//         let mid = Math.floor((lo + hi) / 2);
//         if (a[mid] < x) lo = mid + 1;
//         else hi = mid;
//     }
//     return a.length - lo;
// }
// function solution(info, query) {
//     const table = {"c": 3, "j": 5, "p": 6, "b": 6, "f": 5, "s": 6, "-": 0};
//     const conv = (l, t) => [l.slice(0, -1).reduce((a, k) => (a << 3) + t(table[k[0]]), 0), Number(l[l.length - 1])];
//     info = info.map(s => conv(s.split(" "), x => 7 - x));
//     query = query.map(s => conv(s.split(" ").filter(c => c != "and"), x => x));
//     const map = new Map();
//     for (const [k, v] of info) {
//         if (!map.has(k)) map.set(k, []);
//         map.get(k).push(v);
//     }
//     const dict = Array.from(map.entries()).map(([k, l]) => [k, l.sort((a, b) => a - b)])
//     return query.map(([q, v]) => dict.reduce((a, [k, l]) => a + (k & q ? 0 : bisect_gt(l, v)), 0));
// }
