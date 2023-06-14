function solution(arr, intervals) {
  let answer = [];
  intervals.forEach((item, _) => {
    let subArr = arr.slice(item[0], item[1] + 1);
    answer.push(...subArr);
  });
  return answer;
}
