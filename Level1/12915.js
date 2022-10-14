function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 1 - localeCompare 이용
// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }

// 다른사람의 풀이 2 - true = 1, false = 0를 통해 bool 비교를 이용
// function solution(strings, n) {
//     return strings.sort((a, b) => {
//         const chr1 = a.charAt(n);
//         const chr2 = b.charAt(n);

//         if (chr1 == chr2) {
//             return (a > b) - (a < b);
//         } else {
//             return (chr1 > chr2) - (chr1 < chr2);
//         }
//     })
// }
