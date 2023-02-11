function solution(lottos, win_nums) {
  let answer = [];
  let cnt = 0;
  let zero = 0;
  lottos.map((item, idx) => {
    if (item === 0) {
      zero++;
    } else {
      if (win_nums.includes(item)) {
        cnt++;
      }
    }
  });
  const best = cnt + zero;
  const worst = cnt;
  if (best === 6) {
    answer.push(1);
  } else if (best === 5) {
    answer.push(2);
  } else if (best === 4) {
    answer.push(3);
  } else if (best === 3) {
    answer.push(4);
  } else if (best === 2) {
    answer.push(5);
  } else {
    answer.push(6);
  }
  if (worst === 6) {
    answer.push(1);
  } else if (worst === 5) {
    answer.push(2);
  } else if (worst === 4) {
    answer.push(3);
  } else if (worst === 3) {
    answer.push(4);
  } else if (worst === 2) {
    answer.push(5);
  } else {
    answer.push(6);
  }
  return answer;
}

// 다른사람의 풀이 - rank 배열을 이용한 풀이
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];
//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;
//     const maxCount = minCount + zeroCount;
//     return [rank[maxCount], rank[minCount]];
// }
