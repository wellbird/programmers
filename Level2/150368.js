function solution(users, emoticons) {
  const answer = [0, 0];
  const percentage = [10, 20, 30, 40];
  const arr = [];
  function dfs(emo, res) {
    if (emo.length < 1) {
      arr.push(res);
      return;
    }
    for (let k = 0; k < percentage.length; k++) {
      dfs(emo.slice(1), [...res, [percentage[k], emo[0]]]);
    }
  }
  dfs(emoticons, []);
  const discount = (per, price) => ((100 - per) / 100) * price;
  arr.forEach((item) => {
    const subAnswer = [0, 0];
    users.forEach(([per, price]) => {
      let sum = 0;
      item.forEach(([dis, cost]) => {
        if (dis >= per) {
          sum += discount(dis, cost);
        }
      });
      if (sum >= price) {
        subAnswer[0] += 1;
      } else {
        subAnswer[1] += sum;
      }
    });
    if (answer[0] < subAnswer[0]) {
      answer[0] = subAnswer[0];
      answer[1] = subAnswer[1];
    } else if (answer[0] === subAnswer[0]) {
      if (answer[1] < subAnswer[1]) {
        answer[1] = subAnswer[1];
      }
    }
  });
  return answer;
}
