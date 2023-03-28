function solution(s) {
  let answer = [];
  let sArr = s.replace(/[\{\}]/g, "").split(",");
  let sMap = new Map();
  sArr.map((item, index) => {
    if (sMap.has(item)) {
      sMap.set(item, sMap.get(item) + 1);
    } else {
      sMap.set(item, 1);
    }
  });
  sArr = [...sMap];
  sArr
    .sort((a, b) => b[1] - a[1])
    .map((item, index) => {
      answer.push(Number(item[0]));
    });
  return answer;
}

// 다른사람의 풀이 1 - JSON.parse 이용
// function solution(s) {
//     return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
//     .sort((a, b) => a.length - b.length)
//     .reduce((arr, v, n) => {
//         if (n) {
//             return arr.concat(v.filter(f => !arr.includes(f)));
//         }
//         return v;
//     }, []);
// }

// 다른사람의 풀이 2 - 다양한 메소드와 함수 활용
// const tupleFrom = (str) =>
//   str.slice(2, -2).split('},{')
//     .map((it) => toNumbers(it))
//     .sort(accendingByLength)
//     .reduce((acc, cur) =>
//       [...acc, ...cur.filter((it) => !acc.includes(it))], []);
// const toNumbers = (str) => str.split(',').map(it => Number(it));
// const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;
// const solution = (s) => tupleFrom(s);
