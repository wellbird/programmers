function solution(keymap, targets) {
  let answer = [];
  targets.map((targetItem, targetIndex) => {
    let isAvail = true;
    let cnt = 0;
    for (let k of targetItem) {
      let min = 101;
      keymap.map((keyItem, keyIndex) => {
        if (keyItem.indexOf(k) !== -1) {
          if (keyItem.indexOf(k) + 1 < min) {
            min = keyItem.indexOf(k) + 1;
          }
        }
      });
      if (min === 101) {
        isAvail = false;
        break;
      } else {
        cnt += min;
      }
    }
    if (!isAvail) {
      answer.push(-1);
    } else {
      answer.push(cnt);
    }
  });
  return answer;
}

// 다른사람의 풀이 - reduce를 이용한 풀이
// function solution(keymap, targets) {
//     const answer = [];
//     const map = {}
//     for (const items of keymap) {
//         items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
//     }
//     for (const items of targets) {
//         answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
//     }
//     return answer;
// }
