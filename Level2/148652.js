function solution(n, l, r) {
  let answer = 0;
  const lArr = [l - 1];
  const rArr = [r - 1];
  for (let k = 0; k < n; k++) {
    lArr.push(~~(lArr[k] / 5));
    rArr.push(~~(rArr[k] / 5));
  }
  let string = '1';
  for (let k = 0; k < n; k++) {
    let start = lArr.pop();
    const x = ~~(start / 5);
    start = start - 5 * x;
    const end = rArr.pop() - 5 * x;
    string = trans(string.slice(start, end + 1));
  }
  const slice = ~~(lArr[0] / 5);
  const [left, right] = [lArr.pop() - 5 * slice, rArr.pop() - 5 * slice];
  for (let k = left; k <= right; k++) {
    if (string[k] === '1') answer++;
  }
  return answer;
}

function trans(string) {
  let subString = '';
  for (let k = 0; k < string.length; k++) {
    if (string[k] === '0') subString += '00000';
    else if (string[k] === '1') subString += '11011';
  }
  return subString;
}

// 다른사람의 풀이 1 - 5진수 이용
// l-1부터 r-1까지 순회하면서 각 숫자를 5진수로 변환
// 숫자가 2를 포함하는 경우 => 11011의 0을 나타내는 경우
// function solution(n, l, r) {
//     let answer = 0;
//     for (let i = l - 1; i <=r - 1; i++) {
//         if (!i.toString(5).match('2')) answer += 1;
//     }
//     return answer;
// }

// 다른사람의 풀이 2 - dfs 이용(재귀)
// function solution(n, l, r) {
//     function dfs(num) {
//       if (num <= 5) {
//         let count = 0;
//         const arr = [1, 1, 0, 1, 1];
//         for (let i = 0; i < num; i++) {
//           if (arr[i] === 1) {
//             count++;
//           }
//         }
//         return count;
//       }
//       let base = 1;
//       while (Math.pow(5, base + 1) < num) {
//         base += 1;
//       }
//       const section = Math.floor(num / Math.pow(5, base));
//       const remain = num % Math.pow(5, base);
//       let answer = section * Math.pow(4, base);
//       if (section >= 3) {
//         answer -= Math.pow(4, base);
//       }
//       if (section === 2) {
//         return answer;
//       } else {
//         return answer + dfs(remain);
//       }
//     }

//     return dfs(r) - dfs(l - 1);
//   }
