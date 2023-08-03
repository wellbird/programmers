function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  let map = new Map();
  dice.forEach((item, _) => {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  });
  switch (map.size) {
    case 1:
      return 1111 * +a;
    case 2:
      if (map.values().next().value === 2) {
        const keys = map.keys();
        const dice1 = +keys.next().value;
        const dice2 = +keys.next().value;
        return (dice1 + dice2) * Math.abs(dice1 - dice2);
      } else {
        let sum = 0;
        map.forEach((value, key) => {
          if (value === 3) {
            sum += +key * 10;
          } else {
            sum += +key;
          }
        });
        return sum ** 2;
      }
    case 3:
      let mul = 1;
      map.forEach((value, key) => {
        if (value === 1) {
          mul *= +key;
        }
      });
      return mul;
    case 4:
      let min = 6;
      map.forEach((value, key) => {
        if (+key < min) {
          min = +key;
        }
      });
      return min;
  }
  return 0;
}

// 다른사람의 풀이 1 - if문으로 단순작업
// function solution(a, b, c, d) {
//     if (a === b && a === c && a === d) return 1111 * a
//     if (a === b && a === c) return (10 * a + d) ** 2
//     if (a === b && a === d) return (10 * a + c) ** 2
//     if (a === c && a === d) return (10 * a + b) ** 2
//     if (b === c && b === d) return (10 * b + a) ** 2
//     if (a === b && c === d) return (a + c) * Math.abs(a - c)
//     if (a === c && b === d) return (a + b) * Math.abs(a - b)
//     if (a === d && b === c) return (a + b) * Math.abs(a - b)
//     if (a === b) return c * d
//     if (a === c) return b * d
//     if (a === d) return b * c
//     if (b === c) return a * d
//     if (b === d) return a * c
//     if (c === d) return a * b
//     return Math.min(a, b, c, d)
// }

// 다른사람의 풀이 2 - map을 정렬 후 분류
// function solution(a, b, c, d) {
//     const map = new Map();
//     for (const data of [a, b, c, d]) {
//       map.set(data, (map.get(data) || 0) + 1);
//     }
//     const sortedArr = [...map].sort((a, b) => {if (a[1] === b[1]) return b[0] - a[0]; else return b[1] - a[1]});
//     if (map.size === 1) return 1111 * sortedArr[0][0];
//     else if (map.size === 3) return sortedArr[1][0] * sortedArr[2][0];
//     else if (map.size === 4) return sortedArr[3][0];
//     else if (sortedArr[0][1] === 3) return (10 * sortedArr[0][0] + sortedArr[1][0]) ** 2;
//     else return (sortedArr[0][0] + sortedArr[1][0]) * (sortedArr[0][0] - sortedArr[1][0]);
//   }
