function solution(spell, dic) {
  const check = (str) => {
    for (let k in spell) {
      if (!str.includes(spell[k])) {
        return false;
      } else {
        if (!(str.indexOf(spell[k]) === str.lastIndexOf(spell[k]))) {
          return false;
        }
      }
    }
    return true;
  };
  for (let k in dic) {
    if (check(dic[k]) === true) {
      return 1;
    }
  }
  return 2;
}

// 다른사람의 풀이 1 - every 이용(But. spell에 담긴 알파벳을 모두 한번씩만 사용한다는 조건을 만족하지 못하는 풀이)
// function solution(spell, dic) {
//     return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
// }

// 다른사람의 풀이 2 - some 이용
// function solution(p, d) {
//     return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }
