function solution(babbling) {
  let answer = 0;
  babbling.map((item, index) => {
    let prvBabble = "";
    while (item.length !== 0) {
      if (item[0] === "a") {
        if (item.includes("aya")) {
          if (prvBabble === "aya") {
            break;
          } else {
            prvBabble = "aya";
            item = item.replace("aya", "");
          }
        } else {
          break;
        }
      } else if (item[0] === "y") {
        if (item.includes("ye")) {
          if (prvBabble === "ye") {
            break;
          } else {
            prvBabble = "ye";
            item = item.replace("ye", "");
          }
        } else {
          break;
        }
      } else if (item[0] === "w") {
        if (item.includes("woo")) {
          if (prvBabble === "woo") {
            break;
          } else {
            prvBabble = "woo";
            item = item.replace("woo", "");
          }
        } else {
          break;
        }
      } else if (item[0] === "m") {
        if (item.includes("ma")) {
          if (prvBabble === "ma") {
            break;
          } else {
            prvBabble = "ma";
            item = item.replace("ma", "");
          }
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

// 다른사람의 풀이 - 정규표현식을 이용한 풀이
// function solution(babbling) {
//     const regexp1 = /(aya|ye|woo|ma)\1+/;
//     const regexp2 = /^(aya|ye|woo|ma)+$/;
//     return babbling.reduce((ans, word) => (
//       !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
//     ), 0);
// }
