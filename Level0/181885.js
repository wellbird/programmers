function solution(todo_list, finished) {
  let answer = [];
  finished.forEach((item, idx) => {
    if (!item) {
      answer.push(todo_list[idx]);
    }
  });
  return answer;
}
