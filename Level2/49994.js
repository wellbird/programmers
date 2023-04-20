function solution(dirs) {
  let visitLog = [];
  let curStep = [0, 0];
  let dirsArr = dirs.split("");
  dirsArr.map((item, _) => {
    let nextStep = [];
    if (item === "U") {
      if (curStep[1] + 1 <= 5) {
        nextStep = [curStep[0], curStep[1] + 1];
      }
    } else if (item === "D") {
      if (curStep[1] - 1 >= -5) {
        nextStep = [curStep[0], curStep[1] - 1];
      }
    } else if (item === "L") {
      if (curStep[0] - 1 >= -5) {
        nextStep = [curStep[0] - 1, curStep[1]];
      }
    } else if (item === "R") {
      if (curStep[0] + 1 <= 5) {
        nextStep = [curStep[0] + 1, curStep[1]];
      }
    }
    if (nextStep.length !== 0) {
      let move = curStep.concat(nextStep);
      let revMove = nextStep.concat(curStep);
      visitLog.push(move);
      visitLog.push(revMove);
      curStep = nextStep;
    }
  });
  let set = new Set(visitLog.join("|").split("|"));
  return set.size / 2;
}
