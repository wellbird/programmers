function solution(word) {
  let answer = 0;
  let numArr = [780, 155, 30, 5, 0];
  for (let k = 0; k < word.length; k++) {
    if (word[k] === "A") {
      answer += numArr[k] * 0 + 1;
    } else if (word[k] === "E") {
      answer += numArr[k] * 1 + 2;
    } else if (word[k] === "I") {
      answer += numArr[k] * 2 + 3;
    } else if (word[k] === "O") {
      answer += numArr[k] * 3 + 4;
    } else if (word[k] === "U") {
      answer += numArr[k] * 4 + 5;
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - 반복문으로 전체 사전을 만든 후 단어 찾기
// const VOWELS = ['A','E','I','O','U','']
// const f=(a)=>VOWELS.map(b=>b+a)
// function solution(word) {
//     return Array.from(
//         new Set(VOWELS
//             .map(f).flat()
//             .map(f).flat()
//             .map(f).flat()
//             .map(f).flat())
//         ).sort().indexOf(word)
// }

// 다른사람의 풀이 2 - 재귀(DFS)로 전체 사전을 만든 후 단어 찾기
// let res = {};
// let idx = 0;
// let arr = ["A", "E", "I", "O", "U"];
// const dfs = (now, cnt) => {
//     if(cnt>5)   return;
//     res[now] = idx++;
//     for(let i=0; i<5; i++){
//         let next = now + arr[i];
//         dfs(next, cnt+1);
//     }
// }
// function solution(word) {
//     var answer = 0;
//     dfs("", 0);
//     return res[word];
// }
