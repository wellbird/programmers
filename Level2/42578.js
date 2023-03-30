function solution(clothes) {
  let answer = 1;
  let obj = {};
  clothes.map((item, index) => {
    obj[item[1]] = obj[item[1]] === undefined ? 2 : obj[item[1]] + 1;
  });
  for (let k in obj) {
    answer *= obj[k];
  }
  answer--;
  return answer;
}
