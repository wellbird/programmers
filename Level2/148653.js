function solution(storey) {
  let answer = 0;
  let arr = String(storey)
    .split("")
    .map((item, _) => Number(item));
  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] > 5) {
      answer += 10 - arr[k];
      if (k === 0) {
        answer++;
      }
      arr[k - 1]++;
    } else if (arr[k] === 5 && k > 0 && arr[k - 1] >= 5) {
      answer += 5;
      arr[k - 1]++;
    } else {
      answer += arr[k];
    }
  }
  return answer;
}

// 다른사람의 풀이 1 - 재귀를 이용한 풀이
// function solution(storey) {
//     if (storey < 5) return storey;
//     const r = storey % 10;
//     const m = (storey - r) / 10;
//     return Math.min(r + solution(m), 10 - r + solution(m + 1));
// }

// 다른사람의 풀이 2 - dfs를 이용한 풀이
// function solution(storey) {
//     let answer = Number.MAX_SAFE_INTEGER;
//     const dfs = (num, counter) => {
//         if (counter >= answer) return;
//         if (num === 0) {
//             answer = counter;
//             return;
//         }
//         let res = num % 10;
//         dfs((num - res) / 10, counter + res);
//         dfs((num - res) / 10 + 1, counter + 10 - res);
//     }
//     dfs(storey, 0);
//     return answer;
// }
