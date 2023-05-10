function solution(n) {
  let answer = [];
  let item = 0;
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let row = -1;
  let col = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      row++;
      item++;
      arr[row][col] = item;
    }
    for (let i = 0; i < n - 1; i++) {
      col++;
      item++;
      arr[row][col] = item;
    }
    for (let i = 0; i < n - 2; i++) {
      row--;
      col--;
      item++;
      arr[row][col] = item;
    }
    n -= 3;
  }
  for (let k of arr) {
    answer.push(...k);
  }
  return answer;
}

// 다른사람의 코드 - 첫줄을 빼고 반복문을 돌리고 flat() 사용
// function solution(n) {
//     let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
//     let row = -1
//     let col = 0
//     let fill = 0
//     for (let i = n; i > 0; i -= 3) {
//       a[++row][col] = ++fill
//       for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
//       for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
//       for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
//     }
//     return a.flat()
//   }
