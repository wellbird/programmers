function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  function dfs(len, sum) {
    if (len === length) {
      if (sum === target) {
        answer++;
      }
    } else {
      dfs(len + 1, sum + numbers[len]);
      dfs(len + 1, sum - numbers[len]);
    }
  }
  dfs(0, 0);
  return answer;
}
