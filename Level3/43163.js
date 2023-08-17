function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }
  let answer = Infinity;
  function dfs(cur, wordsArr, cnt) {
    if (cur === target) {
      if (answer > cnt) {
        answer = cnt;
      }
    } else {
      wordsArr.forEach((item, idx) => {
        let diff = 0;
        for (let k = 0; k < item.length; k++) {
          if (item[k] !== cur[k]) {
            diff++;
          }
        }
        if (diff === 1) {
          let newWordsArr = wordsArr.slice();
          newWordsArr.splice(idx, 1);
          dfs(item, newWordsArr, cnt + 1);
        }
      });
    }
    return;
  }
  dfs(begin, words, 0);
  return answer === Infinity ? 0 : answer;
}

// 다른사람의 풀이 - bfs를 이용한 풀이
// function solution(begin, target, words) {
//     const queue = [begin];
//     const visitArr = new Array(words.length).fill(false);
//     let ctr = 0;
//     let shiftedWord = begin;
//     let queueLeng = 1;
//     while(queue.length > 0) {
//         shiftedWord = queue.shift();
//         queueLeng--;
//         for(let i in words) {
//             if(check(shiftedWord, words[i])) {
//                 if(visitArr[i] == true)
//                     continue;
//                 if(words[i] == target)
//                     return ctr+1;
//                 visitArr[i] = true;
//                 queue.push(words[i]);
//             }
//         }
//         if(queueLeng == 0) {
//             ctr++;
//             queueLeng = queue.length;
//         }
//     }
//     return 0;
//     function check(standard, word) {
//         let diffCtr = 0;
//         if(standard.length != word.length)
//             return false;
//         for(let i=0; i<standard.length; i++) {
//             if(standard.charAt(i) != word.charAt(i))
//                 diffCtr++;
//             if(diffCtr > 1)
//                 return false;
//         }
//         return true;
//     }
// }
