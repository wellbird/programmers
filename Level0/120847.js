function solution(numbers) {
  const arr = numbers.sort((a, b) => {
    return b - a;
  });
  const answer = arr[0] * arr[1];
  return answer;
}

// 다른사람의 풀이 - 오름차순 정렬 후 at 사용
// function solution(numbers) {
//     numbers = numbers.sort((a, b) => a - b);
//     return numbers.at(-1) * numbers.at(-2);
// }
