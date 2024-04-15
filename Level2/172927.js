function solution(picks, minerals) {
  let answer = 0;
  const objArr = [];
  const maxIdx =
    picks.reduce((acc, cur) => acc + cur, 0) * 5 < minerals.length
      ? picks.reduce((acc, cur) => acc + cur, 0) * 5
      : minerals.length;
  for (let k = 0; k < maxIdx; ) {
    const obj = { diamond: 0, iron: 0, stone: 0 };
    for (let i = 0; i < 5; i++) {
      obj[minerals[k]]++;
      k++;
      if (k > maxIdx - 1) break;
    }
    objArr.push(obj);
  }
  objArr.sort((a, b) => sortFunc(a, b));
  let idx = 0;
  for (let dia = 0; dia < picks[0]; dia++) {
    if (idx > objArr.length - 1) break;
    answer += objArr[idx].diamond * 1;
    answer += objArr[idx].iron * 1;
    answer += objArr[idx].stone * 1;
    idx++;
  }
  for (let iro = 0; iro < picks[1]; iro++) {
    if (idx > objArr.length - 1) break;
    answer += objArr[idx].diamond * 5;
    answer += objArr[idx].iron * 1;
    answer += objArr[idx].stone * 1;
    idx++;
  }
  for (let sto = 0; sto < picks[2]; sto++) {
    if (idx > objArr.length - 1) break;
    answer += objArr[idx].diamond * 25;
    answer += objArr[idx].iron * 5;
    answer += objArr[idx].stone * 1;
    idx++;
  }
  return answer;
}

function sortFunc(a, b) {
  if (a.diamond !== b.diamond) return b.diamond - a.diamond;
  else if (a.iron !== b.iron) return b.iron - a.iron;
  else return b.stone - a.stone;
}
