function solution(s, skip, index) {
  let answer = "";
  const reg = new RegExp(`[${skip}]`, "g");
  const arr = "abcdefghijklmnopqrstuvwxyz".replace(reg, "").split("");
  s.split("").map((item, idx) => {
    let newIdx = arr.indexOf(item) + index;
    while (newIdx > arr.length - 1) {
      newIdx -= arr.length;
    }
    answer += arr[newIdx];
  });
  return answer;
}

// 다른사람의 풀이 1 - replace 대신 filter를 이용한 풀이
// function solution(s, skip, index) {
//     const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
//                       "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
//                       "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
//     return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
// }

// 다른사람의 풀이 2 - while 대신 나머지를 이용한 풀이
// const solution = (s, skip, index) => {
//     let ans = '';
//     const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
//       new RegExp(`[^${skip}]`, 'g'),
//     );
//     for (const c of s) {
//       const newIdx = matched.indexOf(c) + index;
//       ans += matched[newIdx % matched.length];
//     }
//     return ans;
//   };
