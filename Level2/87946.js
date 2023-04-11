function solution(k, dungeons) {
  let answer = [];
  let pmtArr = [];
  function permutation(cngArr, fixArr = []) {
    if (cngArr.length === 1) {
      pmtArr.push(fixArr.concat(cngArr));
    } else {
      for (let k = 0; k < cngArr.length; k++) {
        let newCngArr = [];
        for (let l = 0; l < cngArr.length; l++) {
          if (l === k) {
            continue;
          } else {
            newCngArr.push(cngArr[l]);
          }
        }
        let newFixArr = [...fixArr, cngArr[k]];
        permutation(newCngArr, newFixArr);
      }
    }
  }
  permutation(dungeons);
  pmtArr.map((dungeon, _) => {
    let subK = k;
    let cnt = 0;
    dungeon.map((item, _) => {
      if (item[0] <= subK) {
        cnt++;
        subK -= item[1];
      }
    });
    answer.push(cnt);
  });
  return Math.max(...answer);
}

// 다른사람의 풀이 1 - dfs 이용
// function solution(k, d) {
//     const N = d.length
//     const visited = new Array(N).fill(0)
//     let ans = 0
//     function dfs(k, cnt){
//         ans = Math.max(cnt, ans)
//         for (let j = 0; j < N; j++){
//             if (k >= d[j][0] && !visited[j]){
//                 visited[j] = 1
//                 dfs(k - d[j][1], cnt + 1)
//                 visited[j] = 0
//             }
//         }
//     }
//     dfs(k, 0)
//     return ans;
// }

// 다른사람의 풀이 2 - 재귀를 이용한 풀이 1
// let solution = (k, d) => Math.max(...d.map(([m, v], i) => k < m ? 0 : solution(k - v, [...d.slice(0, i), ...d.slice(i + 1)]) + 1), 0)

// 다른사람의 풀이 3 - 재귀를 이용한 풀이 2
// function solution(k, dungeons) {
//     const filtered = dungeons.slice().filter(v => v[0] <= k);
//     let answer = 0;
//     for (let i = 0; i < filtered.length; i++) {
//         const subAnswer = solution(k - filtered[i][1],filtered.filter((_, j) => i !== j));
//         if (subAnswer + 1 > answer) answer = subAnswer + 1;
//     }
//     return answer;
// }

// 다른사람의 풀이 4 - 재귀를 이용한 풀이 3
// function solution(k, dungeons) {
//     if (dungeons.length <= 0) return 0;
//     let maxDungeons = 0;
//     for (let i = 0; i < dungeons.length; i++) {
//         if (k >= dungeons[i][0]) {
//             let n = solution(
//                 k - dungeons[i][1],
//                 dungeons.slice(0, i).concat(dungeons.slice(i + 1))
//             );
//             if (n + 1 > maxDungeons) {
//                 maxDungeons = n + 1;
//             }
//             if (maxDungeons >= dungeons.length) return maxDungeons;
//         }
//     }
//     return maxDungeons;
// }
