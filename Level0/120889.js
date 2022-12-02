function solution(sides) {
  const sort_sides = sides.sort((a, b) => a - b);
  return sort_sides[0] + sort_sides[1] > sort_sides[2] ? 1 : 2;
}

// 다른사람의 풀이 - Math.max와 reduce 이용
// function solution(sides) {
//     var answer = 0;
//     const max = Math.max(...sides);
//     const sum = sides.reduce((a,b) => a + b, 0) - max;
//     answer = max < sum? 1 : 2;
//     return answer;
// }
