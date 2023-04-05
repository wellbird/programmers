function solution(name, yearning, photo) {
  let answer = [];
  let scoreObj = {};
  name.map((item, index) => {
    scoreObj[item] = yearning[index];
  });
  photo.map((detail, _) => {
    let score = 0;
    detail.map((person, _) => {
      if (scoreObj[person] != undefined) {
        score += scoreObj[person];
      }
    });
    answer.push(score);
  });
  return answer;
}
