function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let first_score = 0;
  let second_score = 0;
  let third_score = 0;
  answers.map((item, index) => {
    if (index < first.length) {
      if (item === first[index]) {
        first_score++;
      }
    } else {
      let idx = index % first.length;
      if (item === first[idx]) {
        first_score++;
      }
    }
    if (index < second.length) {
      if (item === second[index]) {
        second_score++;
      }
    } else {
      let idx = index % second.length;
      if (item === second[idx]) {
        second_score++;
      }
    }
    if (index < third.length) {
      if (item === third[index]) {
        third_score++;
      }
    } else {
      let idx = index % third.length;
      if (item === third[idx]) {
        third_score++;
      }
    }
  });
  const max_score = Math.max(first_score, second_score, third_score);
  let answer = [];
  if (first_score === max_score) {
    answer.push(1);
  }
  if (second_score === max_score) {
    answer.push(2);
  }
  if (third_score === max_score) {
    answer.push(3);
  }
  return answer;
}

// 다른사람의 풀이 - filter을 이용
// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);
//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};
//     return answer;
// }
