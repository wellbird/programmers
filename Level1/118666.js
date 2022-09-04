function solution(survey, choices) {
  let result = {
    RT: 0,
    TR: 0,
    CF: 0,
    FC: 0,
    JM: 0,
    MJ: 0,
    AN: 0,
    NA: 0,
  };
  survey.map((item, idx) => {
    if (choices[idx] === 1) {
      result[item] += 3;
    } else if (choices[idx] === 2) {
      result[item] += 2;
    } else if (choices[idx] === 3) {
      result[item] += 1;
    } else if (choices[idx] === 4) {
      result[item] += 0;
    } else if (choices[idx] === 5) {
      result[item] -= 1;
    } else if (choices[idx] === 6) {
      result[item] -= 2;
    } else if (choices[idx] === 7) {
      result[item] -= 3;
    }
  });

  let answerArray = [];

  if (result.RT >= result.TR) {
    answerArray.push("R");
  } else {
    answerArray.push("T");
  }

  if (result.CF >= result.FC) {
    answerArray.push("C");
  } else {
    answerArray.push("F");
  }

  if (result.JM >= result.MJ) {
    answerArray.push("J");
  } else {
    answerArray.push("M");
  }

  if (result.AN >= result.NA) {
    answerArray.push("A");
  } else {
    answerArray.push("N");
  }

  let answer =
    answerArray[0] + answerArray[1] + answerArray[2] + answerArray[3];
  return answer;
}
