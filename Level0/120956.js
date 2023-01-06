function solution(babbling) {
  let answer = 0;
  babbling.map((item, index) => {
    while (item.length !== 0) {
      if (item[0] === "a") {
        if (item.includes("aya")) {
          item = item.replace("aya", "");
        } else {
          break;
        }
      } else if (item[0] === "y") {
        if (item.includes("ye")) {
          item = item.replace("ye", "");
        } else {
          break;
        }
      } else if (item[0] === "w") {
        if (item.includes("woo")) {
          item = item.replace("woo", "");
        } else {
          break;
        }
      } else if (item[0] === "m") {
        if (item.includes("ma")) {
          item = item.replace("ma", "");
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (item.length === 0) {
      answer++;
    }
  });
  return answer;
}
