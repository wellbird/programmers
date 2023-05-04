function solution(topping) {
  let answer = 0;
  let older = new Map();
  let younger = new Map();
  topping.map((item, _) => {
    older.set(item, (older.get(item) || 0) + 1);
  });

  for (let k = 0; k < topping.length; k++) {
    const give = topping[k];
    older.set(give, older.get(give) - 1);
    younger.set(give, true);
    if (older.get(give) === 0) {
      older.delete(give);
    }
    if (older.size === younger.size) {
      answer++;
    }
    if (older.size < younger.size) {
      break;
    }
  }
  return answer;
}

// 다른사람의 풀이 - 객체와 set을 이용한 풀이
// function solution(topping) {
//     const a = new Set()
//     const b = {}
//     let answer = 0;
//     let check = 0
//     for (let i = 0; i < topping.length; i++) {
//         if (b[topping[i]]) {
//             b[topping[i]]++
//         } else {
//             b[topping[i]] = 1
//             check++
//         }
//     }
//     for (let i = 0; i < topping.length; i++) {
//         a.add(topping[i])
//         b[topping[i]]--
//         if (!b[topping[i]]) check--
//         if (a.size === check) answer++
//     }
//     return answer;
// }
