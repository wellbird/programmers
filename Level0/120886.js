function solution(before, after) {
  const beforeArr = before.split("");
  let afterArr = after.split("");
  beforeArr.map((item, index) => {
    const afterIdx = afterArr.indexOf(item);
    if (afterIdx === -1) {
      return 0;
    }
    afterArr[afterIdx] = "";
  });
  if (afterArr.join("") === "") {
    return 1;
  }
  return 0;
}

// 다른사람의 풀이 - 정렬 후 조합이 같은경우
// function solution(before, after) {
//     return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
// }
