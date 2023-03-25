function solution(k, tangerine) {
  let answer = 0;
  let type = new Set(tangerine);
  let cntObj = {};
  for (let l of type) {
    cntObj[l] = 0;
  }
  tangerine.map((item, index) => {
    cntObj[item]++;
  });
  let cntArr = Object.values(cntObj).sort((a, b) => b - a);
  for (let l of cntArr) {
    answer++;
    k -= Number(l);
    if (k <= 0) {
      break;
    }
  }
  return answer;
}
