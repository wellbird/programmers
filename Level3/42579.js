function solution(genres, plays) {
  let answer = [];
  let cnt = {};
  for (let k = 0; k < genres.length; k++) {
    cnt[genres[k]] = cnt[genres[k]] ? cnt[genres[k]] + plays[k] : plays[k];
  }
  let arr = Object.entries(cnt);
  arr.sort((a, b) => b[1] - a[1]);
  let obj = genres.map((item, idx) => ({
    genre: item,
    idx: idx,
    cnt: plays[idx],
  }));
  arr.forEach((item, idx) => {
    let cur = [];
    for (let k = 0; k < obj.length; k++) {
      if (item[0] === obj[k].genre) {
        cur.push(obj[k]);
      }
    }
    cur.sort((a, b) => b.cnt - a.cnt);
    cur.forEach((curItem, curIdx) => {
      if (curIdx < 2) {
        answer.push(curItem.idx);
      }
    });
  });
  return answer;
}

// 다른사람의 코드
// function solution(genres, plays) {
//     const count = {};
//     let answer = [];
//     const acc = genres.reduce((a, c, i) => {
//         debugger;
//         count[c] ? count[c].push([i, plays[i]]) : count[c] = [[i, plays[i]]];
//         return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
//     }, new Map());
//     [...acc].sort((a, b) => b[1] - a[1]).map(v => {
//             answer = answer.concat(count[v[0]].sort((c, d)=>d[1]-c[1]).slice(0,2));
//     });
//     return answer.map(v=>v[0]);
// }
