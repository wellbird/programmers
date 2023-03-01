function solution(ingredient) {
  let answer = 0;
  let stack = [];
  ingredient.map((item, index) => {
    if (item !== 1) {
      stack.push(item);
    } else {
      if (
        stack[stack.length - 1] === 3 &&
        stack[stack.length - 2] === 2 &&
        stack[stack.length - 3] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        answer++;
      } else {
        stack.push(item);
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - splice와 for문을 이용한 풀이
// function solution(ingredient) {
//     let count = 0;
//     for (let i = 0; i < ingredient.length; i++) {
//         if (ingredient.slice(i, i + 4).join('') === '1231') {
//             count++;
//             ingredient.splice(i, 4);
//             i -= 3;
//         }
//     }
//     return count;
// }
