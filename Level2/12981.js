function solution(n, words) {
  let cnt = 0;
  let usedWords = [words[0]];
  for (let k = 1; k < words.length; k++) {
    if (words[k][0] !== words[k - 1][words[k - 1].length - 1]) {
      cnt = k;
      break;
    }
    if (usedWords.includes(words[k])) {
      cnt = k;
      break;
    }
    usedWords.push(words[k]);
  }
  if (cnt === 0) {
    return [0, 0];
  } else {
    cnt += 1;
    let round = cnt % n === 0 ? ~~(cnt / n) : ~~(cnt / n) + 1;
    let turn = cnt % n === 0 ? n : cnt % n;
    return [turn, round];
  }
}

// 다른사람의 풀이 - reduce와 slice를 이용한 풀이
// function solution(n, words) {
//     let answer = 0;
//     words.reduce((prev, now, idx) => {
//         answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
//         return now[now.length-1];
//     }, "")
//     return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
// }
