function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.map((item, index) => {
    item -= 1;
    for (let k of board) {
      if (k[item] === 0) {
        continue;
      } else {
        if (stack.length !== 0) {
          if (stack[stack.length - 1] === k[item]) {
            stack.pop();
            answer += 2;
          } else {
            stack.push(k[item]);
          }
        } else {
          stack.push(k[item]);
        }
        k[item] = 0;
        break;
      }
    }
  });
  return answer;
}

// 다른사람의 풀이 - reduce를 이용한 풀이(transpose 함수 -> 빈 공간을 정리하며 풀이하므로 데이터 양이 적을 땐 비효율적으로 보이지만 데이터의 양이 많아져도 균일한 성능을 보임)
// const transpose = matrix =>
//     matrix.reduce(
//         (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
//         []
//     );
// const solution = (board, moves) => {
//     const stacks = transpose(board).map(row =>
//         row.reverse().filter(el => el !== 0)
//     );
//     const basket = [];
//     let result = 0;
//     for (const move of moves) {
//         const pop = stacks[move - 1].pop();
//         if (!pop) continue;
//         if (pop === basket[basket.length - 1]) {
//             basket.pop();
//             result += 2;
//             continue;
//         }
//         basket.push(pop);
//     }
//     return result;
// };
