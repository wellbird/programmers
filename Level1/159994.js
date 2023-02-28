function solution(cards1, cards2, goal) {
  while (goal.length !== 0) {
    let word = goal.shift();
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
