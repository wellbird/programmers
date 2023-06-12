function solution(arr, delete_list) {
  let answer = [];
  arr.forEach((item, _) => {
    if (!delete_list.includes(item)) {
      answer.push(item);
    }
  });
  return answer;
}
